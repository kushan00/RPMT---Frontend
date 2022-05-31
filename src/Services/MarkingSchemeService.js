import axios from 'axios';
import { StartUrl } from "../configs/Url.json";

let uploadMarkingSchemeURL = StartUrl + "marking/uploadmarking";
let allMarkingsURL = StartUrl + "marking/allmarkings";

export async function uploadMarking(data) {
    return await axios.post(uploadMarkingSchemeURL, data);
}

export async function getAllMarkingSchemes(data) {
    return await axios.get(allMarkingsURL, data);
}