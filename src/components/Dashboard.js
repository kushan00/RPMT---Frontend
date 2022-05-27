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
							<img src={img02} style={{ width: 600, marginTop: '300px', marginBottom: '300px', marginLeft: '10px', marginRight: '10px' }}></img>
						</td>
						{/* <td>
					<h1 class="ml2">Research Project Management Tool</h1>
					</td> */}

						{/* <td>
					<img src={img02} style={{ width: 600, marginTop: '300px',marginBottom:'300px', marginLeft: '10px', marginRight: '10px' }}></img>
					</td>

					<td>
					<img src={img03} style={{ width: 600, marginTop: '300px',marginBottom:'300px', marginLeft: '10px', marginRight: '10px' }}></img>
					</td> */}
					</tr>
				</table>
			</center>
		</div>
	);
};


export default Dashboard;
