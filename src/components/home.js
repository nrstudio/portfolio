import * as React from "react"

import heroImage from '../img/hero-image.png'

import Projects from './projects'

const Home = () => (
  <main className="container">
      <section className="content-container">
        <article className="left">
          <img
            src={heroImage}
            alt="Nick Robinson"
            className="hero-img"
          />
        </article>
        <article className="right">
          <h1>I'm Nick Robinson</h1>
          <h1>I'm an Artist-turned Product Designer who can code.</h1>
          <h2>But still an artist.</h2>
          <h2>Let's collaborate on something beautiful and unique.</h2>
        </article>
	    </section>
      <Projects />
  </main>
)

export default Home
