import * as React from "react"
import { Link } from 'react-router-dom'

import projectStyle from '../styles/project.module.scss';

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import overview from './wmw/overview.jpg'

import handwritten1 from './wmw/handwritten1.png'
import handwritten2 from './wmw/handwritten2.jpg'
import block1 from './wmw/block1.png'
import block2 from './wmw/block2.jpg'

import lightalbum from './wmw/light.jpg'
import vinylfront from './wmw/vinyl-front.jpg'
import vinylback from './wmw/vinyl-back.jpg'
import vinylspine from './wmw/vinyl-spine.jpg'
import vinylfold from './wmw/vinyl-fold.jpg'
import vinyllabel from './wmw/vinyl-label.jpg'
import barricades from './wmw/barricades.jpg'
import epfront from './wmw/ep-front.jpg'
import epback from './wmw/ep-back.jpg'

import shirt1 from './wmw/shirt1.png'
import shirt2 from './wmw/shirt2.png'
import poster1 from './wmw/poster1.jpg'
import poster2 from './wmw/poster2.jpg'

import promo1 from './wmw/promo1.jpg'
import promo2 from './wmw/promo2.jpg'
import promo3 from './wmw/promo3.jpg'
import backdrop1 from './wmw/backdrop1.jpg'
import backdrop2 from './wmw/backdrop2.jpg'
import backdrop3 from './wmw/backdrop3.jpg'


