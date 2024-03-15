// import React from "react";
import ImageHome from "./Image_home";
import {  Heading, Button } from 'rebass'
import CButton from "./minor_components/CButton";
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";




function Header(props){

	const[mobile, setmobile] = useState(false);
	function getScreenSize() {
		return (window.screen.width)
	}
	
	if(getScreenSize()<500)	 {
		setmobile(true);
	}else{
		setmobile(false);
	}

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

	const menu_b ={
		width: "50px",
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
						<FaBars style={menu_b}/>
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