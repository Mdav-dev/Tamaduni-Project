import React from "react";
import List from "./List_comp";

function Sidebar(props){

	return(
		<div className= {props.isinvisible?"sb_hidden sb_container":"sb_visible sb_container"}>
			<ul className="sidebar">
			<List 
				link="#"
				pageName="Home"
			/>
			<List 
				link=""
				pageName="Partners"
			/>
			<List 
				link=""
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