function WessMeetsWest() {
  return (
	      <main className="single-project">

			    <section id="top" className={` ${projectStyle.topnav} spacing1 `}>
	      			<div>
	      				<Link className={projectStyle.a} to="/projects">
	      		 			<HiArrowNarrowLeft/> Back <span className="display">to Projects</span>
	      		 		</Link>
	      		 	</div>
	      			<div className="flushright">
	      				
		      		</div>
	      		</section>

	      		<section className={projectStyle.header}>
	      			<h2>Wess Meets West</h2>
	      			<p><h4 className={projectStyle.projecttype}>Band Design Campaign</h4> (2015-2020)</p>
	      		</section>

	      		<section className={projectStyle.categories}>
					<ul>
					 	<li><a href="#overview">Overview</a></li>
					 	<li><a href="#branding">Branding</a></li>
					 	<li><a href="#album">Album Artwork</a></li>
					 	<li><a href="#merchandise">Merch & Posters</a></li>
					 	<li><a href="#motion">Motion Graphics</a></li>
					</ul>
				</section>

				
			    <section className={projectStyle.sectionwrapper} id="overview">
				  	<article className={projectStyle.left}>
				  	 	<img
				  	 		src={overview}
				  	 		className={projectStyle.pic}
				  	 		alt="Wess Meets West Vinyl Packaging"
				  	 	/>
				  	</article>
				  	<article className={projectStyle.right}>
				  	 	<p>
				  	 		Wess Meets West is an instrumental "post-rock" band that I play
				  	 		guitar in and do the art direction for. Over the past several years,
				  	 		I have designed the visual identity, merchandise, album art, poster
				  	 		design, and numerous other things for the band. With a graphic designer
				  	 		in the band, as well as sound engineers, the machine is well-oiled.
				  	 	</p>
				  	</article>
				</section>

				<section className={projectStyle.sectionbg} id="branding">
		  			<h2>BRANDING</h2>
				  		<section className={projectStyle.branding}>
			  				<p>
					  	 		I wrote out the band name for its primary logo,
					  	 	    scanning it and making some modifications in digital.
					  	 	    Handwritten logotype communicates a sense of humanity
					  	 	    and organic flow, which are attributes of the band's sound.
					  	 	</p>
					  	 	<article className={projectStyle.center}>
						  	 	<img src={handwritten1}
						  	 		 className={projectStyle.widepic}
						  	 		 alt="Handwritten Logo"
						  	 	/>
						  	 	<img src={handwritten2}
						  	 		 className={projectStyle.widepic}
						  	 		 alt="Handwritten Logo on Black"
						  	 	/>
						  	</article>
					  	</section>
					  	<section className={projectStyle.sectionwrapper}>
				  			<article className={` ${projectStyle.left} ${projectStyle.flexleft}`}>
						  	 	<p>
									I also conceptualized a contrasting logomark that are the band's
									initials in a geometric block typeface. The W's and M mimic
									mountain shapes, as one of the band's earlier songs is titled
									"The Mountains are Shaking at Their Roots".
						  	 	</p>
					  		</article>
						  	<article className={` ${projectStyle.center} ${projectStyle.right} ${projectStyle.flexright}`}>
						  	 	<img src={block1}
						  	 		 className={projectStyle.pic}
						  	 		 alt="Block Mountain Logo"
					  	 		/>
					  	 		<img src={block2}
						  	 		 className={projectStyle.pic}
						  	 		 alt="Block Mountain Logo on Black"
					  	 		/>
						  	</article>
				  		</section>
				  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
		  					<a href="#top"><button className={projectStyle.btnback}>
		  						<HiChevronUp/>Back To Top
		  					</button></a>
		  				</section>
			    </section>

			    <section className={projectStyle.section}>
			    	<h2>ALBUM ARTWORK</h2>
				    <section className={projectStyle.sectionwrapper} id="album">
					  	<article className={projectStyle.left}>
					  	 	<img
					  	 		src={lightalbum}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'A Light Within The Fracture' Artwork"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
							<h3>"A Light Within The Fracture" Vinyl LP Packaging</h3>
							<p>
								This concept began with several photos that I took around
								Kettle Pond in Groton State Forest, Vermont. I wanted to
								create an immersive scene that runs in parallel with the
								quality and character of the music. 
							</p>
							<p>
								I wrote a different logotype for this album using a
								thinner stroke. The typeface throughout the artwork is
								“Monarcha”.
							</p>
							<p>
								The album was printed in a gatefold 2x LP format, along with CD’s. 
					  	 	</p>
					  	</article>
					</section>

					<section className={projectStyle.sectionwrapper}>
					  	<article className={projectStyle.left}>
					  	 	<img
					  	 		src={vinylfront}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'A Light Within The Fracture' Mockup, Front"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
							<img
					  	 		src={vinylback}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'A Light Within The Fracture' Mockup, Back"
					  	 	/>
					  	</article>
					</section>

					<section className={projectStyle.center}>
				  	 	<img src={vinylspine}
				  	 		 className={projectStyle.widepic}
				  	 		 alt="Wess Meets West 'A Light Within The Fracture' Spine"
				  	 	/>
				  	 	<img src={vinylfold}
				  	 		 className={projectStyle.widepic}
				  	 		 alt="Wess Meets West 'A Light Within The Fracture' Inside the Gatefold"
				  	 	/>
				  	 	<img src={vinyllabel}
				  	 		 className={projectStyle.widepic}
				  	 		 alt="Wess Meets West 'A Light Within The Fracture' Vinyl Label"
				  	 	/>
					</section>
				
					<section className={projectStyle.sectionwrapper}>
					  	<article className={projectStyle.left}>
					  	 	<img
					  	 		src={barricades}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'Barricades' Artwork"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
							<h3>"Barricades" Vinyl EP Packaging</h3>
							<p>
								Our first vinyl release came in the form of a
								4-song EP, in a jacket sleeve format. 
							</p>
							<p>
								The artwork is a scanned watercolor Photoshopped
								onto manipulated paper textures. “IM Fell English”
								is the font used throughout. 
							</p>
							<p>
								The sound of this particular release is fiery and more
								“loud” than previous releases, so a red, earthy color
								scheme felt appropriate.
							</p>
					  	</article>
					</section>
				
					<section className={projectStyle.sectionwrapper}>
					  	<article className={projectStyle.left}>
					  	 	<img
					  	 		src={epfront}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'Barricades' Mockup, Front"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
							<img
					  	 		src={epback}
					  	 		className={projectStyle.pic}
					  	 		alt="Wess Meets West 'Barricades' Mockup, Back"
					  	 	/>
					  	</article>
					</section>
					<section className={projectStyle.backwrapper}>
		  				<a href="#top"><button className={projectStyle.btnback}>
		  					<HiChevronUp/>Back To Top
		  				</button></a>
		  			</section>
				</section>

				<section className={projectStyle.sectionbg} id="merchandise">
		  			<h2>MERCHANDISE & POSTERS</h2>
			  		<section className={projectStyle.branding}>
		  				<p>
				  	 		With the roll-out of our "A Light Within The Fracture" Vinyl LP,
				  	 		I designed two T-shirt designs.
				  	 	</p>
				  	 	<article className={projectStyle.center}>
					  	 	<img src={shirt1}
					  	 		 className={projectStyle.widepic}
					  	 		 alt="Spiral Moons T-shirt Design"
					  	 	/>
					  	 	<img src={shirt2}
					  	 		 className={projectStyle.widepic}
					  	 		 alt="Moon Road"
					  	 	/>
					  	</article>
				  	</section>
				  	
			  		<section className={projectStyle.branding}>
			  			<p>I created the 18x24-inch poster for our album release show, which was printed
			  			   on a paper card stock, and provided to attendees who purchased the album.
			  			   The second poster was an 11x17-inch promotional flyer for a free show with our friends
			  			   in the Boston-based band, "Pray For Sound".
			  			</p>
			  		</section>
				  	<section className={projectStyle.sectionwrapper}>
				  		<article className={projectStyle.left}>
					  	 	<img
					  	 		src={poster1}
					  	 		className={` ${projectStyle.pic} ${projectStyle.shadow} `}
					  	 		alt="Wess Meets West A Light Within The Fracture Album Release Poster"
					  	 	/>
					  	</article>
					  	<article className={projectStyle.right}>
							<img
					  	 		src={poster2}
					  	 		className={` ${projectStyle.posterpic} ${projectStyle.shadow} `}
					  	 		alt="Wess Meets West BAR New Haven, CT Show Poster/Flyer"
					  	 	/>
					  	</article>
				  	</section>
				  	<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
		  				<a href="#top"><button className={projectStyle.btnback}>
		  					<HiChevronUp/>Back To Top
		  				</button></a>
		  			</section>
			  	</section>

			  	<section className={projectStyle.section}>
			  		<h2>Motion Graphics</h2>
			  		<section className={projectStyle.sectionwrapper}>
				  		<article className={projectStyle.left}>
				  			<h3>A Light Within the Fracture Promo Animation</h3>
							<p>
								This 30-second promo was made as a illustrative imitation
								of the album's forested artwork. We follow an orange ball,
								symbolizing the band's sound moving through space as a few
								testimonials slide in and out of view.
							</p>
							<a href="https://youtu.be/snP3p2ObwdM" target="_blank" rel="noreferrer"><HiLink/> Link to Video</a>
				  		</article>
				  		<article className={projectStyle.right}>
				  			<img
					  	 		src={promo1}
					  	 		className={` ${projectStyle.pic} ${projectStyle.shadow} `}
					  	 		alt="Promo Screen Cap 1"
					  	 	/>
				  		</article>
				  		<article className={projectStyle.left}>
				  			<img
					  	 		src={promo2}
					  	 		className={` ${projectStyle.pic} ${projectStyle.shadow} `}
					  	 		alt="Promo Screen Cap 2"
					  	 	/>
				  		</article>
				  		<article className={projectStyle.right}>
				  			<img
					  	 		src={promo3}
					  	 		className={` ${projectStyle.pic} ${projectStyle.shadow} `}
					  	 		alt="Promo Screen Cap 3"
					  	 	/>
				  		</article>
				  	</section>
				  	<section className={projectStyle.sectionwrapper}>
				  		<article className={projectStyle.left}>
				  			<h3>“Monuments” Live Backdrop Animation</h3>
				  			<p>
					  			I created this motion graphic using photos and videos that I
					  			shot with my Sony Alpha 6300. The purpose is to project the video
					  			onto the band and the wall behind it, during the song, adding to
					  			the live experience.
				  			</p>
				  			<a href="https://youtu.be/imjp2qVJ8mU" target="_blank" rel="noreferrer"><HiLink/> Link to Video</a>
				  		</article>
				  		<article className={projectStyle.right}>
				  			<img
					  	 		src={backdrop1}
					  	 		className={projectStyle.pic}
					  	 		alt="'Monuments' Backdrop Video Screen Cap 1"
					  	 	/>
				  		</article>
				  		<article className={projectStyle.left}>
				  			<img
					  	 		src={backdrop2}
					  	 		className={projectStyle.pic}
					  	 		alt="'Monuments' Backdrop Video Screen Cap 2"
					  	 	/>
				  		</article>
				  		<article className={projectStyle.right}>
				  			<img
					  	 		src={backdrop3}
					  	 		className={projectStyle.pic}
					  	 		alt="'Monuments' Backdrop Video Screen Cap 3"
					  	 	/>
				  		</article>
				  	</section>
				  	<section className={projectStyle.backwrapper}>
		  				<a href="#top"><button className={projectStyle.btnback}>
		  					<HiChevronUp/>Back To Top
		  				</button></a>
		  			</section>
			  	</section>
				

		  </main>
	);
}

export default WessMeetsWest
