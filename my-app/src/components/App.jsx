import React from "react";
import Home from "./Home_page";
import Sign_up from "./Sign_up";
import Login from "./Login";
import Cultural_mapping from "./Cultural Mapping/Cultural_mapping";
import Sidebar from "./sidebar";
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"

function App(){

	return(
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home/>} />	
					<Route path="/login" element={<Login/>}/>
					<Route path="/sign_up" element = {<Sign_up/>}/>
					<Route path="/cultural_mapping" element = {<Cultural_mapping/>} />
					<Route path="/afro_celebration" element = {<Cultural_mapping/>} />					
				</Routes>		
			</div>
		</Router>
	)
}

export default App;