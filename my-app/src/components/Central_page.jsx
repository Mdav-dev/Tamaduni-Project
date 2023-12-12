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
	return <div className="Central_page">
		<h2><span style={customStyle}>Africanacity</span> is the rhythm of resilience, the melody of diversity,
		 and the <span style={customStyle}>harmony of strength</span>. It's the celebration of a continent's spirit, 
		 echoing through time with the vibrant beats of <span style={customStyle}>innovation</span>, 
		 <span style={customStyle}>creativity</span>, and  <span style={customStyle}>unity</span>.</h2>
	</div>
}
export default Central;