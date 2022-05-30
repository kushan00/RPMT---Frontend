import axios from 'axios';
import {StartUrl} from "../configs/Url.json";

let getGroupPanelsURL = StartUrl + "GrouPanel/getGroupPanels";
let createGroupPanelURL = StartUrl + "GrouPanel/createGroupPanel";
let updateGroupPanelByIdURL = StartUrl + "GrouPanel/updateGroupPanelById/";
let deleteGroupPanelURL = StartUrl + "GrouPanel/deleteGroupPanel/";
let getGroupPanelByIdURL = StartUrl + "GrouPanel/getGroupPanelById/";


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



