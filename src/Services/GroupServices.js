import axios from 'axios';
import {StartUrl} from "../configs/Url.json";

let getAllGroupsURL = StartUrl + "group/getAllGroups";
let CreateGroupURL = StartUrl + "group/createGroup";
let UpdateGroupURL = StartUrl + "group/updateGroupById/";
let DeleteGroupURL = StartUrl + "group/deleteGroup/";
let GetGroupByIDURL = StartUrl + "group/getGroupById/";
let GetgroupByNumberURL = StartUrl + "group/getgroupByNumber/";


export async function GetallGroups(){
  return axios.get(getAllGroupsURL);
}

export async function getGroupByID(id){
    return axios.get(GetGroupByIDURL + id);
  }

export async function getGroupByNo(data){
  return axios.get(GetgroupByNumberURL + data);
}

export async function createNewGroup(data) {
  const alldata = {
    GroupNo: data.GroupNo,
	GroupSuperviser:"",
	GroupCoSuperviser:"",
	GroupLeaderID: data.Group_Leader_ITNUM,
	GroupMember1ID: data.Group_Member1_ITNUM,
	GroupMember2ID:data.Group_Member2_ITNUM,
	GroupMember3ID: data.Group_Member3_ITNUM
}

  return await axios.post(CreateGroupURL,alldata);
}


export async function UpdateGroup(id,data) {
    const alldata = {
        GroupNo: data.GroupNo,
        GroupSuperviser:data.GroupSuperviserID ? data.GroupSuperviserID : "",
        GroupCoSuperviser: data.GroupCoSuperviserID ? data.GroupCoSuperviserID:"",
        GroupLeaderID: data.Group_Leader_ITNUM,
        GroupMember1ID: data.Group_Member1_ITNUM,
        GroupMember2ID:data.Group_Member2_ITNUM,
        GroupMember3ID: data.Group_Member3_ITNUM
    }

  return await axios.patch(UpdateGroupURL + id,alldata);
}

export async function DeleteGroup(id) {
  return await axios.delete(DeleteGroupURL + id);
}



