import React, { Profiler, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/layout/Profile";

import Dashboard from "./components/Dashboard";



//admin
import HandleStaff from "./components/admin/HandleStaff";
import CreateSubmission from "./components/admin/CreateSubmission";
import MarkingUpload from "./components/admin/MarkingUpload";
import StdGroups from "./components/admin/StdGroups";
import TempUpload from "./components/admin/TempUpload";
import ViewAllRoles from "./components/admin/ViewAllRoles";
import AdminViewSubmission from "./components/admin/AdminViewSubmission";
import UpdateSubmission from "./components/admin/UpdateSubmission";
import AllTemps from "./components/admin/AllTemps";
import AssignPanel from "./components/admin/AssignPanel";
import UpdateUser from "./components/admin/UpdateUser";

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
import ViewSubmission from "./components/student/ViewSubmission";
import MarksPage from "./components/student/MarksPage";

// supervisor and co-supervisor
import AcceptTopics from "./components/supervisor/AcceptTopics";
import MarkingSchemes from "./components/supervisor/MarkingSchemes";
import SubmittedDocs from "./components/supervisor/SubmittedDocs";
import SupervisorHome from "./components/supervisor/SupervisorHome";
import AcceptRequests from "./components/supervisor/AcceptRequests"
import AccpetedRequests from "./components/supervisor/AccpetedRequests";
import RejectedRequests from "./components/supervisor/RejectedRequests";
import AcceptedTopics from "./components/supervisor/AcceptedTopics";
import RejectedTopics from "./components/supervisor/RejectedTopics";
import StdSubmissions from "./components/supervisor/StdSubmissions";
import MainChat from "./components/ChatSystem/MainChat";
import AssignedGroups from "./components/supervisor/AssignedGroups";
import SelectedGroupDetails from "./components/supervisor/SelectedGroupDetails";
import AllocateMarks from "./components/supervisor/AllocateMarks";

// panel-member
import PmTitleBar from "./components/panelMember/PmTitleBar";
import EvaluatePres from "./components/panelMember/EvaluatePres";
import EvaluateTopics from "./components/panelMember/EvaluateTopics";
import PmHome from "./components/panelMember/PmHome";
import AssignedGroupsPM from "./components/panelMember/AssignedGroupsPM";

//staff
import RegisterStaff from "./components/auth/RegisterStaff";
import ViewSubmission from "./components/student/ViewSubmission";






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
						<Route exact path="/userprofile" element={<Profile/>} />
						{/* staff */}
						<Route exact path="/staffRegister" element={<RegisterStaff/>} />

						{/* admin */}
						<Route exact path="/HandleStaff" element={<HandleStaff/>} />
						<Route exact path="/createsub" element={<CreateSubmission/>} />
						<Route exact path="/markingup" element={<MarkingUpload/>} />
						<Route exact path="/stdgrps" element={<StdGroups/>} />
						<Route exact path="/tmpupload" element={<TempUpload/>} />
						<Route exact path="/ViewAllRoles" element={<ViewAllRoles/>}/>
						<Route exact path="/adminViewsub" element={<AdminViewSubmission/>}/>
						<Route exact path="/updateSub/:id" element={<UpdateSubmission/>}/>
						<Route exact path="/alltemps" element={<AllTemps/>} />
						<Route exact path="/assign-panel" element={<AssignPanel/>}/>
						<Route exact path="/updateUser/:id" element={<UpdateUser/>}/>

						{/* student */}
						<Route exact path="/studentTitleBar" element={<StudentTitleBar/>} />
						<Route exact path="/add-submission/:id" element={<AddSubmission/>} />
						<Route exact path="/creategrp" element={<CreateGroup/>} />
						<Route exact path="/downtmp" element={<DownloadTemp/>} />
						<Route exact path="/findgrp" element={<FindGroup/>} />
						<Route exact path="/reqsup" element={<ReqSup/>} />
						<Route exact path="/reqcosup" element={<ReqCoSup/>} />
						<Route exact path="/stdhome" element={<StdHome/>} />
						<Route exact path="/topicreg" element={<RegisterTopic/>} />
						<Route exact path="/viewsub" element={<ViewSubmission/>} />
						<Route exact path="/markspage" element={<MarksPage/>} />
						
						{/* panelMember */}
						<Route exact path="/pmTitleBar" element={<PmTitleBar/>} />
						<Route exact path="/evapresentation" element={<EvaluatePres/>} />
						<Route exact path="/evaluate-topics" element={<AcceptTopics/>} />
						<Route exact path="/pmhome" element={<PmHome/>} />
						<Route exact path="/pm-assign-groups" element={<AssignedGroupsPM/>}/>

						{/* supervisor and co-supervisor*/}
						<Route exact path="/actopics" element={<AcceptTopics/>} />
						<Route exact path="/markingsche" element={<MarkingSchemes/>} />
						<Route exact path="/submitteddocs" element={<SubmittedDocs/>} />
						<Route exact path="/supervhome" element={<SupervisorHome/>} />
						<Route exact path="/acceptReq" element={<AcceptRequests/>} />
						<Route exact path="/accepted-requests" element={<AccpetedRequests/>} />
						<Route exact path="/rejected-requests" element={<RejectedRequests/>} />
						<Route exact path="/accepted-topics" element={<AcceptedTopics/>} />
						<Route exact path="/rejected-topics" element={<RejectedTopics/>} />
						<Route exact path="/seesubmissions" element={<StdSubmissions/>} />
						<Route excat path="/group-chat" element={<MainChat/>}/>
						<Route exact path="/assigned-groups" element={<AssignedGroups/>}/>
						<Route exact path="/group-selected/:id" element={<SelectedGroupDetails/>}/>
						<Route exact path="/allocatemarks/:id" element={<AllocateMarks/>} />

					</Routes>
					<Footer/>
				</Router>
			</div>
	);
}

