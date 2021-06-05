import * as React from "react"
import { Link } from 'react-router-dom'

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import projectStyle from '../styles/project.module.scss';

import overview from './brooksofyork/overview.jpg'

import logoblack from './brooksofyork/logo-black.png'
import logoreverse from './brooksofyork/logo-reverse.png'
import logocircleblack from './brooksofyork/logo-circle-black.png'
import logocirclereverse from './brooksofyork/logo-circle-reverse.png'

import ohmyrobot from './brooksofyork/ohmyrobot.jpg'
import ohmyrobotiphone from './brooksofyork/ohmyrobot-iphone.png'
import snowbear from './brooksofyork/snowbear.jpg'
import snowbeariphone from './brooksofyork/snowbear-iphone.png'
import togiants from './brooksofyork/togiants.jpg'
import togiantsiphone from './brooksofyork/togiants-iphone.png'

function BrooksOfYork() {
  return (
  		
	     <main className="single-project">

	        <section className={` ${projectStyle.topnav} spacing1 `}>
      			<div>
      				<Link className={projectStyle.a} to="/projects">
      		 			<HiArrowNarrowLeft className={projectStyle.linkicon}/> Back <span className="display">to Projects</span>
      		 		</Link>
      		 	</div>
      			<div className="flushright">
      				<a href="https://brooksofyork.bandcamp.com" target="_blank" rel="noreferrer">
	      		 	<HiLink className={projectStyle.linkicon}/><span className="display">Go to </span>Bandcamp</a>
	      		</div>
      		</section>

      		<section className={projectStyle.header}>
      			<h1>BrooksOfYork</h1>
      			<p><h4 className={projectStyle.projecttype}>Music Branding & Album Artwork</h4> (2020-Present)</p>
      		</section>

      		<section className={projectStyle.categories}>
				<ul>
				 	<li><a href="#overview">Overview</a></li>
				 	<li><a href="#branding">Branding</a></li>
				 	<li><a href="#album">Album Artwork</a></li>
				</ul>
			</section>

			<section className={projectStyle.sectionwrapper} id="overview">
			  	 <article className={projectStyle.left}>
			  	 	<img
			  	 		src={overview}
			  	 		className={projectStyle.pic}
			  	 		alt="BrooksOfYork, 'Oh, My Robot' Digital Single, iPhone Mockup"
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<p>
			  	 		BrooksOfYork is an electronic-infused singer-songwriter project from
			  	        Westchester, NY musician David Brooks. I've been appointed to design
			  	        his series of digital singles, as well as his visual identity and
			  	        Bandcamp layout. Over the past few years, BrooksOfYork has gained
			  	        a notorious following on several media platforms, garnering over
			  	        12,000 followers on Instagram.
			  	 	</p>
			  	 </article>
			</section>

			<section className={projectStyle.sectionbg} id="branding">
	  			<h2>Branding</h2>
  				<section className={projectStyle.branding}>
  					<p>
  						Using Futura Bold with a tracking of 200 for BrooksOfYork's
  						simple logotype, we decided that a logomark would be a great
  						idea to stamp an identity on this relatively new creative project.
  						Dave really liked the Robot imagery as one of the single's artwork,
  						and we went with a bold and minimalized version of just that.
  					</p>
  				</section>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={logoblack}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo"
				  	 	/>
		  			</article>
			  	 	<article className={projectStyle.right}>
				  	 	<img src={logoreverse}
				  	 		 className={projectStyle.pic}
				  	 		 alt="BrooksOfYork Logo, Reverse"
				  	 	/>
				  	</article>
			  	</section>
			  	<section className={projectStyle.sectionwrapper}>
		  			<article className={` ${projectStyle.left} ${projectStyle.center} `}>
		  				<img src={logocircleblack}
				  	 		 className={projectStyle.mediumpic}
				  	 		 alt="BrooksOfYork Logomark"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={logocirclereverse}
				  	 		 className={projectStyle.mediumpic}
				  	 		 alt="BrooksOfYork Logomark, Reverse"
				  	 	/>
				  	</article>
			  	</section>
		  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
			</section>

			<section className={projectStyle.section} id="album">
	  			<h2>Album Artwork</h2>

  				<section className={projectStyle.branding}>
  					<h3>Oh, My Robot</h3>
  					<p>
  						I rendered the robot illustration using several instances of the
  						3D Extrude & Bevel effect in Adobe Illustrator. Each component of the
  						Robot was designed this way, and then pieced together in Photoshop.
  					</p>
  				</section>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={ohmyrobot}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Oh, My Robot Digital Single Cover"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={ohmyrobotiphone}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Oh, My Robot Digital Single on iPhone mockup"
				  	 	/>
				  	</article>
			  	</section>

			  	<section className={projectStyle.branding}>
  					<h3>Snowbear</h3>
  					<p>
  						The second single in this series brought the return of the
  						circle as a reoccurring theme. I used a photo-collage of
  						snow textures that I shot a while back, and cropped theme
  						into the outline of a polar bear.
  					</p>
  				</section>
			  	<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={snowbear}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Snowbear Digital Single Cover"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={snowbeariphone}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Snowbear Digital Single on iPhone mockup"
				  	 	/>
				  	</article>
			  	</section>

			  	<section className={projectStyle.branding}>
  					<h3>To Giants</h3>
  					<p>
  						The last one of this series (thus far) had me thinking
  						about giants not in the sense of living creatures, but
  						stars and galaxies.
  					</p>
  				</section>
			  	<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={togiants}
				  	 		 className={projectStyle.pic}
				  	 		 alt="To Giants Digital Single Cover"
				  	 	/>
		  			</article>
			  	 	<article className={` ${projectStyle.right} ${projectStyle.center} `}>
				  	 	<img src={togiantsiphone}
				  	 		 className={projectStyle.pic}
				  	 		 alt="To Giants Single on iPhone mockup"
				  	 	/>
				  	</article>
			  	</section>
			</section>
			<section className={` ${projectStyle.backwrapper}  ${projectStyle.spacing2}  `}>
				<a href="#top"><button className={projectStyle.btnback}>
					<HiChevronUp/>Back To Top
				</button></a>
			</section>
		</main>
	);
}

export default BrooksOfYork
