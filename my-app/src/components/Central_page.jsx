import React from "react";


function Central(){
	const customStyle = {
		fontSize: "",
		fontWeight: "bold",
		background: "radial-gradient(circle,  rgba(223,68,162,1) 0%, rgba(80,164,46,1) 100%)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		dispay: "inline-block"
	}
	const customStyle1 = {
		display: "flex",
	}
	const imgStyle = {
		position: "relative",
		// height: "500px",
		width: "100%",
	}
	return <div className="Central_page">
		<img style={imgStyle} src = "Images/Uneditted/75.jpg"/>
		<h2><span style={customStyle}>Africanacity</span> is the rhythm of resilience, the melody of diversity,
		 and the <span style={customStyle}>harmony of strength</span>. It's the celebration of a continent's spirit, 
		 echoing through time with the vibrant beats of <span style={customStyle}>innovation</span>, 
		 <span style={customStyle}>creativity</span>, and  <span style={customStyle}>unity</span>.</h2>

		 <div  data-aos="flip-left"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="5000" 
		style={{width: "200px", height: "150px", background: "blue", padding: "20px",
		 margin: "50px"}}>
		 O come o ye faithful, joyful and truimphant

		 </div>
	</div>
}
export default Central;