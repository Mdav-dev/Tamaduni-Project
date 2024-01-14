import {useState} from "react";
import Header from "./Header";
import{AiFillGoogleSquare, AiFillFacebook} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc";


function Sign_up(){
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	      });
	    
	      const [formErrors, setFormErrors] = useState({});
	      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	    
	      const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	      };
	    
	      const handleSubmit = (e) => {
		e.preventDefault();
		// Validate form data
		const errors = validateForm(formData);
		setFormErrors(errors);
	    
		// If there are no errors, simulate form submission
		if (Object.keys(errors).length === 0) {
		  setIsFormSubmitted(true);
		  // In a real-world scenario, you would handle form submission to a server here
		  console.log('Form submitted:', formData);
		}
	      };
	    
	      const validateForm = (data) => {
		let errors = {};
	    
		if (!data.username.trim()) {
		  errors.username = 'Username is required';
		}
	    
		if (!data.email.trim()) {
		  errors.email = 'Email is required';
		} else if (!isValidEmail(data.email)) {
		  errors.email = 'Invalid email address';
		}
	    
		if (!data.password.trim()) {
		  errors.password = 'Password is required';
		} else if (data.password.length < 6) {
		  errors.password = 'Password must be at least 6 characters';
		}
	    
		if (data.password !== data.confirmPassword) {
		  errors.confirmPassword = 'Passwords do not match';
		}
	    
		return errors;
	      };
	    
	      const isValidEmail = (email) => {
		// Basic email validation, you might want to use a library for more comprehensive validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	      };
	      const container = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	      }
	      const sub_container = {
		// display: "flex",
		flexDirection: "column"
	      }
	      return( <div>
	      	
		<div style={container}>
		  	<div style={sub_container}>
			  <h1>Sign Up</h1>
		  
		  {isFormSubmitted && <p>Form submitted successfully!</p>}
		  <form onSubmit={handleSubmit}>
		    <div>
		      <label>Username:</label>
		      <input
			type="text"
			name="username"
			value={formData.username}
			onChange={handleChange}
		      />
		      {formErrors.username && <p>{formErrors.username}</p>}
		    </div>
		    <div>
		      <label>Email:</label>
		      <input
			type="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
		      />
		      {formErrors.email && <p>{formErrors.email}</p>}
		    </div>
		    <div>
		      <label>Password:</label>
		      <input
			type="password"
			name="password"
			value={formData.password}
			onChange={handleChange}
		      />
		      {formErrors.password && <p>{formErrors.password}</p>}
		    </div>
		    <div>
		      <label>Confirm Password:</label>
		      <input
			type="password"
			name="confirmPassword"
			value={formData.confirmPassword}
			onChange={handleChange}
		      />
		      {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
		    </div>
		    <button type="submit">Sign Up</button>
		  </form>
		  <span style={{marginRight: "10px"}}>
			Or Sign Up with 
		  </span>
		  <button style={{background: "white"}}><FcGoogle/></button>
		  <button style={{background: "white"}}><AiFillFacebook/></button>
		  <p>Already have an account? <a href="/login">Log in</a></p>
			</div>
		</div>
	</div>
	      )
	      
	    };
	    
	    export default Sign_up;
