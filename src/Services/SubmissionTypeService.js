import axios from 'axios';

let getAllsubmissionTypesURL = "http://localhost:5000/submissionType/getAllSubmissionTypes";
let CreatesubmissionTypeURL = "http://localhost:5000/submissionType/createSubmissionType";
let UpdatesubmissionTypeURL = "http://localhost:5000/submissionType/updateSubmissionType/";
let DeletesubmissionTypeURL = "http://localhost:5000/submissionType/deleteSubmissionType/";
let GetsubmissionTypeByIDURL = "http://localhost:5000/submissionType/getSubmissionTypeById/";


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



