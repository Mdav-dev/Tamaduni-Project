import React from "react";

function pa(props){
	const customStyle = {
		fontFamily: "'Roboto', sans-serif",
		fontSize: "25px",
		color: "#000"
	}
	return(		
		<p style={customStyle}>
			<a href={props.link}>
				{props.detail}
			</a>
		</p>
	)
}
export default pa;