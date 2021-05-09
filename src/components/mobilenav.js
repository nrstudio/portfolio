import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import '../styles/index.css';

import logomark from "../img/logomark.png"
import logomarkWhite from "../img/logomark-white.png"


const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<MenuBar>
			<Link to="/"><img src={logomark} alt="NICKROBINSON.IO" className="logomark" /></Link>

			<MenuIconContainer>
				<MenuIcon openMenu={openMenu} onClick={ () => setOpenMenu(!openMenu)}>
					<div/>
					<div/>
					<div/>
				</MenuIcon>
			</MenuIconContainer>

			<MenuLinks openMenu={openMenu}>
				<Link to="/">nickrobinson.io</Link>
				<img src={logomarkWhite} className="logomark-white" alt="Logomark"/>
				<ul>
					<li><Link onClick={ () => setOpenMenu(!openMenu)} to="/projects">Projects</Link></li>
					<li><Link onClick={ () => setOpenMenu(!openMenu)} to="/about">About</Link></li>
					<li><h2 className="spacer">You are here.</h2></li>
					<li><a href="mailto:nickrobinsonart@gmail.com">E-Mail</a></li>
					<li><a href="http://www.instagram.com/imaged_curses" target="_blank" rel="noreferrer">Instagram</a></li>
					<li><a href="/">Dribbble</a></li>
				</ul>
			</MenuLinks>

		</MenuBar>
	);
}

export default MobileNav

const MenuBar = styled.header `
	@media only screen and (min-width: 600px) {
		display: none;
	}
	padding: 1.5rem;
	height: 5rem;
	position: relative;
	width: 100%;
	background: #fff;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const MenuIconContainer = styled.div `
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const MenuIcon = styled.button `
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: transparent;
	height: 1.5rem;
	outline: none;
	border: none;
	z-index: 11;

	div {
		width: 1.5rem;
		height: .25rem;
		background: #222;
		transform-origin: 1px;
		transition: background-color 350ms, opacity 250ms, transform 250ms;

		:first-child {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#f2f2f2" : "#222" };
		}

		:nth-child(2) {
			opacity: ${ ({ openMenu }) => openMenu ? "0" : "1" };
			transform: ${ ({ openMenu }) => openMenu ? "translateX(-20px)" : "translate(0)" };
		}

		:nth-child(3) {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(-45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#f2f2f2" : "#222" };
		}
	}
`

const MenuLinks = styled.nav`
	text-align: center;
	text-transform: uppercase;
	color: #f2f2f2;
	font-size: 1.2rem;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #666;
	z-index: 5;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;

	transition: opacity 200ms, transform 200ms ease-out;
	transform: ${ ({ openMenu }) => openMenu ? "translateY(0%)" : "translateY(-100%)" };
	opacity: ${ ({ openMenu }) => openMenu ? "1" : "0" };

	.logomark-white {
		width: 112px;
		height: 96px;
		margin-top: 80px;
		margin-bottom: 60px;
	}

	.spacer {
		color: #666;
	}

	h2 {
		margin: 10px 0;
	}

	a {
		font-family: metallophile-sp8, Helvetica, sans-serif;
		text-decoration: none;
		color: #f2f2f2;
		transition: color 300ms;

		:hover {
			color: #ddd;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		text-align: center;
		list-style-type: none;
		margin: 15px 0;
	}

	li {
		margin: 10px 0
	}
`







