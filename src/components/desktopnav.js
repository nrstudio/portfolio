import React from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineMail } from 'react-icons/hi';
import logomark from "../img/logomark.png"
import '../styles/index.css';

const DesktopNav = () => {
	return (
		<section className="header">
			<div className="head-wrap">
				<div> 
					<Link to="/"><h4>nickrobinson.io</h4></Link>
				</div>
				<div className="logowrapper">
					<Link to="/">
						<img src={logomark} alt="Logomark" className="logomark"
						/>
					</Link>
				</div>
				<div>
					<ul className="topnav">
						<Link to="/projects">
							<li className="nav-item">Projects</li>
						</Link>
						<Link to="/about">
							<li className="nav-item">About</li>
						</Link>
						<a href="mailto:nickrobinsonart@gmail.com">
							<li className="nav-item"><HiOutlineMail className="icon" /></li>
						</a>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default DesktopNav