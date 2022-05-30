import axios from 'axios';

let getGroupPanelsURL = "http://localhost:5000/GrouPanel/getGroupPanels";
let createGroupPanelURL = "http://localhost:5000/GrouPanel/createGroupPanel";
let updateGroupPanelByIdURL = "http://localhost:5000/GrouPanel/updateGroupPanelById/";
let deleteGroupPanelURL = "http://localhost:5000/GrouPanel/deleteGroupPanel/";
let getGroupPanelByIdURL = "http://localhost:5000/GrouPanel/getGroupPanelById/";


export async function GetallGroupPanels(){
  return axios.get(getGroupPanelsURL);
}

export async function getGroupPanelByID(id){
    return axios.get(getGroupPanelByIdURL + id);
  }

export async function createNewGroupPanel(data) {
  return await axios.post(createGroupPanelURL,data);
}


export async function UpdateGroupPanel(id,data) {
  return await axios.patch(updateGroupPanelByIdURL + id,data);
}

export async function DeleteGroupPanel(id) {
  return await axios.delete(deleteGroupPanelURL + id);
}



