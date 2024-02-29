import { useState } from "react"


function Nav_link(props){
	const [styling, setStyling] = useState({})

	var backColor = "";
	var textColor = "";
	
	function HandleOnClick(){

	}
	function HandleOnHover(){
		backColor="black";
		textColor="white"
	}
	function HandleOnOut(){
		backColor="";
		textColor= "";

	}
	

	const box = {
		border: "1px solid #000",
		padding: "10px",
		background: "black",
		cursor: "pointer"
		

	}
	const paragraph = {
		margin: "0",
		color: "white",

	}
	

	return(
		<span onMouseOver={HandleOnHover} onMouseOut={HandleOnOut} style={box}>
			<p style={paragraph}>
				{props.name}
			</p>
		</span>
	)
}
export default Nav_link;