import * as React from "react"

import { FaBehance } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineClipboardList } from 'react-icons/hi';

import aboutImage from "../img/about-image.png"

const About = () => (
  <>
  <div className="bg-about">
  </div>
  <main className="container">
      <section className="about-container">
        <article className="aboutleft">
          <h2 className="herotext">I'm Nick Robinson. I'm an Artist-turned Product Designer who can code...
          But still an artist.</h2>
          <p>I live in New Haven, CT. Growing up in CT, I quickly found 
          inspiration in my own imagination, contributed by video games, 
          music, and sci-fi/horror movies. 
          </p>
          <p>It wasn’t until late-undergrad college that I decided to take 
          art a little more seriously, particularly in painting and drawing. 
          And I always loved creating experimental digital art using stock 
          imagery, falling in love with Photoshop in my teens. Today, I 
          take my camera around with me to source my own imagery. 
          </p>
          <p>The hunger to create and to get ideas out of my head onto some 
          sort of canvas hasn’t left me. Along with packaging art and branding 
          identity, web design is my latest calling, fusing “form” and “function” 
          together in multiple ways. At the end of the day, I’m a visual problem 
          solver, figuring out the best way to make design communicate.
          </p>
        </article>
        
        <article className="aboutright">
          <img
            src={aboutImage}
            alt="Nick, bewildered on the shores"
            className="hero-img"
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
