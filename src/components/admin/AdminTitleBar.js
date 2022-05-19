import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
//import "./AdminTitleBar.css"
import { BsPersonLinesFill } from "react-icons/bs"
import { BsFillPersonPlusFill } from "react-icons/bs"
import { MdOutlineChecklistRtl } from "react-icons/md"
import { MdPictureAsPdf } from "react-icons/md"
import { FaFileUpload } from "react-icons/fa"

const AdminTitleBar = ({ auth: { user } }) => {


	return (
		<div className="container1">
			<div className="sidebar" >
				<div className="sidebarWrapper">
					<div className="sidebarMenu">
						<div className="sidebarTitle">Admin's Dashboard</div>
						<ul className="sidebarItems">
							<li className="sidebarListItem">
								<BsPersonLinesFill size="3em" />&nbsp;User Management
							</li>
							<li className="sidebarListItem">
								<BsFillPersonPlusFill size="3em" />&nbsp;Allocate Panel Members
							</li>
							<li className="sidebarListItem">
								<MdOutlineChecklistRtl size="3em" />&nbsp;Create a Marking Scheme
							</li>
							<li className="sidebarListItem">
								<MdPictureAsPdf size="3em" />&nbsp;Create a Submission Type
							</li>
							<li className="sidebarListItem">
								<FaFileUpload size="3em" />&nbsp;Upload a Document/ &nbsp;Presentation&nbsp;Template
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="sidebar2" style={{ marginTop: "12rem" }}>
			</div>
		</div>
	);
};
AdminTitleBar.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(AdminTitleBar);
