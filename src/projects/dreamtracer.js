import * as React from "react"
import { Link } from 'react-router-dom'
import Lightbox from 'react-image-lightbox'

import { HiLink } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { HiChevronUp } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

import projectStyle from '../styles/project.module.scss'

import overview from './dreamtracer/overview.jpg'

import target from './dreamtracer/target.png'

import logoblack from './dreamtracer/logomark-black.jpg'
import logocolor from './dreamtracer/logocolor.jpg'
import logocolorreverse from './dreamtracer/logocolorreverse.jpg'
import logohorizontal from './dreamtracer/logohorizontal.jpg'
import logohorizontalreverse from './dreamtracer/logohorizontalreverse.jpg'
import eee from './dreamtracer/eee.png'
import skyblue from './dreamtracer/skyblue.png'
import red from './dreamtracer/red.png'
import midnight from './dreamtracer/darkblue.png'
import white from './dreamtracer/white.png'
import moods1 from './dreamtracer/moods1.png'
import moods2 from './dreamtracer/moods2.png'
import moods3 from './dreamtracer/moods3.png'
import moods4 from './dreamtracer/moods4.png'
import char from './dreamtracer/char.png'
import headings from './dreamtracer/headings.png'

import cardmodal from './dreamtracer/cardmodal.png'
import cardmodalflip from './dreamtracer/cardmodalflip.png'
import card01 from './dreamtracer/card01.png'
import card02 from './dreamtracer/card02.png'
import card03 from './dreamtracer/card03.png'
import card04 from './dreamtracer/card04.png'
import card05 from './dreamtracer/card05.png'
import card06 from './dreamtracer/card06.png'
import card07 from './dreamtracer/card07.png'
import card08 from './dreamtracer/card08.png'
import card09 from './dreamtracer/card09.png'
import card10 from './dreamtracer/card10.png'
import card11 from './dreamtracer/card11.png'
import card12 from './dreamtracer/card12.png'
import card13 from './dreamtracer/card13.png'
import card14 from './dreamtracer/card14.png'
import card15 from './dreamtracer/card15.png'
import card16 from './dreamtracer/card16.png'
import card17 from './dreamtracer/card17.png'
import card18 from './dreamtracer/card18.png'
import card19 from './dreamtracer/card19.png'
import card20 from './dreamtracer/card20.png'

import oldoldhome from './dreamtracer/oldoldhome.png'
import finalhome from './dreamtracer/finalhome.png'
import oldkeyword from './dreamtracer/oldkeyword.png'
import finalkeyword from './dreamtracer/finalkeyword.png'
import oldpost from './dreamtracer/oldpost.png'
import finalpost from './dreamtracer/finalpost.png'

import home from './dreamtracer/home.png'
import create from './dreamtracer/create.png'
import create2 from './dreamtracer/create2.png'
import singlepost from './dreamtracer/singlepost.png'
import keyscreen from './dreamtracer/keyscreen.png'
import keymodal from './dreamtracer/keymodal.png'
import cardgrid from './dreamtracer/cardgrid.png'

const images = [
	'./dreamtracer/overview.jpg',
	'./dreamtracer/logomark-black.jpg'
];

export default class Photos extends React.Component {

  constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}
    
    render() {
    	const { photoIndex, isOpen } = this.state;
    

    return (
  		<main className="single-project">
  			<section className={` ${projectStyle.topnav} spacing1 `}>
		      	<div><Link className={projectStyle.a} to="/projects">
		      		 <HiArrowNarrowLeft className={projectStyle.linkicon}/> Back <span className="display">to Projects</span></Link></div>
		      	<div className="flushright"><a href="http://dreamtracerlanding.netlify.com" target="_blank" rel="noreferrer">
		      		 <HiLink className={projectStyle.linkicon}/> Launch <span className="display">Website</span></a></div>
	        </section>

	        <section className={projectStyle.header}>
	      		<h1>Dream Tracer</h1>
	       		<p><h4 className={projectStyle.projecttype}>Mobile Dream Journal App</h4> (2018-2020)</p>
	        </section>

	        <section className={projectStyle.categories}>
				 <ul>
				 	<li><a href="#overview">Overview</a></li>
				 	<li><a href="#target">Target Audience</a></li>
				 	<li><a href="#branding">Branding</a></li>
				 	<li><a href="#dreamcards">Dream Cards</a></li>
				 	<li><a href="#ux">UX</a></li>
				 	<li><a href="#poc">Proof of Concept</a></li>
				 </ul>
		    </section>

		    <section className={projectStyle.sectionwrapper} id="overview">
			  	 <article className={projectStyle.left}>
			  	 	<img
			  	 		src={overview}
			  	 		className={projectStyle.pic}
			  	 		alt="Dream Tracer App, Home Page, Phone on Bed"
			  	 		onClick={() => this.setState({ isOpen: true, photoIndex:0 })}
			  	 	/>
			  	 </article>
			  	 <article className={projectStyle.right}>
			  	 	<p>
			  	 		Dream Tracer is a creative dream journal native mobile app designed
			  	 		for the iPhone that I developed as my Masters Thesis at Academy of Art University.
			  	 			It allows users to post their dreams in a blog-like
			  	 		format, and categorize them by dream keywords and moods. Dream
			  	 		Tracer also has a dream dictionary for the user’s keywords.
			  	 		Additionally, users earn an illustrative dream card for each post
			  	 		they make, linking similar dreams together.
			  	 	</p>
			  	 </article>
			</section>

			<section className={projectStyle.sectioncenter}>
				<h2>
					Our dreams can be strange, inspiring, scary and uplifting. But they can
					hold powerful insights about the subconscious through an illustration of
					deep metaphors.
				</h2>
				<h2>
					Analyzing our dreams can increase self-awareness and self-healing in ways
					that we might overlook in our everyday waking states.
				</h2>
			</section>

			<section className={projectStyle.sectionbg} id="target">
		  		<h2>Target Audience</h2>
		  		<section className={projectStyle.sectionwrapper}>
		  			<article className={` ${projectStyle.left} ${projectStyle.flexleft}`}>
		  				<img src={target}
		  					 className={` donthover ${projectStyle.pic} `}
		  					 alt="Target Audience logo graphic"
		  				/>
			  		</article>
				  	<article className={` ${projectStyle.right} ${projectStyle.flexright}`}>
				  	 	<ul>
				  	 		<li>• Male & Female, 16-48</li>
				  	 		<li>• People interested in their dreams</li>
				  	 		<li>• People who record their dreams, pen & paper or digitally</li>
				  	 		<li>• Creative-minded people</li>
				  	 		<li>• People who want to learn more about their subconscious
				  	 			psyche, mental health, or overall well-being</li>
				  	 	</ul>
				  	 	<p>
				  	 		My research has shown that my users not only want to remember
				  	 		their dreams or when they had them, but they also want a seamless
				  	 		way to look back on them. For nostalgia’s sake, personal growth,
				  	 		or creative inspiration, Dream Tracer is a digital journal that
				  	 		will let users tap into their subconscious
				  	 	</p>
				  	</article>
		  		</section>
		  		<section className={projectStyle.backwrapper}>
			  		<a href="#top"><button className={` spacing2 ${projectStyle.btnback} `}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
		  		</section>
		 	</section>

		 	<section className={projectStyle.section} id="branding">
		    	<h2>Branding</h2>
  			  	<section className={projectStyle.sectionwrapper}>
  			  		<article className={projectStyle.left}>
  			  			<h3>Logo Design</h3>
  			  			<p>
  			  				The Dream Tracer logo consists of three symbols that represent
  			  				specific elements. The <b>cloud</b> is the symbol of ideas and thoughts.
  			  				The <b>moon and stars</b> represent night, the times in which we dream
  			  				the most. And the <b>keyhole</b> negative space represents the unlocking
  			  				of dreams and their subconscious meanings.
  			  			</p>
  			  		</article>
  			  		<article className={projectStyle.right}>
  			  			<img src={logoblack}
  			  				 className={projectStyle.pic}
  			  				 alt="Dream Tracer Logo (Black)"
  			  				 onClick={() => this.setState({ isOpen: true, photoIndex:1 })}

  			  			/>
  			  		</article>

  			  		<article className={projectStyle.left}>
  			  			<img src={logocolor}
  			  				 className={projectStyle.pic}
  			  				 alt="Dream Tracer Final Logo, Color"
  			  			/>
  			  		</article>
  			  		<article className={projectStyle.right}>
  			  			<img src={logocolorreverse}
  			  				 className={projectStyle.pic}
  			  				 alt="Dream Tracer Final Logo, Color, Reverse"
  			  			/>
  			  		</article>
  			  	</section>

  			  	<section className={projectStyle.sectioncenter}>

					<img
			  	 		src={logohorizontal}
			  	 		className={projectStyle.widepic}
			  	 		alt="Dream Tracer Horizontal Logo"
			  	 	/>
			  	 	<img
			  	 		src={logohorizontalreverse}
			  	 		className={projectStyle.widepic}
			  	 		alt="Dream Tracer Horizontal Logo Reverse"
			  	 	/>
				</section>

				<section className={projectStyle.sectionwrapper}>
					<h3>Colors</h3>
					<article className={projectStyle.leftgrid}>

		  			<div className="spacing1">
		  				<img src={eee} alt="Off-White" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Off-White</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #eeeeee</li>
		  					<li>RGB: 238, 238, 238</li>
		  				</ul>
		  				<p>Body Text</p>
		  			</div>

		  			<div className="spacing1">
		  				<img src={skyblue} alt="Sky Blue" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Sky Blue</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #6be4f2</li>
		  					<li>RGB: 107, 228, 242</li>
		  				</ul>
		  				<p>Active Icons, Buttons, Links, Keyword Modal Header Bg</p>
		  			</div>

		  			<div className="spacing1">
		  				<img src={white} alt="Dark Midnight Blue" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>White</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #121723</li>
		  					<li>RGB: 245, 229, 131</li>
		  				</ul>
		  				<p>Nav Icons, Login Buttons, Form Borders</p>	
		  			</div>
		  	
		  			<div className="spacing1">
		  				<img src={midnight} alt="Dark Midnight Blue" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Dark Midnight Blue</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #121723</li>
		  					<li>RGB: 245, 229, 131</li>
		  				</ul>
		  				<p>Text & Icons on Light Backgrounds,
                           Form & Drop-Down, Menu Backgrounds</p>
		  				
		  			</div>
		  			<div className="spacing1">
		  				<img src={red} alt="Dark Midnight Blue" className={projectStyle.xsmallpic}/>
		  			</div>
		  			<div className="spacing1">
		  				<h4>Red</h4>
		  				<ul className={projectStyle.colorlist}>
		  					<li>HEX: #ff5745</li>
		  					<li>RGB: 255, 87, 69</li>
		  				</ul>
		  				<p>Cancel Buttons & Logout Button</p>
		  			</div>
		  			</article>
		  			
				</section>
				<h3>Dream Mood Colors</h3>
				<section className={projectStyle.quadwrapper}>

					<article className={projectStyle.quad}>
						<img src={moods1}
							 className={` donthover ${projectStyle.smallpic} `}
							 alt="Moods List"
						/>
						<img src={moods2}
							 className={` donthover ${projectStyle.smallpic} `}
							 alt="Moods List"
						/>
					</article>
					<article className={projectStyle.quad}>
						<img src={moods3}
							 className={` donthover ${projectStyle.smallpic} `}
							 alt="Moods List"
						/>
						<img src={moods4}
							 className={` donthover ${projectStyle.smallpic} `}
							 alt="Moods List"
						/>
					</article>
				</section>
				<section className={projectStyle.sectionwrapper}>
					<h3>Typography</h3>
					<article className={projectStyle.left}>
						<h2>Metallophile Sp8 Medium</h2>
			  			<p className="para">Headings, Logotype</p>
			  			<h2 id="proxima">Proxima Nova</h2>
			  			<p className="para">Primary Body Text, Button Text</p>
			  			<img src={char} className={` donthover ${projectStyle.font1} `} alt="Charcuterie Serif"/>
			  			<p className="para">Dream Card Titles</p>
					</article>
					<article className={projectStyle.right}>
			  			<img src={headings} className={` donthover ${projectStyle.font1} `} alt="Headings" />
					</article>
				</section>
				<section className={projectStyle.backwrapper}>
			  		<a href="#top"><button className={projectStyle.btnback}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
			  	</section>
	  		</section>
	  		

		  	<section className={projectStyle.sectionbg} id="dreamcards">
			  	<h2>Dream Cards</h2>
			  	<section className={projectStyle.branding}>
				  	<p>
				  		Depending on what keywords and mood that the user selects for their
				  		new dream post, they will earn a “dream card”. Dream Cards are designed
				  		almost like tarot cards, with links to other dreams that also earned that card.
						I illustrated each one by hand, and then scanned them and formatted them
						in Photoshop. Swiping the card to the reverse side reveals all the
						other dreams that earned the same card.
			  		</p>
			  	</section>

			  	<section className={projectStyle.ux}>
					<article>
						<img src={cardmodal}
							 className={projectStyle.mediumpic}
							 alt="Dream Card modal"
						/>
					</article>
					<article>
						
					</article>
					<article>
						<img src={cardmodalflip}
							 className={projectStyle.mediumpic}
							 alt="Dream Card modal, reverse side"
						/>
					</article>
				</section>

			  	<section className={projectStyle.quadwrapper}>
					
						<img src={card20}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XX, The Awakening"
						/>
						<img src={card19}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XIX, The Multiverse"
						/>
						<img src={card18}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XVIII, The Phoenix"
						/>
						<img src={card17}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XVII, The Oasis"
						/>
						<img src={card16}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XVI, The Waterfall"
						/>
						<img src={card15}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XV, The Owl"
						/>
						<img src={card14}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XIV, The Constellation"
						/>
						<img src={card13}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XIII, The Whale"
						/>
						<img src={card12}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XII, The Willow"
						/>
						<img src={card11}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. XI, The Hourglass"
						/>
						<img src={card10}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. X, The Ink & Quill"
						/>
						<img src={card09}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. IX, The Castle"
						/>
						<img src={card08}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. VIII, The Bridge"
						/>
						<img src={card07}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. VII, The Lantern"
						/>
						<img src={card06}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. VI, The Lighthouse"
						/>
						<img src={card05}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. V, The Cavern"
						/>
						<img src={card04}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. IV, The Tempest"
						/>
						<img src={card03}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. III, The Deep"
						/>
						<img src={card02}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. II, The Apparition"
						/>
						<img src={card01}
							 className={projectStyle.cardpic}
							 alt="Dream Card No. I, The Void"
						/>
				</section>
				<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
			  		<a href="#top"><button className={projectStyle.btnback}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
		  		</section>
		  	</section>

		  	<section className={projectStyle.section} id="ux">
		  		<h2>UX</h2>
		  		<section className={projectStyle.branding}>
		  				<h3>Wireframe Testing</h3>
					  	<p>
					  		Many changes have been made throughout the iterative process of
					  		wireframing and testing, which includes user task flow observation
					  		as well as A/B surveying and interviewing. The proceeding section
					  		highlights some of the biggest changes made during this phase.
				  		</p>
				</section>

				<section className={projectStyle.branding}>
					<h3>Home Screen</h3>
					<p>
						Made an informed decision based on A/B surveying to go with a list
						of dream links that include the dream title, date/time, and mood icon,
						rather than snippets of the dream text. Also added a filter/sort option
						for the dream posts at the top of the home screen. 
					</p>
				</section>
				<section className={projectStyle.ux}>
					<article className={projectStyle.quad}>
						<img src={oldoldhome}
							 className={projectStyle.smallpic}
							 alt="First Home Screen Wireframe"
						/>
					</article>
					<article className={projectStyle.quad}>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article className={projectStyle.quad}>
						<img src={finalhome}
							 className={projectStyle.smallpic}
							 alt="Most recent home wireframe with filter/sort menus at top of page"
						/>
					</article>
				</section>

				<section className={projectStyle.branding}>
					<h3>Single Post Screen</h3>
					<p>
						A/B Surveying confirmed the layout that you see here, with the Keyword
						buttons positioned next to the Dream Card, and the Share/Edit/Delete
						buttons below.
					</p>
				</section>
				<section className={projectStyle.ux}>
					<article className={projectStyle.quad}>
						<img src={oldpost}
							 className={projectStyle.smallpic}
							 alt="Initial Single Post Screen Layout"
						/>
					</article>
					<article className={projectStyle.quad}>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article className={projectStyle.quad}>
						<img src={finalpost}
							 className={projectStyle.smallpic}
							 alt="Final Single Post Screen Layout"
						/>
					</article>
				</section>

				<section className={projectStyle.branding}>
					<h3>Keyword Modal</h3>
					<p>
						Added a notes text area for users who want to customize their own
						dream definitions. This is especially due to the fact that people's interpretations
						and perspectives of dream keywords will differ. While keywords are pulled
						from an existing database, when a user enters in a custom keyword, or one
						that isn't in the database already, it will be added. Thus, users will be
						able to add a definition of their own.
					</p>
				</section>
				<section className={projectStyle.ux}>
					<article className={projectStyle.quad}>
						<img src={oldkeyword}
							 className={projectStyle.smallpic}
							 alt="Initial Keyword Modal"
						/>
					</article>
					<article className={projectStyle.quad}>
						<HiOutlineArrowNarrowRight className={projectStyle.rightarrow}/>
						<HiOutlineArrowNarrowDown className={projectStyle.downarrow}/>
					</article>
					<article className={projectStyle.quad}>
						<img src={finalkeyword}
							 className={projectStyle.smallpic}
							 alt="New Keyword Modal with notes text area for customized definitions"
						/>
					</article>
				</section>

				<section className={projectStyle.backwrapper}>
			  		<a href="#top"><button className={projectStyle.btnback}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
			  	</section>
			</section>
			
			<section className={projectStyle.sectionbg} id="poc">
			  	<h2>Proof of Concept</h2>
			  	<section className={projectStyle.poc}>
				  	<h3>User Task Flow One</h3>
				  	<h4>Create a New Dream Entry</h4>
			  	</section>
			  	<section className={projectStyle.quadwrapper}>
			  		<article>
				  		<img src={home}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Tracer Home Page"
				  		/>
				  	</article>
				  	<article>
				  		<img src={create}
				  			 className={projectStyle.mobilepic2}
				  			 alt="New Entry Screen"
				  		/>
				  	</article>
				  	<article>
				  		<img src={create2}
				  			 className={projectStyle.mobilepic2}
				  			 alt="New Entry Screen scrolled down"
				  		/>
				  	</article>
				  	<article>
				  		<img src={singlepost}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Single Dream Entry Screen"
				  		/>
				  	</article>
				</section>

				<section className={projectStyle.poc}>
					  	<h3>User Task Flow Two</h3>
					  	<h4>Discover the number of times you've dreamt of a sunset</h4>
				</section>
				<section className={projectStyle.quadwrapper}>
			  		<article>
				  		<img src={home}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Tracer Home Page"
				  		/>
				  	</article>
				  	<article>
				  		<img src={keyscreen}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Keywords Screen"
				  		/>
				  	</article>
				  	<article>
				  		<img src={keymodal}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Keyword Modal"
				  		/>
				  	</article>
				</section>

				<section className={projectStyle.poc}>
				  	<h3>User Task Flow Three</h3>
				  	<h4>View a Dream Card to see which dreams are associated with it</h4>
			  	</section>
				<section className={projectStyle.quadwrapper}>
			  		<article>
				  		<img src={home}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Tracer Home Page"
				  		/>
				  	</article>
				  	<article>
				  		<img src={cardgrid}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Card Grid Screen"
				  		/>
				  	</article>
				  	<article>
				  		<img src={cardmodal}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Card Modal"
				  		/>
				  	</article>
				  	<article>
				  		<img src={cardmodalflip}
				  			 className={projectStyle.mobilepic2}
				  			 alt="Dream Card Modal, Card flipped"
				  		/>
				  	</article>
				</section>

				<section className={` ${projectStyle.backwrapper} ${projectStyle.spacing2} `}>
			  		<a href="#top"><button className={projectStyle.btnback}>
			  			<HiChevronUp/>Back To Top
			  		</button></a>
		  		</section>

			</section>

		{isOpen && (
	      <Lightbox
	        mainSrc={images[photoIndex]}
	        nextSrc={images[(photoIndex + 1) % images.length]}
	        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
	        onCloseRequest={() => this.setState({ isOpen: false })}
	        onMovePrevRequest={() =>
	          this.setState({
	            photoIndex: (photoIndex + images.length - 1) % images.length,
	          })
	        }
	        onMoveNextRequest={() =>
	          this.setState({
	            photoIndex: (photoIndex + 1) % images.length,
	          })
	        }
	      />
   		)}
    	
		</main>
		);
	}
}
