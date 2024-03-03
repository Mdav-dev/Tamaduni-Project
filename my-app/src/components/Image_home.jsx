import React from "react";

function ImageHome(props){

	const customStyle = {
		color: "",
	}

	return(		
			<img className={props.class} style={customStyle} src={props.ImgSrc} alt={props.alt}/>
		)
}

export default ImageHome;