import axios from 'axios';
import {StartUrl} from "../configs/Url.json";

let getAllsubmissionTypesURL = StartUrl + "submissionType/getAllSubmissionTypes";
let CreatesubmissionTypeURL = StartUrl + "submissionType/createSubmissionType";
let UpdatesubmissionTypeURL = StartUrl + "submissionType/updateSubmissionType/";
let DeletesubmissionTypeURL = StartUrl + "submissionType/deleteSubmissionType/";
let GetsubmissionTypeByIDURL = StartUrl + "submissionType/getSubmissionTypeById/";


export async function getAllSubmissionTypes(){
  return axios.get(getAllsubmissionTypesURL);
}

export async function getSubmissionTypeByID(id){
    return axios.get(GetsubmissionTypeByIDURL + id);
  }

export async function createNewSubmissionType(data) {
  const alldata = {
    subType: data.subType,
    description:data.description,
    deadline:data.deadline

}

  return await axios.post(CreatesubmissionTypeURL,alldata);
}


export async function updateSubmissionType(id,data) {
    const alldata = {
        subType: data.subType,
        description:data.description,
        deadline:data.deadline
    }

  return await axios.put(UpdatesubmissionTypeURL + id,alldata);
}

export async function deleteSubmissionType(id) {
  return await axios.delete(DeletesubmissionTypeURL + id);
}



