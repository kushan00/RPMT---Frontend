import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import "./script.js";

//<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

const Landing = () => {

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">

					<div className = "home" >
					<b>Research Project Management Tool</b>
					</div>
					
					<br />
					<div className="buttons">
						<Link to="/register" className="btn btn-success">
							Sign Up
						</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/login" className="btn btn-success">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
