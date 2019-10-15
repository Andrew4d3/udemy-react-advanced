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
// (2) Again, we import it
import Signout from './components/auth/Signout';

import reducers from './reducers';

const store = createStore(
	reducers,
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
				{/* (3) And set a route for it */}
				<Route path="/signout" component={Signout} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
