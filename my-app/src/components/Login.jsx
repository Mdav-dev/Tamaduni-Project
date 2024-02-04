import Header from "./Header";
import{AiFillGoogleSquare, AiFillFacebook} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc";

function Login(props){
	const container = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh"
	}
	const login_container = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flex: "1",

	}
	const aa = {
		position: "relative",
		width: "100%",
		paddingBottom: "75%",
		overflow: "hidden",

	}
	const image_container = {
		...aa,
		flex: "1",
	}
	const ab = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}
	const inputBox = {
		width: '100%',
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid #ccc',
		borderRadius: '5px',
		boxSizing: 'border-box',
		display: 'block',
	   }
	   const submitButton = {
		width: '100%',
		padding: '10px',
		backgroundColor: '#007bff',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	   }
	   const dc = {
		fontFamily:"\"Courgette\", cursive",
		fontWeight:"400",
		fontStyle:"normal",
	   }
	   const googleButton = {
		...inputBox,
		background: "white",
		width: "40%"
	  }

	return(
		<div style={container}>
			<div style={image_container}>
				<img src="/Images/Editted/87.jpg" style={ab}/>
			</div>
			<div className="login-container" style={login_container}>
				<h2>Login</h2>
				<div class="social-login">			
				</div>
				<form>
					<input style={inputBox} type="text" placeholder="Email" required/>
					<input style={inputBox} type="password" placeholder="Password" required/>
					<button style={submitButton} type="submit">Login</button>
				</form>
				<hr/>
				<span style={{marginRight: "10px", ...dc}}>
				Or Log In with 
			</span>
			<button  style={googleButton}><FcGoogle/> Sign in with Google</button>
			<button style={googleButton}><AiFillFacebook/> Sign in with Facebook</button>
				<p>Don't have an account? <a style={{textStyle: "none", fontWeight: "bold"}} href="/sign_up">Sign up</a></p>			
			
			</div>
		</div>
	)
}
export default Login;