import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Friends from './Friends';
import LoginForm from './LoginForm';

const Navigation = (props) => {
	return (
		<>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/protected">Friends</Link>
							</li>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						{/* <Route exact path="/" /> */}
						<PrivateRoute exact path="/protected" component={Friends} />
						<Route exact path="/login" component={LoginForm} props={props} />
					</Switch>
				</div>
			</Router>
		</>
	);
};
export default Navigation;
