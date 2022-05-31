import axios from 'axios';
import { StartUrl } from "../configs/Url.json";

let uploadSubmissionURL = StartUrl + "submission/upsubmissions";
let getSubmissionURL = StartUrl + "submission/allsubmissions";
let specificSubURL = StartUrl + "submission/getsubmission/";
let updateSubmissionURL = StartUrl + "submission/updatesubmission/";

export async function uploadSub(data) {
    return await axios.post(uploadSubmissionURL, data);
}

export async function getSubmissions() {
    return await axios.get(getSubmissionURL);
}

export async function getSubmissionSpecific(data) {
    return await axios.get(specificSubURL+data);
}

export async function updateSubmission(id,data) {
    return await axios.put(updateSubmissionURL+id,data);
}