import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Dashboard from "./components/Dashboard";



//admin
import HandleStaff from "./components/admin/HandleStaff";
import CreateSubmission from "./components/admin/CreateSubmission";
import ExcelUpload from "./components/admin/ExcelUpload";
import StdGroups from "./components/admin/StdGroups";
import TempUpload from "./components/admin/TempUpload";
import ViewAllRoles from "./components/admin/ViewAllRoles";

// student
import StudentTitleBar from "./components/student/StudentTitleBar";
import AddSubmission from "./components/student/AddSubmission"
import CreateGroup from "./components/student/CreateGroup"
import DownloadTemp from "./components/student/DownloadTemp"
import FindGroup from "./components/student/FindGroup"
import ReqSup from "./components/student/ReqSup"
import StdHome from "./components/student/StdHome"
import RegisterTopic from "./components/student/RegisterTopic"
import ReqCoSup from "./components/student/ReqCoSup";


// supervisor
import AcceptTopics from "./components/supervisor/AcceptTopics";
import MarkingSchemes from "./components/supervisor/MarkingSchemes";
import SubmittedDocs from "./components/supervisor/SubmittedDocs";
import SupervisorHome from "./components/supervisor/SupervisorHome";
import AcceptRequests from "./components/supervisor/AcceptRequests"

// co-supervisor


// panel-member
import PmTitleBar from "./components/panelMember/PmTitleBar";
import EvaluatePres from "./components/panelMember/EvaluatePres";
import EvaluateTopics from "./components/panelMember/EvaluateTopics";
import PmHome from "./components/panelMember/PmHome";

//staff
import RegisterStaff from "./components/auth/RegisterStaff";

//testing 
let isauth = localStorage.getItem('user');

export default function Router() {
	return (
			<div >
				<Router>
					<Navbar/>	
					<Routes>
						<Route exact path="/" element={isauth ? <Dashboard/> : <Landing/>} />
						<Route exact path="/dashboard" element={<Dashboard/>} />
						<Route exact path="/register" element={<Register/>} />
						<Route exact path="/login" element={<Login/>} />
						
						{/* staff */}
						<Route exact path="/staffRegister" element={<RegisterStaff/>} />

						{/* admin */}
						<Route exact path="/HandleStaff" element={<HandleStaff/>} />
						<Route exact path="/createsub" element={<CreateSubmission/>} />
						<Route exact path="/exupload" element={<ExcelUpload/>} />
						<Route exact path="/stdgrps" element={<StdGroups/>} />
						<Route exact path="/tmpupload" element={<TempUpload/>} />
						<Route exact path="/ViewAllRoles" element={<ViewAllRoles/>}/>

						{/* student */}
						<Route exact path="/studentTitleBar" element={<StudentTitleBar/>} />
						<Route exact path="/addsub" element={<AddSubmission/>} />
						<Route exact path="/creategrp" element={<CreateGroup/>} />
						<Route exact path="/downtmp" element={<DownloadTemp/>} />
						<Route exact path="/findgrp" element={<FindGroup/>} />
						<Route exact path="/reqsup" element={<ReqSup/>} />
						<Route exact path="/reqcosup" element={<ReqCoSup/>} />
						<Route exact path="/stdhome" element={<StdHome/>} />
						<Route exact path="/topicreg" element={<RegisterTopic/>} />
						
						{/* panelMember */}
						<Route exact path="/pmTitleBar" element={<PmTitleBar/>} />
						<Route exact path="/evapresentation" element={<EvaluatePres/>} />
						<Route exact path="/evatopics" element={<EvaluateTopics/>} />
						<Route exact path="/pmhome" element={<PmHome/>} />

						{/* supervisor */}
						<Route exact path="/actopics" element={<AcceptTopics/>} />
						<Route exact path="/markingsche" element={<MarkingSchemes/>} />
						<Route exact path="/submitteddocs" element={<SubmittedDocs/>} />
						<Route exact path="/supervhome" element={<SupervisorHome/>} />
						<Route exact path="/acceptReq" element={<AcceptRequests/>} />

					</Routes>
					<Footer/>
				</Router>
			</div>
	);
}

