import * as React from "react"
import { Link } from 'react-router-dom'

import projectStyle from '../styles/project.module.scss';

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import overview from './newmachines/overview.jpg'

import logotype from './newmachines/logotype.png'
import font1 from './newmachines/font1.png'
import font2 from './newmachines/font2.png'
import font3 from './newmachines/font3.png'

import storyboard1 from './newmachines/storyboard1.jpg'
import storyboard2 from './newmachines/storyboard2.jpg'
import storyboard3 from './newmachines/storyboard3.jpg'
import storyboard4 from './newmachines/storyboard4.jpg'
import storyboard5 from './newmachines/storyboard5.jpg'
import storyboard6 from './newmachines/storyboard6.jpg'
import storyboard7 from './newmachines/storyboard7.jpg'
import storyboard8 from './newmachines/storyboard8.jpg'
import storyboard9 from './newmachines/storyboard9.jpg'
import storyboard10 from './newmachines/storyboard10.jpg'
import storyboard11 from './newmachines/storyboard11.jpg'
import storyboard12 from './newmachines/storyboard12.jpg'
import storyboard13 from './newmachines/storyboard13.jpg'
import storyboard14 from './newmachines/storyboard14.jpg'

import screen1 from './newmachines/screen1.jpg'
import screen2 from './newmachines/screen2.jpg'
import screen3 from './newmachines/screen3.jpg'
import screen4 from './newmachines/screen4.jpg'
import screen5 from './newmachines/screen5.jpg'
import screen6 from './newmachines/screen6.jpg'
import screen7 from './newmachines/screen7.jpg'
import screen8 from './newmachines/screen8.jpg'

