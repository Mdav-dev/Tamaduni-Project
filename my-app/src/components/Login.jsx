import Header from "./Header";
import{AiFillGoogleSquare, AiFillFacebook} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc";

function Login(props){
	const container = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}
	const login_container = {

	}
	

	return(
		<div style={container}>
		<div className="login-container" style={login_container}>
			<h2>Login</h2>
			<div class="social-login">			
			</div>
			<form>
				<input type="text" placeholder="Username" required/>
				<input type="password" placeholder="Password" required/>
				<button type="submit">Login</button>
			</form>
			<hr/>
			<span style={{marginRight: "10px"}}>
			Or Log In with 
		  </span>
		  <button style={{background: "white"}}><FcGoogle/></button>
		  <button style={{background: "white"}}><AiFillFacebook/></button>
			<p>Don't have an account? <a href="/sign_up">Sign up</a></p>			
	    	
		</div>
		</div>
	)
}
export default Login;