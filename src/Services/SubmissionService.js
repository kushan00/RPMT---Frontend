import axios from 'axios';
import { StartUrl } from "../configs/Url.json";

let uploadSubmissionURL = StartUrl + "submission/upsubmissions";
let getSubmissionURL = StartUrl + "submission/allsubmissions";

export async function uploadSub(data) {
    return await axios.post(uploadSubmissionURL, data);
}

export async function getSubmissions(data) {
    return await axios.get(getSubmissionURL, data);
}