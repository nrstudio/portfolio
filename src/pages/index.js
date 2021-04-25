import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <main className="container">
    <Layout>
      <SEO title="Home" />
      <section className="content-container">
        <article className="left">
          <img
            src="../img/hero-image.png"
            alt="An artsy photo of Nick"
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
    </Layout>
  </main>
)

export default HomePage
