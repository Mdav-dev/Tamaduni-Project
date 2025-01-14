// import React from "react";
import ImageHome from "./Image_home";
import {  Heading, Button } from 'rebass'
import CButton from "./minor_components/CButton";
import {FaBars, FaTimes} from "react-icons/fa"




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
					<span onClick={handleClick} className = "menu_bars">
						<FaBars/>
					</span>
					{/* <span onClick={handleClick}
					class="material-icons-outlined menu_bar">Menu</span> */}
				</div>
				<div style={siteTitleNameStyling}><Heading className="header_title">{props.title}</Heading></div>
				<div className="header_btns">
					<CButton link="/login" name="Login" />
					<CButton link="/sign_up" name="Sign Up" />
				</div>
			</div>
		</div>
	)
}

export default Header;