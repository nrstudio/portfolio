import * as React from "react"
import { Link } from 'react-router-dom'

import projectStyle from '../styles/project.module.scss';

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'

import overview from './songhive/overview.jpg'

import logodark from './songhive/logodark.png'
import bee1 from './songhive/bee1.png'
import bee2 from './songhive/bee2.png'
import bee3 from './songhive/bee3.png'
import neonyellow from './songhive/neonyellow.png'
import charcoal from './songhive/charcoal.png'
import canary from './songhive/canary.png'
import font1 from './songhive/font1.png'
import font2 from './songhive/font2.png'
import font3 from './songhive/font3.png'

import storyboard1 from './songhive/storyboard1.jpg'
import storyboard2 from './songhive/storyboard2.jpg'
import storyboard3 from './songhive/storyboard3.jpg'
import storyboard4 from './songhive/storyboard4.jpg'
import storyboard5 from './songhive/storyboard5.jpg'
import storyboard6 from './songhive/storyboard6.jpg'
import storyboard7 from './songhive/storyboard7.jpg'
import storyboard8 from './songhive/storyboard8.jpg'
import storyboard9 from './songhive/storyboard9.jpg'
import storyboard10 from './songhive/storyboard10.jpg'
import storyboard11 from './songhive/storyboard11.jpg'
import storyboard12 from './songhive/storyboard12.jpg'

import screen1 from './songhive/screen1.jpg'
import screen2 from './songhive/screen2.jpg'
import screen3 from './songhive/screen3.jpg'
import screen4 from './songhive/screen4.jpg'
import screen5 from './songhive/screen5.jpg'
import screen6 from './songhive/screen6.jpg'
import screen7 from './songhive/screen7.jpg'
import screen8 from './songhive/screen8.jpg'

