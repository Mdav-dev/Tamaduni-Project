import React from "react";


function Central(){
	const Central_page = {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
		gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
		height: "300vh"
	}
	const customStyle = {
		fontSize: "",
		fontWeight: "bold",
		background: "radial-gradient(circle,  rgba(223,68,162,1) 0%, rgba(80,164,46,1) 100%)",
		WebkitBackgroundClip: "text",
		color: "transparent",
		display: "inline-block"
	}	
	const aa = {
		position: "relative",
		width: "100%",
		paddingBottom: "45%",
		overflow: "hidden",
	}
	const ab = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}

	 const image_container = {
		...aa,		
	 }
	const landing = {
		gridColumn: "1/7",
		gridRow: "1/3",
		...image_container,
	}
	const customIntro = {
		color: "#fff",
		fontSize: "30px",
		padding: "10%",
		position: "absolute",

	}
	const imageStyling = {
		container:{
			position: "relative",
			width: "100%",
			paddingBottom: "75%",
			overflow: "hidden",

			// Other styles go below
			flex: "1",
		},
		image:{
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	}
	
	


	const customStyle4 = {
		display: "flex",
		gap: "50px",
		padding: "20px",
		gridColumn: "1/7",
		gridRow: "3/7",
		background:"grey",
		color: "#fff",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"300",
		"fontStyle":"normal",

	 };
	 const customStyle4s = {
		gridColumn: "1/7",
		gridRow: "7/11",
		display: "flex",
		gap: "50px",
		padding: "20px",
		background: "grey",
		color: "#fff",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"300",
		"fontStyle":"normal",
		
	 }
	const  customStyle5 = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flex: "1",
		padding: "50px"
	}
	const imageStyle = {
		flex: "1"
	}
	
	
	return (
	<div style={Central_page}>
		<div style={landing}>			
			<img style={ab} src="Images/Uneditted/75.jpg" alt="Maasai tribe photo"/>
			<div style={{...ab, background: "rgba(0, 0, 0, 0.6)",}}></div>			
			<h2 style={customIntro}><span style={customStyle}>Africanacity</span> is the rhythm of resilience, the melody of diversity,
			and the <span style={customStyle}>harmony of strength</span>. It's the celebration of a continent's spirit, 
			echoing through time with the vibrant beats of <span style={customStyle}>innovation</span>, 
			<span style={customStyle}>creativity</span>, and  <span style={customStyle}>unity</span>.</h2>
		</div>

		<div style = {customStyle4}>
			<div style = {customStyle5}>
				<h1>Afro Celebration</h1>
				<p>"Afro Celebration" likely refers to a cultural event or festival celebrating African heritage, culture, music, dance, and traditions. It could take various forms, such as a community gathering, concert, dance performance, or festival organized to commemorate and showcase aspects of African culture.

					These celebrations often include a vibrant display of traditional African attire, music genres 
					like Afrobeat, Afro-jazz, or traditional African rhythms, dance performances such as traditional
					 dances or contemporary African dance styles, art exhibitions, cultural workshops, and cuisine 
					 showcasing African flavors.
					"Afro Celebration" events are not limited to any specific region or country but are organized by 
					communities or groups worldwide to promote and celebrate African culture, diversity, and unity. They provide an opportunity for people of African 
					descent and others interested in African culture to come together, celebrate, and appreciate 
					the richness and diversity of African heritage.</p>
					<h3><a style={{textDecoration: "none", color:"purple" }} href="/afro_celebration">Explore More</a></h3>
			</div> 			
			<img style={imageStyle} src="Images/card_images/79.jpg" />					
		</div>

		 <div style = {customStyle4s}>		 
			<img src="Images/card_images/75.jpg" alt="image for cultural mapping" style={{}}/>
			<div style={customStyle5}>
				<h1>Cultural Mapping</h1>
				<p>In Cultural Mapping we are going to study different cultures in 
				relation to their location and their similaries which together unites them as one people
				Cultural mapping is a process used to identify, document, and represent the cultural resources and assets within a particular community or 
				geographic area. It involves collecting data and information about various aspects of culture, including:

				<li>	Physical Assets: These include landmarks, historical sites, monuments, museums, theaters, art galleries, libraries, and cultural institutions.</li>
				<li>Intangible Cultural Heritage: This refers to traditions, customs, rituals, festivals, music, dance, oral histories, languages, culinary practices, and other forms of cultural expression passed down through generations.</li>
				<li>Cultural Practitioners and Organizations: Individuals, artists, artisans, performers, cultural groups, organizations, and institutions involved in preserving, promoting, and transmitting culture.</li>
				<li>Social Networks and Interactions: Relationships, networks, collaborations, and interactions among cultural practitioners, communities, and stakeholders.</li>
				<li>Cultural Policies and Initiatives: Government policies, programs, funding, and initiatives related to culture and the arts at local, regional, and national levels.</li>
				<li>Cultural Spaces and Infrastructure: Venues, facilities, public spaces, community centers, and cultural hubs where cultural activities and events take place.</li>
				<li>Cultural Assets Mapping: This involves creating maps, databases, inventories, or digital platforms to visualize and analyze cultural resources spatially.</li>
				</p>
				<h3><a style={{textDecoration: "none", color:"purple" }} href="/cultural_mapping">Explore More</a></h3>
			</div>		 	 
		 </div>
	</div>)
}
export default Central;