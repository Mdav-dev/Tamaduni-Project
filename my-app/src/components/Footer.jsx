import React from "react";
import ImageHome from "./Image_home";
import List from "./List_comp";
import pa from "./minor_components/pa";

function Footer(){

	const date = new Date();
	const current_year = date.getFullYear()

	const customStyle = {
		fontSize: "20px",
		fontWeight: "bold",
		background: "linear-gradient(to right, #642b73, #c6426e)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block"
	}

	return(
		<div className="footer">
		<pa detail="home"/>			
			<div className="footer_sect">
			<ImageHome 
			class="logo"
			ImgSrc="/Images/tamaduni_logo.png" 
			alt="Logo Image"
			/>			
			<span>			
			<ImageHome 
			class="copyright"
			ImgSrc="/Images/copyright_black_24dp.svg" 
			alt="Logo Image"
			/><span> {current_year}</span>
			<span style={customStyle}> tamaduni</span>
			</span>
			</div>
			<div className="footer_sect">
				<h3>Social</h3>
				<pa detail="Instagram" />
				<pa detail="Youtube" />
				<pa detail="Twitter" />
				<pa />
				

				{/* <ul style={{listStyle: "none",}}>
					<List pageName="Instagram" />
					<List  pageName="Youtube"/>
					<List  pageName="Twitter" />
				</ul> */}
			</div>
			<div className="footer_sect">
				<h3>Menu</h3>
				<ul style={{listStyle: "none",}}>
					<List pageName="Afro-Celebration" />
					<List pageName="Cultural Ethnography" />
					<List pageName="Contact Us" />
				</ul>
			</div>
			<div className="footer_sect">
				<h3>Legal</h3>
				<ul style={{listStyle: "none",}}>
					<List pageName="Terms & Conditions" />
					<List pageName="Licence" />
					<List pageName="Contact" />
				</ul>
			</div>
		</div>
	)
	
}
export default Footer;