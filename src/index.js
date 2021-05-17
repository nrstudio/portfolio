import React from 'react';
import ReactDom from 'react-dom';
import {
		
  		BrowserRouter as Router,
  		Switch
  		} from "react-router-dom";

import './styles/index.css';
import 'react-image-lightbox/style.css';

import Scroll from './components/scroll';
import RouteWithSubRoutes from './components/subroutes'

import Layout from './components/layout'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'

import DreamTracer from "./projects/dreamtracer"
import Shapeshift from "./projects/shapeshift" 
import WessMeetsWest from "./projects/wmw"
import FrontPorch from "./projects/frontporch"
import BrooksOfYork from "./projects/brooks"
import Songhive from "./projects/songhive"
import NewMachines from "./projects/newmachines"
import Misc from "./projects/misc"
import Personal from "./projects/personal"

			// <Route exact path="/" component={Home} />
			// <Route path="/projects" component={Projects} />
			// <Route path="/about" component={About} />

const routes = [
	{
		path: "/",
		component: Home,
		exact: true,
		routes: [
			{
				path: "/projects/dreamtracer",
				component: DreamTracer
			},
			{
				path: "/projects/shapeshift",
				component: Shapeshift
			},
			{
				path: "/projects/wmw",
				component: WessMeetsWest
			},
			{
				path: "/projects/frontporch",
				component: FrontPorch
			},
			{
				path: "/projects/brooks",
				component: BrooksOfYork
			},
			{
				path: "/projects/songhive",
				component: Songhive
			},
			{
				path: "/projects/newmachines",
				component: NewMachines
			},
			{
				path: "/projects/misc",
				component: Misc
			},
			{
				path: "/projects/personal",
				component: Personal
			}
		]
	},
	{
		path: "/about",
		component: About
	},
	{
		path: "/projects",
		component: Projects,
		routes: [
			{
				path: "/projects/dreamtracer",
				component: DreamTracer
			},
			{
				path: "/projects/shapeshift",
				component: Shapeshift
			},
			{
				path: "/projects/wmw",
				component: WessMeetsWest
			},
			{
				path: "/projects/frontporch",
				component: FrontPorch
			},
			{
				path: "/projects/brooks",
				component: BrooksOfYork
			},
			{
				path: "/projects/songhive",
				component: Songhive
			},
			{
				path: "/projects/newmachines",
				component: NewMachines
			},
			{
				path: "/projects/misc",
				component: Misc
			},
			{
				path: "/projects/personal",
				component: Personal
			}
		]
	}
];

function App() {
	return (
		<>

		<Router>
			<Scroll />
			<Layout />
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>	
		</Router>
		
		</>
	);
}

ReactDom.render(
	<App />,
	document.getElementById('root')
);