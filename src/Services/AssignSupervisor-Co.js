import axios from "axios";

let StoreSupervisorURL = "http://localhost:5000/assign/reqSupervisor";
let StoreCoSupervisorURL = "http://localhost:5000/assign/reqCoSupervisor";

export async function AssignSupervisor(data) {
  return await axios.post(StoreSupervisorURL, data);
}

export async function AssignCoSupervisor(data) {
  return await axios.post(StoreCoSupervisorURL, data);
}
