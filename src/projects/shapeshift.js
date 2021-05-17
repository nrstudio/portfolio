import * as React from "react"
import { Link } from 'react-router-dom'

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

import projectStyle from '../styles/project.module.scss';

import overview from './shapeshift/overview.jpg'

import logoblack from './shapeshift/logo-stacked-black.jpg'
import sketch1 from './shapeshift/logo-sketch-1.jpg'
import sketch2 from './shapeshift/logo-sketch-2.jpg'
import oldlogo1 from './shapeshift/alt-logo1.jpg'
import oldlogo2 from './shapeshift/alt-logo2.jpg'
import logomark from './shapeshift/logomark-black.jpg'
import oldlogotype from './shapeshift/old-logotype.jpg'
import finallogo1 from './shapeshift/final-logo-1.jpg'
import finallogo2 from './shapeshift/final-logo-2.jpg'
import charcoal from './shapeshift/charcoal.png'
import gold from './shapeshift/gold.png'
import yellow from './shapeshift/yellow.png'
import font1 from './shapeshift/font1.png'
import font2 from './shapeshift/font2.png'
import font3 from './shapeshift/font3.png'

import campfire1 from './shapeshift/campfire-label.jpg'
import campfire2 from './shapeshift/campfire-cans.jpg'
import cloudkicker1 from './shapeshift/cloudkicker-label.jpg'
import cloudkicker2 from './shapeshift/cloudkicker-cans.jpg'
import jupiter from './shapeshift/jupiter-bottle.jpg'
import phobos from './shapeshift/phobos-bottle.jpg'
import testing from './shapeshift/testing.png'

import oldtaproomdesktop from './shapeshift/old-taproom-desktop.png'
import newtaproomdesktop from './shapeshift/new-taproom-desktop.png'
import oldbeersmobile from './shapeshift/old-beers-mobile.png'
import newbeersmobile from './shapeshift/new-beers-mobile.png'
import newbeersmobile2 from './shapeshift/new-beers-mobile2.png'
import oldmobilemenu from './shapeshift/old-mobile-menu.png'
import newmobilemenu from './shapeshift/new-mobile-menu.png'

import homepage from './shapeshift/home-desktop.jpg'
import taproompage from './shapeshift/taproom-desktop.jpg'
import ourbeerspage from './shapeshift/ourbeers-desktop.jpg'
import aboutpage from './shapeshift/about-desktop.jpg'
import finduspage from './shapeshift/findus-desktop.jpg'
import homemobile from './shapeshift/home-mobile.jpg'
import taproommobile from './shapeshift/taproom-mobile.jpg'
import beersmobile from './shapeshift/beers-mobile.jpg'
import aboutmobile from './shapeshift/about-mobile.jpg'
import findusmobile from './shapeshift/findus-mobile.jpg'
 
