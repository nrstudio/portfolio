import * as React from "react"
import {
      Link
      } from "react-router-dom";
import heroImage from '../img/hero-image.png'

import { projectslist } from "../projects/projectlist.js"

import { FaBehance } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi';

import projectStyle from '../styles/project.module.scss'

function Home() {
  return (
    <>
    <div className="bg-home"></div>
    <div className="bg-home-texture"></div>
    <main className="container">
      <div className="viewport">
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
            <h1 className="white">I'm an Artist-turned Product Designer who can code.</h1>
            <h2>But still an artist.</h2>
            <h2 className="collab">Let's collaborate on something beautiful and unique.</h2>
          </article>
  	    </section>
        <section className="social-container home-social">
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
      </div>

        <section className={` content-container ${projectStyle.projectanimate} `}>
          {projectslist.map((project) => {
            const { title, desc, url, logo } = project;
            return (
                
                <article className="projectcard">
              
                  <Link to={url}>
                    <img
                      key={project}
                      src={logo}
                      alt={title}
                      className="project-thumb"
                    />
                    <div className="project-card-hover">
                      <div className="project-card-info">
                        <h2>{title}</h2>
                        <small>{desc}</small>
                      </div>
                    </div>
                    <div className="project-info">
                      <h2 className="project-title">{title}</h2>
                      <p className="project-desc">{desc}</p>
                    </div>
                  </Link>
                </article>
              
            );
          })}

      </section>
    </main>
    </>
  );
}

export default Home
