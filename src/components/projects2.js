import * as React from "react"
import {
		Route,
  		Link,
  		Switch,
  		useParams,
  		useRouteMatch

} from "react-router-dom";

import { projectslist } from "../projects/projectlist.js"

import { HiOutlineEye } from "react-icons/hi"

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
  		<>
  		  <Switch>
	        {routes.map((route, i) => (
	            <Route
					path={route.path}
					render={ props => (
						<route.component {...props} routes={route.routes} />
					)}
				/>
	        ))}
     	  </Switch>
	      
	      <section className="content-container">
			    {projectslist.map((project) => {
			    	const { title, thumb, desc, url } = project;
			    	return (
			    		<>	
				    		<article className="project-card">
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
			    		</>
			    	);
			    })}

		  </section>
		</>
	);
}

export default Projects
