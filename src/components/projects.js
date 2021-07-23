import * as React from "react"
import {
		
  		Link,
  		Switch,

	} from "react-router-dom";

import RouteWithSubRoutes from './subroutes'

import projectStyle from '../styles/project.module.scss'
import { projectslist } from "../projects/projectlist.js"

function Projects({ routes }) {
	  return (
  		<div>
  		  <Switch>
	        {routes.map((route, i) => (
	            <RouteWithSubRoutes key={i} {...route} />
	        ))}
     	  </Switch>
	      
	      <section className="content-container">
	      	<h1 className={projectStyle.spacingtop}>Projects</h1>
	      </section>
	      <section className={` content-container ${projectStyle.projectanimate} `}>
			    
			    {projectslist.map((project) => {
			    	const { title, thumb, desc, url } = project;
			    	return (
			    			
				    		<article className="projectcard">
				    			<Link to={url}>
					    			<img
					    				key={project}
					    				src={thumb}
					    				alt={title}
					    				className="project-thumb"
					    			/>
					    			<div className="project-card-hover">
					    				<div className="project-card-info">
							    			<h1>{title}</h1>
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
