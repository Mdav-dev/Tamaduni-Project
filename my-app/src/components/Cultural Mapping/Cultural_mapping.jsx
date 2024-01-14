import ImageHome from "../Image_home";
import Nav_link from "./nav-link";
import {FaBars} from "react-icons/fa";
import Footer from "../Footer";
function Cultural_mapping(){
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
		height: "90vh"
	}
	const synopsis = {
		flex: "1",

	}
	const display_content = {
		flex: "3",
		borderLeft: "2px solid #000"

	}
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
				<div style={synopsis}>
				 <div>

				 </div>
				 <div>
					
				 </div>
				</div>
				<div style={display_content}>
				  Next
				</div>
			</div>
			<Footer />

		</div>
	)

}
export default Cultural_mapping;