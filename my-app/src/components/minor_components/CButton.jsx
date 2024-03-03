import { useState } from "react";
function CButton(props){
	const[state, setState] = useState(false);

	const customStyle = {
		fontSize: "16px",
		padding: "10px 20px",
		backgroundColor:state ?"#fff" : "linear-gradient(to right, #642b73, #c6426e)",
		color:state?"linear-gradient(to right, #642b73, #c6426e)" : "#fff",
		border: "none",
		borderRadius: "5%",
		cursor: "pointer",
	}
	function handleHover(){
		setState(true);
	}
	function handleLeave(){
		setState(false);
	}


	// font-size: 16px;
	// padding: 10px 20px;
	// background-color: #3498db;
	// color: #ffffff;
	// border: none;
	// border-radius: 5px;
	// cursor: pointer;

	return(
		<a href={props.link} style = {{}}>

			<button style = {customStyle}
			onMouseOver = {handleHover}
			onMouseLeave = {handleLeave}
			// onClick = {handleClick}
			>
				{props.name}
			</button>
		</a>
	)
}
export default CButton;