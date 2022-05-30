import axios from "axios";
import {StartUrl} from "../configs/Url.json";


let StoreSupervisorURL = StartUrl + "supervisor/reqSupervisor";
let StoreCoSupervisorURL = StartUrl + "co-supervisor/reqCoSupervisor";

let getSupervisorRequestsURL = StartUrl + "supervisor/getReqBySupervisorId/";
let getCoSupervisorRequestsURL = StartUrl + "co-supervisor/getReqByCoSupervisorId/";

let AcceptSuperviser = StartUrl + "supervisor/AcceptTopic/";
let AcceptCoSuperviser = StartUrl + "co-supervisor/AcceptTopic/";



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