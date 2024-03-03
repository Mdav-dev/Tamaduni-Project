 
 function Flag_card(props){

	const country_code = props.code;
	const country_name = props.country;
	const a = "https://flagcdn.com/224x168/" + country_code + ".png"

	const b={
		height: "70px",
		width: "120%",
		marginRight: "90px"
	}
	const c = {
		padding: "0",
		margin: "0",
	}
	
	return(
		<div style={b}>
			<img
			src ={a}
			width="57"
			height="44"
			style={c}
			alt={country_name}/>

			<div><h3 style={c}>{country_name}</h3></div>
		</div>
	)
 }
 export default Flag_card;