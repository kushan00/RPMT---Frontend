import axios from 'axios';
import {StartUrl} from "../configs/Url.json";

let getAllTopicsURL = StartUrl + "topic/getAlltopics";
let createTopicURL = StartUrl + "topic/createTopic";
let getTopicByIDURL = StartUrl + "topic/getTopicById/";
let updateTopicByURL = StartUrl + "topic/updateTopic/"

export async function Getalltopics() {
  return axios.get(getAllTopicsURL);
}

export async function getTopicById(id) {
  return axios.get(getTopicByIDURL + id);
}

export async function createNewTopic(data) {
  const alldata = {
    GroupNo: data.GroupNo,
    Topic: data.Topic,
    Description: data.Description,
    LeaderITNum:data.LeaderITNum,
  }

  return await axios.post(createTopicURL, alldata);
}

export async function updateTopic(id,data) { 
  return await axios.patch(updateTopicByURL + id,data);
}



