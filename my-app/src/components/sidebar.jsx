import React from "react"
import {FaBars, FaTimes} from "react-icons/fa"


function Sidebar(props){
	<header>
		<h3>logo</h3>
		<nav>
			<a href="#">Home</a>
			<a href="#">Second Screen</a>
			<a href="#">Third Screen</a>
			<a href="#">Last Screen</a>
			<button>
				<FaTimes/>
			</button>
		</nav>
		<button>
			<FaBars/>
		</button>
	</header>
}
export default Sidebar;