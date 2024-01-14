import ImageHome from "../Image_home";
import Nav_link from "./nav-link";
import Map from "./Map";
import {FaBars} from "react-icons/fa";
import Synopsis from "./Synopsis";
import { MdSearch } from "react-icons/md";
import Footer from "../Footer";
import Particulars from "./Particulars";
function Cultural_mapping(props){
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
		justifyContent: "space-between"
		
	}
	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
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

	}
	
	const display_content = {
		flex: "3",
		

	}
	const search_bar = {
		display: "flex",
		justifyContent: "center",


	}
	var check = false;
	const det = "Institution that collects,	preserves, displays, and interprets objects,"+
	 " artifacts, or specimens of"+
	" cultural, historical,"+
	" scientific, or artistic"+
	" significance for the public"+
	" to view and learn from.";





	return (
		<div style={container}>
			<div style={heading}>
				<div style={file_header}>
				<ImageHome 
					class="logo"
					ImgSrc="/Images/tamaduni_logo.png" 
					alt="Logo Image"
					/>
					<h1>CULTURAL MAPPING</h1>
					<FaBars/>
				</div>
				<div style={{...particulars, margin: "0", padding: "0"}}>
					<Nav_link name="Heritage places"/>
					<Nav_link name="Heritage places"/>
				</div>
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
				</div>
				<div style={display_content}>
				{check?(<Map />):(
					<Particulars 
						heading="Museum"
						category="Heritage places"
					/>)}				 
				</div>
			</div>
			<Footer />

		</div>
	)

}
export default Cultural_mapping;