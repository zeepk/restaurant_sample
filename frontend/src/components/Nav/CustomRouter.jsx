import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';
import Header from './Header';
import Menu from '../Menu';
export default function CustomRouter() {
	return (
		<Router>
			<Header />
			{/* <Redirect exact from="/" to="home" /> */}
			<Switch>
				<Route path="/home">
					<div>home</div>
				</Route>
				<Route path="/menu">
					<Menu />
				</Route>
				<Route path="/contact">
					<div>contact</div>
				</Route>
			</Switch>
		</Router>
	);
}
