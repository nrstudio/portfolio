import * as React from "react";

import '../styles/index.css';
import logomark from '../img/logo.png';

import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
	return (
		<React.Fragment>
			<section className="footer">
				<div className="foot-wrap">
					<div className="logowrapper">
						<Link to="/">
							<img src={logomark} alt="Nick Robinson Logomark" className="logomark"/>
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
			<section className="copyright">
				<p>&copy; 2021, All Images Created by Nick Robinson</p>
			</section>
		</React.Fragment>
	)
}

export default Footer
