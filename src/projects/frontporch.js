import * as React from "react"
import { Link } from 'react-router-dom'

import projectStyle from '../styles/project.module.scss';

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import overview from './frontporch/beerpour.jpg'
import logomark from './frontporch/logomark.png'
import fulllogo1 from './frontporch/full-logo.png'
import fulllogo2 from './frontporch/full-logo-black.png'

import beerdisplay from './frontporch/beerdisplay.jpg'
import canlabel from './frontporch/canlabel.jpg'
import charcoal from './frontporch/charcoal.jpg'

function FrontPorch() {
  return (
  		<main className="single-project">

	        <section className={` ${projectStyle.topnav} spacing1 `}>
      			<div>
      				<Link className={projectStyle.a} to="/projects">
      		 			<HiArrowNarrowLeft className={projectStyle.linkicon}/> Back <span className="display">to Projects</span>
      		 		</Link>
      		 	</div>
      			<div className="flushright">

	      		</div>
      		</section>

      		<section className={projectStyle.header}>
      			<h1>Front Porch Brewing</h1>
      			<p><h4 className={projectStyle.projecttype}>Branding Identity & Packaging Art</h4> (2016-2018)</p>
      		</section>

      		<section className={projectStyle.categories}>
				<ul>
				 	<li><a href="#overview">Overview</a></li>
				 	<li><a href="#branding">Branding</a></li>
				 	<li><a href="#beer">Beer Label</a></li>
				</ul>
			</section>
	     
	     	<section className={projectStyle.sectionwrapper} id="overview">
			  	<article className={projectStyle.left}>
			  	 	<img
			  	 		src={overview}
			  	 		className={projectStyle.pic}
			  	 		alt="Front Porch Brewery Beer Pour. Tulip Glass"
			  	 	/>
			  	</article>
			  	<article className={projectStyle.right}>
			  	 	<p>
			  	 		Front Porch Brewing is a local craft beer company based out of Wallingford,
			  	 		Connecticut. Upon their conception, I was appointed to design their logo
			  	 		and visual identity. Since then, the brewery has evolved (as many do)
			  	 		and their beer can be purchased in stores throughout Southern Connecticut.
			  	 	</p>
			  	 	<p>
						Along with their logo design, I worked on the packaging art for their
						first canning run, a 16oz Pale Ale called "Devil Children".
			  	 	</p>
			  	</article>
			</section>

			<section className={projectStyle.sectionbg} id="branding">
	  			<h2>Branding</h2>
			  		<section className={projectStyle.sectionwrapper}>
			  			<article className={projectStyle.left}>
			  				<p>
			  					When collaborating with the brewery owners, they wanted a
			  					logo that represented a balance between leisure time and
			  					partying. They didn’t want to be too clean, or too “messy”.
			  					They wanted something bold, but fun. 
			  				</p>
			  				<p>
								It was this idea of hanging out enjoying some late afternoon
								beers out on a friend’s porch that inspired me to explore the
								symbol of an Adirondack chair. 
							</p>
			  			</article>
				  	 	<article className={projectStyle.right}>
					  	 	<img src={logomark}
					  	 		 className={projectStyle.pic}
					  	 		 alt="Front Porch Adirondack Chair Logomark"
					  	 	/>
					  	</article>
				  	</section>

				  	<section className={projectStyle.sectionwrapper2}>
			  			<section className={projectStyle.branding}>
					  	 	<p>
								The typeface used for the Front Porch Brewing branding is a freeware
								front called “Minotaur”, the type, with all of its jagged terminals and
								bold widths, is a beloved choice of the owners and serves the packaging art well.
					  	 	</p>
				  		</section>
					  	<section className={projectStyle.sectionwrapper}>
					  		<article className={projectStyle.left}>
						  	 	<img src={fulllogo1}
						  	 		 className={projectStyle.pic}
						  	 		 alt="Front Porch Brewing Logo with Text"
						  	 	/>
					  		</article>
					  		<article className={projectStyle.right}>
						  	 	<img src={fulllogo2}
						  	 		 className={projectStyle.pic}
						  	 		 alt="Front Porch Brewing Logo with Text Reverse"
						  	 	/>
					  		</article>
					  	</section>
			  		</section>
			  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
	  					<a href="#top"><button className={projectStyle.btnback}>
	  						<HiChevronUp/>Back To Top
	  					</button></a>
	  				</section>
			    </section>

			    <section className={projectStyle.section} id="beer">
			    	<h2>Beer Label</h2>
					<section className={projectStyle.sectionwrapper}>
					  	<article className={projectStyle.left}>
					  	 	<img
					  	 		src={beerdisplay}
					  	 		className={projectStyle.pic}
					  	 		alt="Devil Children Can & Pour"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
					  		<h3>DEVIL CHILDREN PALE ALE</h3>
					  	 	<p>
					  	 		The brewery commissioned me for a “creepy” and “gothic” label
					  	 		for their first canning run of their 16oz pale ale called "Devil Children".
					  	 		I immediately thought of the Poltergeist (1982) movie as a direct source
					  	 	    of inspiration. 
					  	 	</p>
					  	 	<p>
								I drew a charcoal and graphite drawing as the main artwork for
								the beer label. I also wrote the name of the beer in charcoal
								pencil and scanned it in to simulate a child’s handwriting. 
					  	 	</p>
					  	</article>
					</section>
					<section className={projectStyle.sectionwrapper}>
						<article className={projectStyle.left}>
							<img
					  	 		src={canlabel}
					  	 		className={projectStyle.pic}
					  	 		alt="Devil Children Can and Label"
					  	 	/>
					  	 </article>
					  	 <article className={projectStyle.right}>
							<p>
								I used the typeface Lo-Res 22 Serif as a kind of pixelated
								font to contrast with the organic and eerie vibe of the drawing.
								
					  	 	</p>
					  	 </article>
					</section>
					<section className={projectStyle.sectionwrapper}>
						<img
				  	 		src={charcoal}
				  	 		className={projectStyle.pic}
				  	 		alt="Devil Children Charcoal Drawing"
				  	 	/>
					</section>
				</section>
				<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
		</main>
	);
}

export default FrontPorch
