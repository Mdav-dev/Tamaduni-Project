import { WiTime10 } from "react-icons/wi";
import { FaRegHandshake } from "react-icons/fa";
import { PiMapPinLine, PiVideo, PiImage} from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { MdPrint } from "react-icons/md";
import {FaTimes} from "react-icons/fa";
import { TbWorldStar } from "react-icons/tb";
import Particulars_Card from "./Particulars_Card";
import Afro_card from "../AfroCelebration/Afro_card";
import Scrollables from "./Scrollables";

function Particulars(props){
	const container = {
		display: "flex",
		flexDirection: "column",
	}
	const sub_header = {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid #000", 
		marginLeft: "1px", 
		marginTop: "1px"

	}
	const sub_header2 = {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid #000",
		margin: "1px"
	}
	const details = {
		display: "flex",
		flexDirection: "column",
		border: "1px solid #000",
		height: "82vh"
	}

	return(
		<div style={container}>
			<div style={sub_header}>
				<div >
					<WiTime10 style={{width: "40px", height: "40px"}} />
					<FaRegHandshake style={{width: "40px", height: "40px"}}/>
				</div>
				<div>
					<PiMapPinLine style={{width: "40px", height: "40px"}}/>
					<GrDocumentText style={{width: "40px", height: "35px"}}/>
				</div>
				<div>
				<MdPrint style={{width: "40px", height: "35px"}}/>
				<FaTimes style={{width: "40px", height: "35px"}}/>
				</div>
			</div>
			<div style={sub_header2}>
				<div>
					<h2 style={{padding: "0", margin: "0"}}>
						{props.heading}
					</h2>
					<h3 style={{padding: "0", margin: "0"}}>
						CATEGORY: {props.category}
					</h3>
				</div>
				<div>
					<TbWorldStar style={{width: "40px", height: "40px"}} />
					<PiVideo style={{width: "40px", height: "40px"}} />
					<PiImage style={{width: "40px", height: "40px"}} />
				</div>
			</div>
			<div style={details}>
			{/* <props.card /> */}
			{/* <Particulars_Card /> */}
			{/* <Afro_card /> */}
			<Scrollables />

			</div>
		</div>
	)
}
export default Particulars;