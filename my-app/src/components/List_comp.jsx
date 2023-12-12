import React from "react";

function List(props){
	const customStyle={
		width: "",
	}
	return <li style={customStyle}><a href={props.link}>{props.pageName}</a></li>
}
export default List;