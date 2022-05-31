import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
//<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
// import img01 from '../img/student.jpg'
import img02 from '../img/admin.jpg'
// import img03 from '../img/staff.jpg'
// import img04 from '../img/home.png'

//import './layout/dashboard.css';
//import './layout/script.js';



const Dashboard = () => {

	return (
		<div>
			<center>
				<table>
					<tr>
						<td>
							<center><h2 style={{marginTop: '200px',marginBottom: '20px',color:"purple"}}>Welcome to the system {localStorage.getItem("user")}</h2></center>
							<center><h2 style={{marginTop: '20px',marginBottom: '20px',color:"red"}}>Your Role is : {localStorage.getItem("userRole")}</h2></center>
						</td>
					</tr>
					<tr>
						<td>
							<img src={img02} style={{ width: 600,  marginBottom: '300px', marginLeft: '10px', marginRight: '10px' }}></img>
						</td>
					</tr>
				</table>
			</center>
		</div>
	);
};


export default Dashboard;
