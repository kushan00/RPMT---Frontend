import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateAdmin } from "../../Services/AuthServices";
import Swal from 'sweetalert2';

const RegisterStaff = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		ITnumber:"",
		mobileno:"+94",
		userRole:"staff"
	});

	const { name, email, password, password2 , ITnumber , mobileno } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		if (password !== password2) {
			alert("Password do not match", "danger");
		} else {
			let data = await CreateAdmin(formData);
			console.log("data",data)
			if(data?.data?._id)
			{
				Swal.fire({
					icon: 'success',
					title: 'Congrats!',
					text: 'Register successfull...!',
				  })
				navigate("/login");
			}
			else
			{
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Registration Failed..!',
				  })
			}
		}
	};


	return (
		<div className="register-form">
			<h1 className="heading">Register as Staff</h1>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
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
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Mobile no"
						name="mobileno"
						value={mobileno}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
		</div>
	);
};

export default RegisterStaff;
