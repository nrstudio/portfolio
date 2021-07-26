import * as React from "react"
import { Link } from "react-router-dom";

import { FaBehance } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineClipboardList } from 'react-icons/hi';

import aboutImage from "../img/hero-image.jpg"

const About = () => (
  <>
  <main className="container">
      <section className="about-container">
        <article className="aboutleft">
          <h2 className="herotext">I'm Nick Robinson. I'm an Artist-turned Product/Brand Designer who can code...
          But still an artist.</h2>
          <p>I'm from New Haven, CT. I'm a visual problem-solver, constantly figuring out
          the best way to execute ideas that travel through the gauntlet of my mind, to my hands.
          </p>
          <p>
          I have a background in working as a team asset, as well as a freelancer. I've worked in a sign shop, and
          a direct mail advertising company. I've designed branding and labeling for a local microbrewery, and
          vinyl packaging for bands. My biggest accomplishment yet is obtaining my Masters of Fine Arts in Web
          Design & New Media from Academy of Art University. My thesis project was a creative dream journal
          web app called Dream Tracer, which you can see in my <Link to href="/projects">Projects</Link> section.
          </p>
          <p>I also have a background in fine art and digital art. In recent years I've gone from
          oil and acrylic painting, to pen and ink. I also experiment with digital photography,
          and I source those results for my digital artwork. But that's not all. I also play guitar
          and write music in what free time I have left. 
          </p>
          <p>To live is to create, and communicate. 
          </p>
        </article>
        
        <article className="aboutright">
          <img
            src={aboutImage}
            alt="Nick, bewildered on the shores"
            className="about-img"
          />
          <article className="social-container">
            <article className="social-item">
              <a href="mailto:nickrobinsonart@gmail.com">
                <HiOutlineMail className="social-size"/><span className="social-text"> nickrobinsonart@gmail.com</span>
              </a>
            </article>
            <article className="social-item">
              <a href="https://drive.google.com/file/d/1mJGj7zKH2M6dGjVf6fY7nIgSDp983raH/view?usp=sharing" target="_blank" rel="noreferrer">
                <HiOutlineClipboardList className="social-size"/><span className="social-text"> Resume</span>
              </a>
            </article>
            <article className="social-item">
              <a href="http://www.behance.net/nickrobinson" target="_blank" rel="noreferrer">
                <FaBehance className="social-size"/> <span className="social-text">Behance</span>
              </a>
            </article>
          </article>
        </article>
    </section>
  </main>
  </>
)

export default About
