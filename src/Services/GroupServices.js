import axios from 'axios';

let getAllGroupsURL = "http://localhost:5000/group/getAllGroups";
let CreateGroupURL = "http://localhost:5000/group/createGroup";
let UpdateGroupURL = "http://localhost:5000/group/updateGroupById/";
let DeleteGroupURL = "http://localhost:5000/group/deleteGroup/";
let GetGroupByIDURL = "http://localhost:5000/group/getGroupById/";
let GetgroupByNumberURL = "http://localhost:5000/group/getgroupByNumber/";


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



