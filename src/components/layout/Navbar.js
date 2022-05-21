import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";


const Navbar = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');

	const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		localStorage.removeItem("user");
		navigate("/");
	  }

	const handleSignUp = () => {
		navigate("/register");
	}
	

	return (
		<div>
			<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                {/* Student pages */}
                <a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" aria-current="page" href="/creategrp">Create Group</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Register Reserch Topic</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Request Superviser</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Request co-superviser</a>
				<a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Submissions</a>
				<a style={{ display: userRole == "student" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Downloads</a>

                {/*  admin Pages */}
                <a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Handle Staff</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="/stdgrps" aria-current="page">All Groups</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Ceate Submissions</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Allocate panel Members</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Create Marking Schemes</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Upload Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">View Roles</a>

                {/* superviser Pages */}
                <a style={{ display: userRole == "superviser" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Accept Topics</a>
                <a style={{ display: userRole == "superviser" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Group Chats</a>
				<a style={{ display: userRole == "superviser" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Evaluate Submissions</a>

				{/*co_superviser pages */}
				<a style={{ display: userRole == "co_superviser" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Evaluate Topics</a>
				<a style={{ display: userRole == "co_superviser" ? "flex" : "none" }} className="nav-link active" href="" aria-current="page">Evaluate student's Presentations</a>


              </div>
            </div>
          </div>
		  <Link to="/userprofile">
			<button  className="btn btn-success" type="submit" style={{ float: "right", display: userRole ? "flex" : "none" }}>
				Profile
			</button>
		  </Link>	
          <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{ float: "right", marginRight: "10px" , display:userRole ? "flex":"none"}}>
            {"Logout"}
          </button>
   
        </nav>
			</div>
		</div>
		
	);
};



export default Navbar;
