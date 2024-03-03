import React, { useState } from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import { FcUndo } from "react-icons/fc";


function Sidebar(props){
	const [over, setOver] = useState(false)
	const [out, SetOut] = useState(false)
	function Click()	{
		props.ClickIt()
	}
	const tt = props.toggle;

	function HandleHover(){
		// setOver = true;
	}
	function HandleOut(){
		
	}
	

	const nav_container = {
		position: "fixed",
		top: "0",
		left: tt?"0":"-100%",
		width: "250px",
		height: "100vh",
		background: "rgba(253, 219, 255)",
		display: "flex",
		flexDirection: "column",
		color: "black",
		alignItems: "center",
		transition: "750ms",

	}
	const logo = {
		width: "100px",
	}
	const icon = {
		width: "70px",
		marginBottom: "0",
	}
	const times = {

	}
	const navLinks = {
		
	}
	const list = {
		a:{listStyleType: "none",
			background: over?"#758398":"#75839800",
			padding: "25px",
			
		},

		b:{textDecoration: "none",
			color: "#000",
			fontSize: "1.2rem",
			fontFamily:"\"Courgette\", cursive",
			fontWeight:"400",
			fontStyle:"normal",
		
		},
	}

	return(
	<div style={nav_container}>
		<img style={logo} src="Images/tamaduni_logo.png" alt="logo"/>
		<div style={{}} onClick={Click}>
			<FaTimes style={icon}/>
		</div>
		<nav style={navLinks}>
			<li onMouseOver={HandleHover} onMouseOut={HandleOut} style={list.a}><a style={list.b} href="/">Home</a></li>
			<li onMouseOver={HandleHover} onMouseOut={HandleOut} style={list.a}><a style={list.b} href="/cultural_mapping">Cultural Mapping</a></li>
			<li onMouseOver={HandleHover} onMouseOut={HandleOut} style={list.a}><a style={list.b} href="/afro_celebration">Afro Celebration</a></li>
			<li onMouseOver={HandleHover} onMouseOut={HandleOut} style={list.a}><a style={list.b} href="/about">About Us</a></li>
			<li onMouseOver={HandleHover} onMouseOut={HandleOut} style={list.a}><a style={list.b} href="/team">Our Team</a></li>
			
		</nav>		
	</div>
	)
}
export default Sidebar;