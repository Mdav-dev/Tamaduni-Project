import React from "react";
import ImageHome from "./Image_home";
import List from "./List_comp";
import P from "./minor_components/pa";

function Footer(){

	const date = new Date();
	const current_year = date.getFullYear()

	const customStyle = {
		fontSize: "20px",
		fontWeight: "bold",
		background: "#000", //"linear-gradient(to right, #642b73, #c6426e)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block",
		
	}

	return(
		<div className="footer">		
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
				<P detail="Instagram" />
				<P detail="Youtube" />
				<P detail="Twitter" />
				<P />
				
			</div>
			<div className="footer_sect">
				<h3>Menu</h3>
				<P detail="Afro-Celebration" link="/afro_celebration"/>
				<P detail="Culture Mapping" link="/cultural_mapping"/>
				<P detail="Contact Us" link="/"/>
			</div>
			<div className="footer_sect">
				<h3>Legal</h3>
				<P detail="Terms and Conditions" />
				<P detail="Licence"/>
				<P detail="Contact"/>

			</div>
		</div>
	)
	
}
export default Footer;