function Songhive() {
  return (
  		<main className="single-project">

	        <section className={` ${projectStyle.topnav} spacing1 `}>
      			<div>
      				<Link className={projectStyle.a} to="/projects">
      		 			<HiArrowNarrowLeft/> Back <span className="display">to Projects</span>
      		 		</Link>
      		 	</div>
      			<div className="flushright">
      				<a href="https://vimeo.com/522132794" target="_blank" rel="noreferrer">
	      		 	<HiLink/> Launch <span className="display">Video</span></a>
	      		</div>
      		</section>

      		<section className={projectStyle.header}>
      			<h2>SONGHIVE</h2>
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
			  	 		alt="Songhive Logo Reverse"
			  	 	/>
			  	</article>
			  	<article className={projectStyle.right}>
			  	 	<p>
			  	 		Songhive is a mock web app that takes account of every song you
			  	 		listen to, and gamifies it into a social network. I created the
			  	 		branding, look and feel of the app and brand in the context of
			  	 		a 60-second promotional motion graphic with narration, which was
			  	 		entirely the endgame as a final project for an advanced motion graphics course.
			  	 	</p>
			  	</article>
			</section>

			<section className={projectStyle.sectionbg} id="branding">
	  			<h2>BRANDING & ASSETS</h2>
			  	<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
				  	 	<img src={logodark}
				  	 		 className={projectStyle.pic}
				  	 		 alt="Songhive Logo"
			  	 		/>
			  		</article>
				  	<article className={projectStyle.right}>
				  		<p>
							The idea comes from the idea of "scrobbling" music,
							which is a way to keep track of every song you listen to.
							I took the idea further by conceptualizing a "hive" as a 
							community, with bees as the avatars for the app's users.
				  	 	</p>
				  	</article>
		  		</section>
		  		<section className={projectStyle.branding}>
		  			<h3>Character Design</h3>
					<p>
						As an incentive for users to acquire more points to
						their Songhive account, I created a series of honey
						bee characters. The more points a user acquires, the
						more decorated and characterized their avatars become.
					</p>
		  		</section>
		  		<section className={projectStyle.triwrapper}>
		  			<article className={projectStyle.tri}>
				  	 	<img src={bee1}
				  	 		 className={projectStyle.tripic}
				  	 		 alt="Bee Scout Avatar"
			  	 		/>
			  		</article>
				    <article className={projectStyle.tri}>
				  	 	<img src={bee2}
				  	 		 className={projectStyle.tripic}
				  	 		 alt="Royal Bee Avatar"
			  	 		/>
			  		</article>
			  		<article className={projectStyle.tri}>
				  	 	<img src={bee3}
				  	 		 className={projectStyle.tripic}
				  	 		 alt="Bee Wizard Avatar"
			  	 		/>
			  		</article>
		  		</section>

		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.leftgrid}>
			  			<div className="spacing1">
			  				<img src={neonyellow} alt="Neon Yellow Circle" className={projectStyle.xsmallpic}/>
			  			</div>
			  			<div className="spacing1">
			  				<h4>Neon Yellow</h4>
			  				<ul className={projectStyle.colorlist}>
			  					<li>HEX: #ffff17</li>
			  					<li>RGB: 255, 255, 23</li>
			  				</ul>
			  			</div>
			  			<div className="spacing1">
			  				<img src={charcoal} alt="Dark Charcoal Grey Circle" className={projectStyle.xsmallpic}/>
			  			</div>
			  			<div className="spacing1">
			  				<h4>Dark Charcoal Grey</h4>
			  				<ul className={projectStyle.colorlist}>
			  					<li>HEX: #262626</li>
			  					<li>RGB: 38, 38, 38</li>
			  				</ul>
			  			</div>
			  			<div className="spacing1">
			  				<img src={canary} alt="Canary Yellow Circle" className={projectStyle.xsmallpic}/>
			  			</div>
			  			<div className="spacing1">
			  				<h4>Canary Yellow</h4>
			  				<ul className={projectStyle.colorlist}>
			  					<li>HEX: #f3d860</li>
			  					<li>RGB: 243, 216, 96</li>
			  				</ul>
			  			</div>
		  			</article>
		  			<article className={projectStyle.right}>
			  			<img src={font1} className={projectStyle.font1} alt="Museo Slab"/>
			  			<h4>Headings, Logotype</h4>
			  			<img src={font2} className={projectStyle.font1} alt="Nunito Black"/>
			  			<h4>Navigation and Body Text</h4>
			  			<img src={font3} className={projectStyle.font1} alt="Balboa Condensed" />
			  			<h4>Point Counts</h4>
		  			</article>
		  		</section>

		  		<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  				</section>
  			</section>

  			<section className={projectStyle.section}>
  				<h2>STORYBOARD</h2>
				<section className={projectStyle.storywrapper}>
					<article className={projectStyle.storyitem}>
						<img src={storyboard1}
							 className={projectStyle.storypic}
							 alt="Character on bus, listening to music"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard2}
							 className={projectStyle.storypic}
							 alt="Scene splits up into hexagons"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard3}
							 className={projectStyle.storypic}
							 alt="Hexagons swarm into mobile device"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard4}
							 className={projectStyle.storypic}
							 alt="Scenes of character experiencing music in different places"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard5}
							 className={projectStyle.storypic}
							 alt="Scene slides to left to reveal phone mock of app UI"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard6}
							 className={projectStyle.storypic}
							 alt="Character face close up with hexagon eyes"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard7}
							 className={projectStyle.storypic}
							 alt="Points accumulating for user's account"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard8}
							 className={projectStyle.storypic}
							 alt="Avatar system UI"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard9}
							 className={projectStyle.storypic}
							 alt="Bee avatar floating around"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard10}
							 className={projectStyle.storypic}
							 alt="Transition to user tapping on UI icon"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard11}
							 className={projectStyle.storypic}
							 alt="Return to character on train looking out window"
						/>
					</article>
					<article className={projectStyle.storyitem}>
						<img src={storyboard12}
							 className={projectStyle.storypic}
							 alt="Final screen with logo and 'Treasure your music' slogan"
						/>
					</article>
		  		</section>
		  	</section>
		  	<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
  					<a href="#top"><button className={projectStyle.btnback}>
  						<HiChevronUp/>Back To Top
  					</button></a>
  			</section>

		  	<section className={projectStyle.sectionbg}>
		  		<h2>MOTION GRAPHIC SCREENS</h2>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={projectStyle.left}>
		  				<img src={screen1}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Character listening to music on a train"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen2}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Character with ear buds against night background"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen3}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Character at a concert"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen4}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Phone mock of app UI"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen5}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Phone mock of concert setlist UI"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen6}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Bee avatar and friends list"
		  				/>
		  			</article>
		  			<article className={projectStyle.left}>
		  				<img src={screen7}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Phone mock with thumb pressing on UI icon"
		  				/>
		  			</article>
		  			<article className={projectStyle.right}>
		  				<img src={screen8}
		  					 className={` ${projectStyle.pic} ${projectStyle.shadow} `}
		  					 alt="Final Screen send-off: Treasure Your Music"
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

export default Songhive
