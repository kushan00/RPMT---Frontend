import axios from "axios";

let StoreSupervisorURL = "http://localhost:5000/supervisor/reqSupervisor";
let StoreCoSupervisorURL = "http://localhost:5000/co-supervisor/reqCoSupervisor";

let getSupervisorRequestsURL = "http://localhost:5000/supervisor/getReqBySupervisorId";
let getCoSupervisorRequestsURL = "http://localhost:5000/co-supervisor/getReqByCoSupervisorId";


export async function AssignSupervisor(data) {
  return await axios.post(StoreSupervisorURL, data);
}

export async function AssignCoSupervisor(data) {
  return await axios.post(StoreCoSupervisorURL, data);
}

export async function getSupervisorRequests(data) {
  
  let  supId =data.supervisor_id
  
  console.log(supervisor_id);
  return await axios.get(getSupervisorRequestsURL + supId);
}

export async function getCoSupervisorRequests(data) {
  
  let  coSupId =data.co_supervisor_id
  
  console.log(co_supervisor_id);
  return await axios.get(getCoSupervisorRequestsURL + coSupId);
}