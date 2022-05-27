import axios from "axios";

let StoreSupervisorURL = "http://localhost:5000/supervisor/reqSupervisor";
let StoreCoSupervisorURL = "http://localhost:5000/co-supervisor/reqCoSupervisor";

let getSupervisorRequestsURL = "http://localhost:5000/supervisor/getReqBySupervisorId/";
let getCoSupervisorRequestsURL = "http://localhost:5000/co-supervisor/getReqByCoSupervisorId/";

let AcceptSuperviser = "http://localhost:5000/supervisor/AcceptTopic/";
let AcceptCoSuperviser = "http://localhost:5000/co-supervisor/AcceptTopic/";



export async function AssignSupervisor(data) {
  return await axios.post(StoreSupervisorURL, data);
}

export async function AssignCoSupervisor(data) {
  return await axios.post(StoreCoSupervisorURL, data);
}

export async function getSupervisorRequests(data) {
  let  supId =data
  return await axios.get(getSupervisorRequestsURL + supId);
}

export async function getCoSupervisorRequests(data) { 
  let  coSupId =data
  return await axios.get(getCoSupervisorRequestsURL + coSupId);
}


export async function UpdateSuperviserRequests(id,data) { 
  return await axios.patch(AcceptSuperviser + id,data);
}


export async function updateCoSuperviserRequests(id,data) { 
  console.log("service ",data);
  return await axios.patch(AcceptCoSuperviser + id,data);
}