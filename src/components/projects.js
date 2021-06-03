import * as React from "react"
import {
		
  		Link,
  		Switch,

	} from "react-router-dom";

import RouteWithSubRoutes from './subroutes'

import projectStyle from '../styles/project.module.scss'
import { projectslist } from "../projects/projectlist.js"

import { HiOutlineEye } from "react-icons/hi"

// import Home from "./home"
// import About from "./about"
// import Shapeshift from "../projects/shapeshift" 
// import DreamTracer from "../projects/dreamtracer"
// import WessMeetsWest from "../projects/wmw"
// import FrontPorch from "../projects/frontporch"
// import BrooksOfYork from "../projects/brooks"
// import Songhive from "../projects/songhive"
// import NewMachines from "../projects/newmachines"
// import Misc from "../projects/misc"
// import Personal from "../projects/personal"


function Projects({ routes }) {
	  
	  return (
  		<div>
  		  <Switch>
	        {routes.map((route, i) => (
	            <RouteWithSubRoutes key={i} {...route} />
	        ))}
     	  </Switch>
	      
	      <section className="content-container">
	      	<h1 className={projectStyle.spacingtop}>View Projects</h1>
	      	<p className="hovertip">Hover over project thumbnail for more info</p>
	      </section>
	      <section className={` content-container ${projectStyle.projectanimate} `}>
			    
			    {projectslist.map((project) => {
			    	const { title, thumb, desc, url } = project;
			    	return (
			    			
				    		<article className="projectcard">
				    			<HiOutlineEye className="eyecon"/>
				    			<Link to={url}>
					    			<img
					    				key={project}
					    				src={thumb}
					    				alt={title}
					    				className="project-thumb"
					    			/>
					    			<div className="project-card-hover">
					    				<div className="project-card-info">
							    			<h2>{title}</h2>
							    			<small>{desc}</small>
							    		</div>
					    			</div>
					    			<div className="project-info">
					    				<h2 className="project-title">{title}</h2>
					    				<p className="project-desc">{desc}</p>
					    			</div>
				    			</Link>
				    		</article>
			    		
			    	);
			    })}

		  </section>
		</div>
	);
}

export default Projects
