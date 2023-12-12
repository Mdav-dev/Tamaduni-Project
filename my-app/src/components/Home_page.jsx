import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import Central from "./Central_page";

function Home(props){
	const [sidebar, setSidebar] = useState(true);

	function handleOnclick(){
		setSidebar(!sidebar)
	}
	return(
		<div className="main_page">			
			<Header buttonClick = {handleOnclick} />
			<Sidebar isinvisible = {sidebar} />
			<Central />
			<Footer />			
		</div>
	)
}
export default Home;