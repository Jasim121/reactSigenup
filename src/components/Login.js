import React,{useState} from "react";
import { Alert } from "react-bootstrap";
import {useUserAuth} from "../context/UserAuthContext";
import {useNavigate} from "react-router-dom";
const Login = () => {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const {logIn} =useUserAuth();
const navigate=useNavigate();
const handlesub=async(e)=>{
	e.preventDefault();
	setError("");
	try{
		await logIn(email,password)
		navigate("/")
	}catch(err){
  setError(err.message);
	}
   };
    return (
        <>
		<div className='ripple-background'>
		<h1 className='heading text-center'>Login</h1>
           <div className="container">
	<div className="screen">
		<div className="screen__content">
		{error && <Alert varient="danger">{error}</Alert>}
			<form className="login" onSubmit={handlesub}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name/Email"
					onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"
					onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Login</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
<div className='circle xxlarge shade1'></div>
  <div className='circle xlarge shade2'></div>
  <div className='circle large shade3'></div>
  <div className='circle mediun shade4'></div>
  <div className='circle small shade5'></div>
</div>
        </>
    )
}

export default Login
