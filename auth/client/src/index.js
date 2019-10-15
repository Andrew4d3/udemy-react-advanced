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
import Signout from './components/auth/Signout';
// (2) As usual, we import the new Signin component into the root react file
import Signin from './components/auth/Signin';

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
				<Route path="/signout" component={Signout} />
				{/* (3) Don't forget to define the Signin route */}
				<Route path="/signin" component={Signin} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
