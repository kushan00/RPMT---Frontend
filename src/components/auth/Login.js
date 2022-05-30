import React, { Fragment, useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import { LoginCustomer } from "../../Services/AuthServices";
import Swal from 'sweetalert2';

const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>{
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}


	const onSubmit = async (e) => {

		e.preventDefault();

		console.log("data",formData)
		let data = await LoginCustomer(formData);
		console.log("data",data?.data);
		if(data?.data?.userRole)
		{
		localStorage.setItem("token",data?.data?.token);
		localStorage.setItem("userRole",data?.data?.userRole);
		localStorage.setItem("user",data?.data?.user);
		navigate("/dashboard");
		}
		else
		{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Login Failed!',
			  })
		}
	};


	return (
		<div className="login-form">
			<h1 className="heading">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into Your Account
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type="submit" className="btn btn-warning" value="Login" />
			</form>
			<p className="link">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
		</div>
	);
};


export default Login;