function Shapeshift() {
  return (
  		<main className="single-project">

	      <section className={` ${projectStyle.topnav} spacing1 `}>
	      	<div><Link className={projectStyle.a} to="/projects">
	      		 <HiArrowNarrowLeft className={projectStyle.linkicon}/> Back <span className="display">to Projects</span></Link></div>
	      	<div className="flushright"><a href="http://shapeshiftbrewing.netlify.com" target="_blank" rel="noreferrer">
	      		 <HiLink className={projectStyle.linkicon}/> Launch <span className="display">Website</span></a></div>
	      </section>

	      <section className={projectStyle.header}>
	      	<h1>Shapeshift Brewing</h1>
	      	<p><h4 className={projectStyle.projecttype}>Mockup Design Campaign</h4> (2018-2020)</p>
	      </section>

	      <section className={projectStyle.categories}>
			 <ul>
			 	<li><a href="#overview">Overview</a></li>
			 	<li><a href="#target">Target Audience</a></li>
			 	<li><a href="#branding">Branding</a></li>
			 	<li><a href="#packaging">Packaging</a></li>
			 	<li><a href="#ux">UX</a></li>
			 	<li><a href="#web">Web Design</a></li>
			 </ul>
		  </section>

		 
		    <section className={projectStyle.sectionwrapper} id="overview">
			  	 <article className={projectStyle.left}>
			  	 	<img
			  	 		src={overview}
			  	 		className={projectStyle.pic}
			  	 		alt="Shapeshift Brewing Pour Shot"
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<p>
			  	 		Shapeshift Brewing is an imagined brewery that I conceptualized 
			  	 		the branding identity, packaging art and web presence for. 
			  	 	</p>
			  	 	<p>
						In a highly competitive market, my role was to create a uniquely
						creative design compaign to separate Shapeshift from the rest of
						the craft breweries in the New England area.
			  	 	</p>
			  	 </article>
			</section>
		  

		    <section className={projectStyle.sectionbg} id="target">
		  		<h2>Target Audience</h2>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={` ${projectStyle.left} ${projectStyle.leftwidth} ${projectStyle.flexleft}`}>
				  	 	<p>
				  	 		Shapeshift sets out to make the connection between art,
				  	 		music, and beer.  
				  	 		At the very core of these areas is creativity 
				  	 		and imagination. 
				  	 		 Craft beer is “local” at heart. With the beer’s numerous
				  	 		references to music,
				  	 		we aim to attract beer enthusiasts of all kinds, but mainly those people who enjoy	
				  	 		the fruits of local music and art, and the community that they bring together.
				  	 	</p>
			  		</article>
				  	 <article className={` ${projectStyle.right} ${projectStyle.flexright}`}>
				  	 	<ul>
				  	 		<li>Male, 21-45</li>
				  	 		<li>Female, 21-45</li>
				  	 		<li>Craft Beer Enthusiasts</li>
				  	 		<li>Creative Types</li>
				  	 		<li>Musicians</li>
				  	 	</ul>
				  	 </article>
		  		</section>
		  </section>

		  <section className={projectStyle.section} id="branding">
		  	<h2>Branding</h2>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
		  			<img src={logoblack}
		  				 className={projectStyle.pic}
		  				 alt="Shapeshift Brewing Logo (Black)"
		  			/>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<p>
		  				Shapes are a big part of Shapeshift’s branding, representing
		  				the adaptation to change as well as the never-ending
		  				possibilities of brewing.
		  			</p>
		  			<p>
		  				The arrival to the finished logo was based on a balance
		  				of simplicity, variety, and recognition. A star felt too occult,
		  				and using a myriad of shapes was too complex.
		  			</p>
		  			<p>
		  				The hop nugget encased in a 7-sided polgyon represents
		  				change and variety in the Universe. 
		  			</p>
		  		</article>

		  		<article className={` ${projectStyle.left} ${projectStyle.smallpicwrap} spacing1 `}>
		  			<img src={sketch1}
		  				 alt="Logo Sketches"
		  				 className={projectStyle.smallpic}
		  			/>
		  			<img src={sketch2}
		  				 alt="More Logo Sketches"
		  				 className={projectStyle.smallpic}
		  			/>
		  		</article>
		  		<article className={` ${projectStyle.right} spacing1 `}>
		  			<p>
		  				The arrival to the final logo was done by sifting through
		  				a multitude of simple shapes, while trying to combine that
		  				concept with the recognizable hop nugget.
		  			</p>
		  			<p>
		  				To avoid appearing too occult-ish, I strayed from the
		  				7-sided star and went in a circular direction.
		  			</p>
		  			<p>
		  				But I still wanted to include geometry, for its simplicity
		  				in contrast to the complex and organic nature of the beer itself.
		  			</p>
		  		</article>

		  		<article className={` ${projectStyle.left} ${projectStyle.smallpicwrap} `}>
		  			<img src={oldlogo1}
		  				 alt="Old Logo Idea"
		  				 className={projectStyle.smallpic}
		  			/>
		  			<img src={oldlogo2}
		  				 alt="Old Logo Idea 2"
		  				 className={projectStyle.smallpic}
		  			/>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<p>
		  				The seal-shaped logos I digitally produced after the sketching
		  				phase proved to be a bit too complex. I wanted something more
		  				bold and unified.
		  			</p>
		  		</article>
		  	</section>

		  	<section>
		  		<img src={logomark}
		  			 className={projectStyle.mediumpic}
		  			 alt="Shapeshift Logomark"
		  		/>
		  		<p>Final Logo</p>
		  	</section>

		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
		  			<img src={oldlogotype}
		  				 alt="Final Logo"
		  				 className={projectStyle.pic}
		  			/>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<p>
		  				The search for the correct logotype included a bold, condensed,
		  				sans-serif font. “Balboa Condensed”, depicted to the left, was
		  				too condensed, and not bold enough. But I wanted to keep the “A”
		  				as an elementary triangle form, to give variation and a unique
		  				appeal to the text.
		  			</p>
		  		</article>

		  		<article className={projectStyle.left}>
		  			<img src={finallogo1}
		  				 alt="Final Logo"
		  				 className={projectStyle.pic}
		  			/>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<img src={finallogo2}
		  				 alt="Final Logo 2"
		  				 className={projectStyle.pic}
		  			/>
		  		</article>

		  		<article className={projectStyle.leftgrid}>
		  			<div className="spacing1">
		  				<img src={charcoal} alt="Charcoal Heptagon" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Dark Grey</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #333333</li>
		  					<li>RGB: 51, 51, 51</li>
		  					<li>CYMK: 69, 63, 62, 58</li>
		  				</ul>
		  			</div>
		  			<div className="spacing1">
		  				<img src={gold} alt="Gold Heptagon" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Gold</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #decb7a</li>
		  					<li>RGB: 222, 203, 122</li>
		  					<li>CYMK: 14, 15, 63, 0</li>
		  				</ul>
		  			</div>
		  			<div className="spacing1">
		  				<img src={yellow} alt="Yellow Heptagon" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Pale Yellow</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #f5e583</li>
		  					<li>RGB: 245, 229, 131</li>
		  					<li>CYMK: 5, 5, 60, 0</li>
		  				</ul>
		  			</div>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<img src={font1} className={projectStyle.font1} alt="Stenciletta Solid"/>
		  			<h4>Headings, Logotype</h4>
		  			<img src={font2} className={projectStyle.font2} alt="Tenon"/>
		  			<h4>Sub-headings, Body Text, Beer Labeling</h4>
		  			<img src={font3} className={projectStyle.font3} alt="Headings" />
		  		</article>

		  	</section>
		  	<section className={projectStyle.backwrapper}>
		  		<a href="#top"><button className={projectStyle.btnback}>
		  			<HiChevronUp/>Back To Top
		  		</button></a>
		  	</section>
		  </section>

		  <section className={projectStyle.sectionbg} id="packaging">
		  	<h2>Packaging</h2>

		  	<section className={projectStyle.brandingshape}>
		  		<h3>CAMPFIRE HEADPHASE IPA</h3>
			  	<p>
			  		As a New England based craft brewery, camping is an important past-time and I felt
			  		would make a great backdrop for the flagship beer. A reoccurring theme in the beer
			  		labeling, a shape is used for visual recognition. In this fashion, I would utilize
			  		the varied geometry that I wanted to implement in the logo, but spread it evenly
			  		among the beer labels. In this case, it is a triangle to represent the campfire.
			  		Electronic music fans will note the reference to the group Boards of Canada.
		  		</p>
		  	</section>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
			  	 	<img src={campfire1}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Campfire Headphase IPA label"
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<img src={campfire2}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Campfire Headphase IPA Can Mockup"
			  	 	/>
			  	 </article>
		  	</section>

		  	<section className={projectStyle.brandingshape}>
		  		<h3>CLOUDKICKER DOUBLE IPA</h3>
			  	<p>
			  		The idea of the chemistry required to produce a potent beer resulted in a backdrop
			  		of abstract swirling paint and ink textures. Brewing is essentially a chemistry
			  		project, and an organic one at that. A psychedelic freeze-frame of liquid colors
			  		felt right for the feel of Shapeshift Brewing’s primary Double India Pale Ale.
		  		</p>
		  	</section>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
			  	 	<img src={cloudkicker1}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Cloudkicker Double IPA label"
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<img src={cloudkicker2}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Cloudkicker Double IPA Can Mockup"
			  	 	/>
			  	 </article>
		  	</section>

		  	<section className={projectStyle.brandingshape}>
		  		<h3>PLANETARY SERIES: JUPITER & PHOBOS</h3>
			  	<p>
			  		The “Planetary Series” is a bottled beer series for experimental beers that
			  		steer just a little bit away from your typical lineup. 
		  		</p>
		  		<p>
		  			Jupiter was chosen for the apricot wild ale as a way to draw a parallel to
		  			the huge flavor of the beer.
		  		</p>
		  		<p>
		  			Phobos is a very dark and rich stout, and also one of Mars’ moons. As moons
		  			don’t have atmospheres to provide a daytime, we tend to associate moons with
		  			darkness. I chose a chartreuse for the foreground color as an extreme
		  			contrast to the dark theme of this beer label. 
		  		</p>
		  	</section>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
			  	 	<img src={jupiter}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Jupiter Apricot Wild Ale Bottle Mockup"
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<img src={phobos}
			  	 		 className={projectStyle.pic}
			  	 		 alt="Phobos Imperial Coffee Stout Bottle Mockup"
			  	 	/>
			  	 </article>
		  	</section>
		  	<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
		  		<a href="#top"><button className={projectStyle.btnback}>
		  			<HiChevronUp/>Back To Top
		  		</button></a>
		  	</section>
		  </section>

		  <section className={projectStyle.section} id="ux">
		  		<h2>UX</h2>

		  		<section className={projectStyle.sectionwrapper}>
			  		<article className={projectStyle.left}>
					  	<p>
					  		Some changes were made throughout the wireframing and user
					  		testing process. After testing, I also decided to give the
					  		website a full re-design.
				  		</p>
				  		<p>
				  			During testing, I found that users had trouble finding the
				  			“Beer To Go” offerings. They kept going to the Beers section
				  			for it, instead of the Taproom. Thus, I changed Tap Room, to
				  			In the Taproom. 
				  		</p>
				  		<p>
				  			I also decided to remove the beer pour graphic at the top of
				  			the page, allowing for quicker access to the information
				  			users want: what the brewery currently has to offer.
				  		</p>
				  	</article>
				  	<article className={projectStyle.right}>
					  	<img
					  		src={testing}
					  		className={projectStyle.pic}
					  		alt="Users testing the site on Mobile"
					  	/>
				  	</article>
				</section>

				<section className={projectStyle.ux}>
					<article>
						<img src={oldtaproomdesktop}
							 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
							 alt="Old Taproom Page, Desktop"
						/>
					</article>
					<article>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article>
						<img src={newtaproomdesktop}
							 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
							 alt="New Taproom Page, Desktop"
						/>
					</article>
				</section>

				<section className={projectStyle.ux}>
					<article>
						<img src={oldbeersmobile}
							 className={` ${projectStyle.mobilepic} ${projectStyle.shadow} `}
							 alt="Old Beer List Page with Accordion, Mobile"
						/>
					</article>
					<article>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article>
						<img src={newbeersmobile}
							 className={` ${projectStyle.mobilepic} ${projectStyle.shadow} `}
							 alt="New Beer List Page with Card Flip"
						/>
						<img src={newbeersmobile2}
							 className={` ${projectStyle.mobilepic} ${projectStyle.shadow} `}
							 alt="New Beer List Page with Card Flipped"
						/>
					</article>
				</section>

				<section className={projectStyle.ux}>
					<article>
						<img src={oldmobilemenu}
							 className={` ${projectStyle.mobilepic} ${projectStyle.shadow} `}
							 alt="Old Mobile Menu, only goes half-way down"
						/>
					</article>
					<article>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article>
						<img src={newmobilemenu}
							 className={projectStyle.mobilepic}
							 alt="New Mobile Menu"
						/>
					</article>
				</section>
				<section className={projectStyle.backwrapper}>
			  		<a href="#top"><button className={projectStyle.btnback}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
		  		</section>
		  </section>	

		  <section className={projectStyle.sectionbg} id="web">
		  	<h2>Web Design</h2>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={` ${projectStyle.left} ${projectStyle.flexleft}`}>
		  			<img
		  				src={homepage} 
		  				className={` ${projectStyle.pic} ${projectStyle.shadow} ${projectStyle.radius} `}
		  				alt="Home Page, Desktop Browser"
		  			/>
		  		</article>
		  		<article className={` ${projectStyle.right} ${projectStyle.flexright}`}>
		  			<h3>HOME PAGE</h3>
		  			<p>
		  				The Home Page will contain a hero image
		  				promoting the newest product, beer or event.
		  			</p>
		  		</article>
		  	</section>
		  </section>

		  <section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
		  			<h3>IN THE TAPROOM PAGE</h3>
		  			<p>
		  				This section is where users will likely flock to
		  				the most. The taproom page provides info on what
		  				is currently on tap, and what beers can be purchased.
		  			</p>
		  			<p>
		  				I used small .png icons next to the beer’s names to
		  				provide a visual cue that users would come to recognize.
		  			</p>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<img
		  				src={taproompage} 
		  				className={` ${projectStyle.pic} ${projectStyle.shadow} ${projectStyle.radius} `}
		  				alt="Taproom Page, Desktop Browser"
		  			/>
		  		</article>
		  </section>

		  <section className={projectStyle.web}>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={` ${projectStyle.left} ${projectStyle.flexleft}`}>
		  			<img
		  				src={ourbeerspage} 
		  				className={` ${projectStyle.pic} ${projectStyle.shadow} ${projectStyle.radius} `}
		  				alt="Our Beers Page, Desktop Browser"
		  			/>
		  		</article>
		  		<article className={` ${projectStyle.right} ${projectStyle.flexright}`}>
		  			<h3>OUR BEERS PAGE</h3>
		  			<p>
		  				The list of beers will be displayed in a 3-column
		  				grid of flippable card elements. When a user clicks
		  				on a card, the associated beer label will flip,
		  				revealing the description for the beer.
		  			</p>
		  		</article>
		  	</section>
		  </section>

		  <section className={projectStyle.sectionwrapper}>
		  		<article className={projectStyle.left}>
		  			<h3>ABOUT PAGE</h3>
		  			<p>
		  				This section includes a “taproom” photo, which is
		  				actually just a beer pour on the shelf of a local
		  				craft beer bar in my town. 
		  			</p>
		  			<p>
		  				That’s the trickiest part of this campaign project
		  				for a mock-up brewery… since the brewery doesn’t exist,
		  				getting photos of it is a difficult proposition.
		  			</p>
		  		</article>
		  		<article className={projectStyle.right}>
		  			<img
		  				src={aboutpage} 
		  				className={` ${projectStyle.pic} ${projectStyle.shadow} ${projectStyle.radius} `}
		  				alt="About Page, Desktop Browser"
		  			/>
		  		</article>
		  </section>

		   <section className={projectStyle.web}>
		  	<section className={projectStyle.sectionwrapper}>
		  		<article className={` ${projectStyle.right} ${projectStyle.flexleft}`}>
		  			<img
		  				src={finduspage} 
		  				className={` ${projectStyle.pic} ${projectStyle.shadow} ${projectStyle.radius} `}
		  				alt="Find Us Elsewhere Page, Desktop Browser"
		  			/>
		  		</article>
		  		<article className={` ${projectStyle.right} ${projectStyle.flexright}`}>
		  			<h3>FIND US ELSEWHERE PAGE</h3>
		  			<p>
		  				This section is a theoretical place for users to get
		  				info one where they can shop for Shapeshift beers, as
		  				well as try them at local restaurants and bars.
		  			</p>
		  		</article>
		  	</section>
		  </section>

		  <section className={projectStyle.mobiledesign}>
		  	<article>
		  		<img src={homemobile}
		  			 className={projectStyle.mobilepic2}
		  			 alt="Home Page, iPhone 12"
		  		/>
		  	</article>
		  	<article>
		  		<img src={newmobilemenu}
		  			 className={projectStyle.mobilepic2}
		  			 alt="Mobile Menu, iPhone 12"
		  		/>
		  	</article>
		  		<article>
		  		<img src={taproommobile}
		  			 className={projectStyle.mobilepic2}
		  			 alt="In The Taproom Page, iPhone 12"
		  		/>
		  	</article>
		  </section>

		   <section className={projectStyle.mobiledesign}>
		  	<article>
		  		<img src={beersmobile}
		  			 className={projectStyle.mobilepic2}
		  			 alt="Our Beers Page, iPhone 12"
		  		/>
		  	</article>
		  	<article>
		  		<img src={aboutmobile}
		  			 className={projectStyle.mobilepic2}
		  			 alt="About Us, iPhone 12"
		  		/>
		  	</article>
		  		<article>
		  		<img src={findusmobile}
		  			 className={projectStyle.mobilepic2}
		  			 alt="Find Us Elsewhere Page, iPhone 12"
		  		/>
		  	</article>
		  </section>

		  <section className={` ${projectStyle.backwrapper} ${projectStyle.spacing3} `}>
		  		<a href="#top"><button className={projectStyle.btnback}>
		  			<HiChevronUp/>Back To Top
		  		</button></a>
		  </section>

		</main>
	);
}

export default Shapeshift
