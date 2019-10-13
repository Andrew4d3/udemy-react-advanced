import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';

import reducers from './reducers';

const store = createStore(
	reducers,
	// (2) Now we need to find a way to fetch that token if our browser gets refreshed
	// One way to do it, is by setting it within the inital state passed to the redux provider
	{
		auth: { authenticated: localStorage.getItem('token') }
	},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={Signup} />
				<Route path="/feature" component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
