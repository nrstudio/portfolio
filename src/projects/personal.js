import * as React from "react"
import { Link } from 'react-router-dom'

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import projectStyle from '../styles/project.module.scss';

import waves1 from './personal/waves1.jpg'
import waves2 from './personal/waves2.jpg'
import waves3 from './personal/waves3.jpg'
import waves4 from './personal/waves4.jpg'

import psych1 from './personal/psych1.jpg'
import psych2 from './personal/psych2.jpg'
import psych3 from './personal/psych3.jpg'
import psych4 from './personal/psych4.jpg'

import eyesea from './personal/eyesea.jpg'
import cycles from './personal/cycles.jpg'
import newelement from './personal/newelement.jpg'
import sinkintothesky from './personal/sinkintothesky.jpg'

function Personal() {
  return (
  		<main className="single-project">

	        <section className={` ${projectStyle.topnav} spacing1 `}>
      			<div>
      				<Link className={projectStyle.a} to="/projects">
      		 			<HiArrowNarrowLeft/> Back <span className="display">to Projects</span>
      		 		</Link>
      		 	</div>
      			<div className="flushright">
      				<a href="https://www.nickrobinsonstudio.com" target="_blank" rel="noreferrer">
	      		 	<HiLink/><span className="display">View My </span>Fine Art</a>
	      		</div>
      		</section>

      		<section className={projectStyle.header}>
      			<h2>Personal Archive</h2>
      			<p>(2019-Present)</p>
      		</section>

      		<section className={projectStyle.categories}>
				<ul>
				 	<li><a href="#mtn">Mountain Waves</a></li>
				 	<li><a href="#psych">Psychedeliscapes</a></li>
				 	<li><a href="#prints">Digital Art Prints</a></li>
				</ul>
			</section>

			<section className={projectStyle.section} id="mtn">
	  			<h2>MOUNTAIN WAVES</h2>
  				<section className={projectStyle.branding}>
  					<p>
  				
  					</p>
  				</section>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={waves1}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Mountain Waves One"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={waves2}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Mountain Waves Two"
				  	 	/>
				  	</article><article className={projectStyle.left}>
		  				<img src={waves3}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Mountain Waves Three"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={waves4}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Mountain Waves Four"
				  	 	/>
				  	</article>
			  	</section>
			</section>

			<section className={projectStyle.sectionbg} id="psych">
	  			<h2>PSYCHEDELISCAPES</h2>
  				<section className={projectStyle.branding}>
  					<p>
  						
  					</p>
  				</section>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={psych1}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo"
				  	 	/>
		  			</article>
			  	 	<article className={projectStyle.right}>
				  	 	<img src={psych2}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo, Reverse"
				  	 	/>
				  	</article>
				  	<article className={projectStyle.left}>
		  				<img src={psych3}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo"
				  	 	/>
		  			</article>
			  	 	<article className={projectStyle.right}>
				  	 	<img src={psych4}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo, Reverse"
				  	 	/>
				  	</article>
			  	</section>
			  	
		  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
			</section>

			<section className={projectStyle.section} id="print">
	  			<h2>DIGITAL ART PRINTS</h2>
  				<section className={projectStyle.branding}>
  					<p>
  						I rendered the robot illustration using several instances of the
  						3D Extrude & Bevel effect in Adobe Illustrator. Each component of the
  						Robot was designed this way, and then pieced together in Photoshop.
  					</p>
  				</section>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={eyesea}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Eye Sea 16x20in Poster Print"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={cycles}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Cycles 16x20in Poster Print"
				  	 	/>
				  	</article><article className={projectStyle.left}>
		  				<img src={newelement}
				  	 		 className={projectStyle.pic}
				  	 		 alt="New Element 16x20in Poster Print"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={sinkintothesky}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Sink Into The Sky 16x20in Poster Print"
				  	 	/>
				  	</article>
			  	</section>
			</section>
			<section className={projectStyle.backwrapper}>
				<a href="#top"><button className={projectStyle.btnback}>
					<HiChevronUp/>Back To Top
				</button></a>
			</section>
		</main>
	);
}

export default Personal
