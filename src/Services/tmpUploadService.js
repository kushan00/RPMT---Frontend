import axios from 'axios';
import {StartUrl} from "../configs/Url.json";

let uploadTmpFileURL = StartUrl + "fileupload/uploadfile";

export async function UploadTmpFile(data) {
    return await axios.post(uploadTmpFileURL, data);
  }