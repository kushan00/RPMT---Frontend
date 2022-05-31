import axios from 'axios';
import { StartUrl } from "../configs/Url.json";

let uploadTmpFileURL = StartUrl + "fileupload/uploadfile";
let getAllTempsURL = StartUrl + "fileupload/allfiles"

export async function UploadTmpFile(data) {
    return await axios.post(uploadTmpFileURL, data);
}

export async function getAllTemps() {
    return await axios.get(getAllTempsURL);
}