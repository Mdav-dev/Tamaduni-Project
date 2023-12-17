import React, {useState} from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import Central from "./Central_page";
import FirstExcerpt from "./FirstExcerpt";

function Home(props){
	const [sidebar, setSidebar] = useState(true);

	function handleOnclick(){
		setSidebar(!sidebar)
	}

	// const customStyle1 = {
	// 	display: "grid",
	// 	gridTemplateColumns: "1fr 1fr 1fr 1fr",
	// 	gridTemplateRows: "50vh 50vh",

	// }
	// const customStyle2 = {
	// 	gridColumn: "span 1",
  	// 	gridRow: "span 2",
	// }
	// const customStyle3 = {
	// 	gridColumn: "span 3",
  	// 	gridRow: "span 2",

	// }

	return(
		<div className="main_page">			
			<Header buttonClick = {handleOnclick} />
			<Sidebar isinvisible = {sidebar} />
			<Central />
			<FirstExcerpt />
			<Footer />			
		</div>
	)
}
export default Home;