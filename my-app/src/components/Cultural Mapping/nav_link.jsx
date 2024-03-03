import { useState } from "react"


function Nav_link(props){
	const [styling, setStyling] = useState({})

	const box = {
		border: "1px solid #000",
		padding: "10px"
	}
	

	return(
		<span style={box}>
			<p style={{margin: "0"}}>
				{props.name}
			</p>
		</span>
	)
}
export default Nav_link;