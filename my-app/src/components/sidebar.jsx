import React from "react";
import List from "./List_comp";

function Sidebar(props){

	
	const sb_container = {
		display: "flex",
		transition:"margin 0.9s ease",
	}
	const sidebar = {
		gridColumn: "span 1",
		gridRow: "span 2", 
		display: "flex",
		flexDirection: "column",
		position: "fixed",
		top: "0",
		left: "-350px",
		padding: "0",
		listStyle: "none",
		width: "350px",  //Set the initial width of the sidebar 
		height: "100vh",
		backgroundColor: "rgba(255, 242, 250, 0.349)",
		background: "linear-gradient(to bottom, rgba(13, 17, 24, 0.24), rgba(255, 242, 250, 0) )",
		color: "#fff", //rgba(255, 242, 250, 0.349)	
		overflow: "hidden",
		boxShadow:"2px 0 5px rgba(0,0,0,0.2)",
		transition: "left 0.9s ease-in-out",
		}
	
	const mine = {
		border: "1px",
		borderColor: "black",
		
	} 
	const sb_hidden = {
		left: "-350px",
		width: "0",
		visibility: "hidden", 
	} 
	const sb_visible = {
		left: "0",
		width: "350px", 
		marginLeft: "0",
		visibility: "visible", 
		display: "flex",
		transition:"margin 0.9s ease",
	}

	return(
		<div style= {props.isinvisible?{sb_container}:{sb_visible}}>
			<ul style={sidebar}>
			<List 
				link="#"
				pageName="Home"
			/>
			<List 
				link="#"
				pageName="Partners"
			/>
			<List 
				link="#"
				pageName="Our Team"
			/>
			<List 
				link="#"
				pageName="About Us"
			/>
		</ul>
		</div>
	)
}
export default Sidebar;