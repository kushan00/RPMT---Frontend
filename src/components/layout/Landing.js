import React from "react";
import { Link, Redirect } from "react-router-dom";


const Landing = () => {

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1>Research Project Managment Tool</h1>
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
