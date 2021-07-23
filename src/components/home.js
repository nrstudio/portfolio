import * as React from "react"
import {
      Link
      } from "react-router-dom";

import { projectslist } from "../projects/projectlist.js"

import { FaBehance } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineClipboardList } from 'react-icons/hi';

import projectStyle from '../styles/project.module.scss'

import heroImage from '../img/hero-image-2.jpg'

function Home() {
  return (
    <>
    <main className="container">
      <section className="viewport">
        <article className="hero">
          <h1 className="hero-quote">Branding is everything.</h1>
          <img
              src={heroImage}
              alt="Nick Robinson"
              className="hero-img donthover"
            />
          <h1 className="hero-quote-r">Branding is everything.</h1>
          <h3>I'm not saying <i>looks</i> are everything. But how else can we tell everything apart? I'm here to make a visual difference to everything I put my imagination to.</h3>
        </article>
    	  <article className="home-social">
            <div className="social-item">
              <a href="mailto:nickrobinsonart@gmail.com" target="_blank" rel="noreferrer">
                <HiOutlineMail class="social-size"/><span className="social-text"> nickrobinsonart@gmail.com</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://drive.google.com/file/d/1mJGj7zKH2M6dGjVf6fY7nIgSDp983raH/view?usp=sharing" target="_blank" rel="noreferrer">
                <HiOutlineClipboardList class="social-size"/><span className="social-text"> Resume</span>
              </a>
            </div>
            <div className="social-item">
              <a href="http://www.behance.net/nickrobinson" target="_blank" rel="noreferrer">
                <FaBehance class="social-size"/> <span className="social-text">Behance</span>
              </a>
            </div>
        </article>
      </section>


      <section className={` home-projects ${projectStyle.projectanimate} `}>
          
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
                      <h2 className="project-title fade-title">{title}</h2>
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
