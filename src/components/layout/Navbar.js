import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";
import { BsPersonLinesFill } from "react-icons/bs"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { MdOutlineChecklistRtl } from "react-icons/md"
import { MdPictureAsPdf } from "react-icons/md"
import { FaFileUpload } from "react-icons/fa"

const Navbar = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');

	const handleSubmit = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userRole");
		localStorage.removeItem("user");
		navigate("/");
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

			    <a style={{ display: userRole == "staff" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/staffRegister">Register as Staff</a>

                {/* Student pages */}
                <a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" aria-current="page" href="/creategrp">Create Group</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/topicreg" aria-current="page">Register Reserch Topic</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/reqsup" aria-current="page">Request Superviser</a>
                <a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/reqcosup" aria-current="page">Request co-superviser</a>
				<a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/viewsub" aria-current="page">Submissions</a>
				<a style={{ display: userRole == "student" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="" aria-current="page">Downloads</a>

                {/*  admin Pages */}
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/stdgrps" aria-current="page">All Groups</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/adminviewsub" aria-current="page">Ceate Submissions</a>
                <a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/HandleStaff" aria-current="page">Allocate panel Members</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markingup" aria-current="page">Create Marking Schemes</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/tmpupload" aria-current="page">Upload Templates</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/ViewAllRoles" aria-current="page">View Roles</a>
				<a style={{ display: userRole == "admin" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/alltemps" aria-current="page">All Templates</a>

                {/* superviser/ co-supervisor Pages */}
                <a style={{ display: userRole == "superviser" ||  userRole == "co_superviser"  ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/actopics" aria-current="page">Accept Topics</a>
                <a style={{ display: userRole == "superviser" ||  userRole == "co_superviser" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="" aria-current="page">Group Chats</a>
				<a style={{ display: userRole == "superviser" ||  userRole == "co_superviser" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="" aria-current="page">Evaluate Submissions</a>
				<a style={{ display: userRole == "superviser" ||  userRole == "co_superviser" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/acceptReq" aria-current="page">Accept Requests</a>
				<a style={{ display: userRole == "superviser" ||  userRole == "co_superviser" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="/markingsche" aria-current="page">Marking Schemes</a>

				{/*panel member pages */}
				<a style={{ display: userRole == "panel_member" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="" aria-current="page">Evaluate Topics</a>
				<a style={{ display: userRole == "panel_member" ? "flex" : "none" , textDecoration:"none"}} className="sidebarListItem" href="" aria-current="page">Evaluate student's Presentations</a>


              </div>
            </div>
          </div>
		  <Link to="/userprofile">
			<button  className="btn btn-success" type="submit" style={{ float: "right", display: userRole ? "flex" : "none" , textDecoration:"none"}}>
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
