import { BsBank } from "react-icons/bs";

function Synopsis(props){

	const synopsis = {
		border: "1px solid #000",
		margin: "5px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	}

	return(
		<div style={synopsis}>
			<h3 style={{margin: "3px"}}>SYNOPSIS</h3>
			<div
				style={{display: "flex",
				alignItems: "flex-end"
				
				}}
			>
				<BsBank style={{width: "30px", height: "30px", margin: "5px"}}/>
				<span style={{textDecoration: "underline"}}><h4 style={{margin: "5px"}}>{props.synopsis_heading}</h4></span>
			</div>
			<div>
				<p style={{margin: "10px", fontWeight:"bold", }}>{props.content}</p>
			</div>
		</div>
	)

}
export default Synopsis;