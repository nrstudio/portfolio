import * as React from "react"

import heroImage from '../img/hero-image.png'

import { FaBehance } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi';

// import Projects from './projects'

function Home() {
  return (
    <main className="container">
        <section className="content-container">
          <article className="left leftflip">
            <img
              src={heroImage}
              alt="Nick Robinson"
              className="hero-img"
            />
          </article>
          <article className="right rightflip">
            <h1>I'm Nick Robinson</h1>
            <h1>I'm an Artist-turned Product Designer who can code.</h1>
            <h2>But still an artist.</h2>
            <h2>Let's collaborate on something beautiful and unique.</h2>
          </article>
  	    </section>
        <section className="social-container">
          <article className="social-item">
            <a href="mailto:nickrobinsonart@gmail.com">
              <HiOutlineMail class="social-size"/><span className="social-text"> nickrobinsonart@gmail.com</span>
            </a>
          </article>
          <article className="social-item">
            <a href="http://www.instagram.com/imaged_curses">
              <RiInstagramLine class="social-size"/><span className="social-text"> Instagram</span>
            </a>
          </article>
          <article className="social-item">
            <a href="http://www.behance.net/nickrobinson">
              <FaBehance class="social-size"/> <span className="social-text">Behance</span>
            </a>
          </article>
        </section>
        
    </main>
  );
}

export default Home
