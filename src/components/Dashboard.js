import React from "react";
import {useState ,useEffect }from 'react'
import { Link } from 'react-router-dom';

import img01 from '../img/student.jpg'
import img02 from '../img/admin.jpg'
import img03 from '../img/staff.jpg'


const Dashboard = () => {

	return (
		<div>
			<center>
			<table>
				<tr>
					<td>
					<img src={img01} style={{ width: 600, marginTop: '300px', marginBottom:'300px', marginLeft: '10px', marginRight: '10px' }}></img>
					</td>

					<td>
					<img src={img02} style={{ width: 600, marginTop: '300px',marginBottom:'300px', marginLeft: '10px', marginRight: '10px' }}></img>
					</td>

					<td>
					<img src={img03} style={{ width: 600, marginTop: '300px',marginBottom:'300px', marginLeft: '10px', marginRight: '10px' }}></img>
					</td>
				</tr>
			</table>
			</center>
		</div>
	);
};


export default Dashboard;
