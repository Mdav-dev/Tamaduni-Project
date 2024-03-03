 import Flag_card from "./flag_card";
import countries from "./countries";

 function Flag_card_container(props){

	const renderedComponents = Object.keys(countries).map(([key, value]) => (
		<Flag_card code={value}/>
	));

	const particulars = {
		display: "flex",
		justifyContent: "center",
		border: "1px solid #000",
		"width":"100%",
		"overflowX":"auto",
		"whiteSpace":"nowrap",

	}
	return(
		<div style={{...particulars, margin: "0", padding: "0", }}>
		{renderedComponents}
		</div>
	)
 }
 export default Flag_card_container;