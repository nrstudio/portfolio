import React from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineMail } from 'react-icons/hi';
import logomark from '../img/logo.png';

import '../styles/index.css';

const DesktopNav = () => {
	return (
		<section className="header">
			<div className="head-wrap">

				<div className="logowrapper">
					<div>
						<Link to="/">
							<img src={logomark} alt="Nick Robinson Logomark" className="logomark"/>
						</Link>
					</div>
					<div className="site-title">
						<Link to="/"><h4>nickrobinson.io</h4></Link>	
					</div>
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