function NewMachines() {
  return (
  		<main className="single-project">

	        <section className={` ${projectStyle.topnav} spacing1 `}>
      			<div>
      				<Link className={projectStyle.a} to="/projects">
      		 			<HiArrowNarrowLeft className={projectStyle.linkicon}/> Back <span className="display">to Projects</span>
      		 		</Link>
      		 	</div>
      			<div className="flushright">
      				<a href="https://vimeo.com/519530750" target="_blank" rel="noreferrer">
	      		 	<HiLink className={projectStyle.linkicon}/> Launch <span className="display">Video</span></a>
	      		</div>
      		</section>

      		<section className={projectStyle.header}>
      			<h1>New Machines</h1>
      			<p><h4 className={projectStyle.projecttype}>Motion Graphic</h4> (2018)</p>
      		</section>

      		<section className={projectStyle.categories}>
				<ul>
				 	<li><a href="#overview">Overview</a></li>
				 	<li><a href="#branding">Branding & Assets</a></li>
				 	<li><a href="#storyboard">Storyboard</a></li>
				 	<li><a href="#motion">Motion Graphics</a></li>
				</ul>
			</section>

			<section className={projectStyle.sectionwrapper} id="overview">
			  	<article className={projectStyle.left}>
			  	 	<img
			  	 		src={overview}
			  	 		className={projectStyle.pic}
			  	 		alt="New Machines Logotype and Backdrop"
			  	 	/>
			  	</article>
			  	<article className={projectStyle.right}>
			  	 	<p>
			  	 		New Machines is an imagined TV series, in
			  	 		the form of a 75-second intro sequence. Inspired by HBO's True Detective
			  	 		intro sequences (all seasons), it was created as a Final
			  	 		Project for a Motion Graphics class at Academy of Art University. 
			  	 	</p>
			  	 	<p>
						I exported many Photoshop and Illustrator elements into After Effects to create a
						constantly-moving, surreal, and post-apocalyptic experience. The background theme
						music was written and created by me as well.
			  	 	</p>
			  	</article>
			</section>

			<section className={projectStyle.sectionbg} id="branding">
	  			<h2>Branding</h2>
			  	<section className={projectStyle.center}>
		  			<img src={logotype}
		  				 className={projectStyle.widepic}
		  				 alt="New Machines logotype, black"
		  			/>
		  		</section>

		  		<section className={projectStyle.branding}>
		  			<p>	
		  				I assembled New Machine's logotype using an assembly of the font "Kontanter".
		  				Fonts like these make me excited in that they feel like building blocks, 
		  				ready to be deconstructed and constructed all over again. In Illustrator, I
		  				created my own set of strokes on top of the logotype. I exported this file 
		  				into After Effects and created a path animation of the logotype's strokes which can
		  				seen at the end of the title sequence.
		  			</p>
		  		</section>
		  		
		  		<section className={projectStyle.sectionwrapper}>
		  			<article style={{textAlign: "center"}} className={projectStyle.left}>
			  			
			  			<img src={font1} className={` donthover ${projectStyle.font1} `} alt="Kontanter"/>
			  			<h4>Logotype</h4>
			  			<img src={font2} className={` donthover ${projectStyle.font1} `} alt="Balboa Extra Condensed"/>
			  			<h4>Cast Names</h4>
			  			<img src={font3} className={` donthover ${projectStyle.font1} `} alt="Chainprinter Regular" />
			  			<h4>Complimentary type for end quote and misc.</h4>

		  			</article>
		  			<article className={projectStyle.right}>

			  			<ul>
			  				<li><h3>Key Phrases</h3></li>
			  				<li>Title/Intro Sequence</li>
			  				<li>Alternate Future</li>
			  				<li>Science Fiction</li>
			  				<li>Surveillance</li>
			  				<li>Post-Apocalyptic</li>
			  			</ul>
			  			
		  			</article>
		  		</section>

		  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
  			</section>

			<section className={projectStyle.section} id="storyboard">
  				<h2>Storyboard</h2>
				<section className={projectStyle.storywrapper}>
					<article className={projectStyle.storyitem}>
						<img src={storyboard1}
							 className={projectStyle.storypic}
							 alt="Opening Credits"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard2}
							 className={projectStyle.storypic}
							 alt="Battery/tube-like objects fade in and out"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard3}
							 className={projectStyle.storypic}
							 alt="Credits fade in and out with a set of buildings that create an open jaw shape"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard4}
							 className={projectStyle.storypic}
							 alt="Smoke stacks from bottom of the jaw stretch down like wires on a circuit board"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard5}
							 className={projectStyle.storypic}
							 alt="Scene pedestals down as vacuum-like objects swoop down with casting credits displaying"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard6}
							 className={projectStyle.storypic}
							 alt="Scene pedestals up to wasteland scene with communication towers, overlaying effect"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard7}
							 className={projectStyle.storypic}
							 alt="Moving up into the clouds, an abstract mechanical structure moves out of the clouds"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard8}
							 className={projectStyle.storypic}
							 alt="Wires from earlier move back down the left of the screen, more cast credits"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard9}
							 className={projectStyle.storypic}
							 alt="Wires connect into some kind of terminal with blinking lights"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard10}
							 className={projectStyle.storypic}
							 alt="Dolly out to see all of this is on a tv"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard11}
							 className={projectStyle.storypic}
							 alt="Zooming out further, the room stretches endlessly"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard12}
							 className={projectStyle.storypic}
							 alt="The zoomed-out room becomes a rectangle shape of the New Machines logo"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard13}
							 className={projectStyle.storypic}
							 alt="Completely zoomed out now, the main backdrop and logo now fill the screen"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard14}
							 className={projectStyle.storypic}
							 alt="The intro sequence ends with the logo fizzling out as if the power had been cut"
						/>
					</article>
		  		</section>
		  	</section>
		  	<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  			</section>

			<section className={projectStyle.sectionbg} id="motion">
		  		<h2>Motion Graphic Screens</h2>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={screen1}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Opening Credits"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen3}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Credits fade in and out with a set of buildings that create an open jaw shape"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen2}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Scene pedestals up to wasteland scene with communication towers, overlaying effect"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen4}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Moving up into the clouds, an abstract mechanical structure moves out of the clouds"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen5}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Wires from earlier jaw structure now move horizontally across screen as cast credits fade in/out"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen6}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Dolly out from the abstract imagery to see that it is all being played on a TV"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen7}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Zooming out further, the room stretches endlessly"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen8}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Completely zoomed out now, the main backdrop and logo now fill the screen"
		  				/>
		  			</article>
		  		</section>
		  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
		  	</section>
		</main>
	);
}

export default NewMachines
