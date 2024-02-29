import ImageHome from "../Image_home";
import Nav_link from "../Cultural Mapping/nav_link";
import Afro_card from "../AfroCelebration/Afro_card";
import Nav_link_container from "../Cultural Mapping/nav_link_container";
import Map from "../Cultural Mapping/Map";
import {FaBars} from "react-icons/fa";
import Synopsis from "../Cultural Mapping/Synopsis";
import { MdSearch } from "react-icons/md";
import Footer from "../Footer";
import Particulars from "../Cultural Mapping/Particulars";
import Stats from "../Cultural Mapping/Stats";
import Flag_card_container from "./flag_card_container";
import Sidebar from "../sidebar";
import { useState } from "react";



function Afro_Celebration(props){
	const container = {
		display: "flex",
		flexDirection: "column"
	}
	const heading = {
		display: "flex",
		flexDirection: "column",
		width: "100%"
	}
	const file_header = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: "2%",
		paddingRight: "2%",
		
	}
	
	const sub_container = {
		display: "flex",
		justifyContent: "space-betwwen",
		height: "100vh"
	}
	const synopsis_container = {
		flex: "1",

	}
	const location = {
		border: "1px solid #000",
		marginLeft: "5px",
		marginRight: "5px",
		height: "30vh",

	}
	
	const display_content = {
		flex: "3",
		

	}
	const search_bar = {
		display: "flex",
		justifyContent: "center",
		height: "10vh",
	}
	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
		"width":"100%",
		"overflowX":"auto",
		"whiteSpace":"nowrap",

	}

	var check = false;

	const det = "Institution that collects,	preserves, displays, and interprets objects,"+
	 " artifacts, or specimens of"+
	" cultural, historical,"+
	" scientific, or artistic"+
	" significance for the public"+
	" to view and learn from.";

	const menu_bars = {
		a:{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
		},
		b:{
			width: "30px",
			height: "30px"
		}
	}
	const [sidebar, setSidebar] =useState(false);

	function handleOnclick(){
		setSidebar(!sidebar)
	}
	const title = {
		"fontFamily":"cursive",
		"fontWeight":"600",
		"fontStyle":"normal"
	}





	return (
		<div style={container}>
			<div style={heading}>
				<div style={file_header}>
					<div><a href="/#"><ImageHome 
					class="logo"
					ImgSrc="/Images/tamaduni_logo.png" 
					alt="Logo Image"					
					/></a></div>
					<div><h1 style={title}>AFRO CELEBRATION</h1></div>
					<div onClick={handleOnclick} style={menu_bars.a}><FaBars style={menu_bars.b}/></div>					
				</div>
				<Sidebar toggle = {sidebar}
				ClickIt = {handleOnclick}
				side = "right" />
					<Flag_card_container />
				<div style={{...particulars}}> 
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
					<Nav_link name ="Museum"/>
				</div>
			</div>
			<div style={sub_container}>
				<div style={synopsis_container}>
					<div style={search_bar}>					
						<input
							style={{
								border: "2px solid #000", 
								borderRadius: "7%", 
								height: "40px",
								width: "200px",
								margin: "5px",

								}} 
							placeholder="Search"
							value="search"
						/>					
						<div 
							style={{
								height: "40px",
								width: "40px", 
								border: "2px solid #000",
								borderRadius: "10%",
								margin: "5px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								}}>
							<MdSearch style={{width: "30px", height: "30px"}} />	
						</div>								
					</div>
					<div style={location}>

					</div>
					<Synopsis synopsis_heading= "Museum"
						content= {det}
					/>
					<Stats docs="100" />

				</div>
				<div style={display_content}>
					
				{check?(<Map />):(
					<Particulars 
						heading="Museum"
						category="Heritage places"
						card={Afro_card}
					/>)}				 
				</div>
			</div>
			<Footer />

		</div>
	)

}
export default Afro_Celebration;