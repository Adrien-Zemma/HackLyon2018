import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import QCM from './Components/QCM/QCM';
	
class RouteSys extends React.Component
{
	render()
	{
		return (
			<div>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/qcm" component={QCM} />
					</div>
				</Router>
			</div>
		);
	};
};

export default RouteSys;