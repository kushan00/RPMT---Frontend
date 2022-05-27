import axios from 'axios';

let getAllTopicsURL = "http://localhost:5000/topic/getAlltopics";
let createTopicURL = "http://localhost:5000/topic/createTopic";
let getTopicByIDURL = "http://localhost:5000/topic/getTopicById/";
let updateTopicByURL = "http://localhost:5000/topic/updateTopic/"

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
  }

  return await axios.post(createTopicURL, alldata);
}

export async function updateTopic(id,data) { 
  return await axios.patch(updateTopicByURL + id,data);
}



