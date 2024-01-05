import React from "react";


function Central(){
	const customStyle = {
		fontSize: "",
		fontWeight: "bold",
		background: "radial-gradient(circle,  rgba(223,68,162,1) 0%, rgba(80,164,46,1) 100%)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline-block"
	}
	
	const customIntro = {
		background: "rgba(13, 17, 24, 0.9",
		color: "#fff",
		fontSize: "30px",
		padding: "10%",
		height: "60vh"

	}
	const customStyle4 = {
		height: "100vh",
		display: "flex",
		gap: "50px",
		padding: "20px",
	 };
	const  customStyle5 = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	}
	const Central_page = {

	}
	return <div style={Central_page}>
		<h2 style={customIntro}><span style={customStyle}>Africanacity</span> is the rhythm of resilience, the melody of diversity,
		 and the <span style={customStyle}>harmony of strength</span>. It's the celebration of a continent's spirit, 
		 echoing through time with the vibrant beats of <span style={customStyle}>innovation</span>, 
		 <span style={customStyle}>creativity</span>, and  <span style={customStyle}>unity</span>.</h2>

		<div style = {customStyle4}>
		<div style = {customStyle5}>
		<h1>Cultural Mapping</h1>
		 <p>In Cultural Mapping we are going to study different cultures in 
		 relation to their location and their similaries to unite them and one people</p>
		</div> 
		<img src="Images/card_images/79.jpg" />		
		</div>

		 <div style = {customStyle4}>		 
		 <img src="Images/card_images/75.jpg" alt="image for cultural mapping" style={{}}/>
		 <div style={customStyle5}>
		 <h1>Cultural Mapping</h1>
		 <p>In Cultural Mapping we are going to study different cultures in 
		 relation to their location and their similaries to unite them and one people</p>
		 </div>
		 	 
		 </div>
	</div>
}
export default Central;