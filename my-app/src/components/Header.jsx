// import React from "react";
import ImageHome from "./Image_home";
import {  Heading, Button } from 'rebass'
import CButton from "./minor_components/CButton";




function Header(props){

	const customStyle = {
		background: "",
		display:"flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		height: "100%"
		
		
	}
	const custom = {
		background: "",
		display:"flex",
		flexDirection: "column",
		width: "200px",
		justifyContent: "center",
		alignItems: "center"
	}
	const siteTitleNameStyling = {
		fontFamily: "'Tangerine', cursive",
		fontSize: "40px",
		fontWeight: "bold",
		background: "linear-gradient(to right, #642b73, #c6426e)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block"
	}
	function handleClick(){
		props.buttonClick();
	}

	
	return(
		<div className="header_file">
			<div style={{}} className="header">
				<div style={custom}>
					<ImageHome 
					class="logo"
					ImgSrc="/Images/tamaduni_logo.png" 
					alt="Logo Image"
					/>
					<span onClick={handleClick}>
						<ImageHome 
						class="menu_bar"
						ImgSrc="/Images/menu_black_24dp.svg" 
						alt="Logo Image"
						/>
					</span>
					{/* <span onClick={handleClick}
					class="material-icons-outlined menu_bar">Menu</span> */}
				</div>
				<div style={siteTitleNameStyling}><Heading className="header_title">TAMADUNI</Heading></div>
				<div className="header_btns">
					<CButton link="http://www.youtube.com" name="Login" />
					<CButton name="Sign Up" />
				</div>
			</div>
		</div>
	)
}

export default Header;