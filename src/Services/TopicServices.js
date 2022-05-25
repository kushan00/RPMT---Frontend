import axios from 'axios';

let getAllTopicsURL = "http://localhost:5000/topic/getAlltopics";
let createTopicURL = "http://localhost:5000/topic/createTopic";
let getTopicByIDURL = "http://localhost:5000/topic/getTopicById/";


export async function Getalltopics(){
  return axios.get(getAllTopicsURL);
}

export async function getTopicById(id){
    return axios.get(getTopicByIDURL + id);
  }

export async function createNewTopic(data) {
  const alldata = {

    GroupNo: data.GroupNo,
	Topic: data.Topic,
	Description: data.Description,	
}

  return await axios.post(createTopicURL,alldata);
}


// export async function Updatetopic(id,data) {
//     const alldata = {
//         topicNo: data.topicNo,
//         topicSuperviser:data.topicSuperviserID ? data.topicSuperviserID : "",
//         topicCoSuperviser: data.topicCoSuperviserID ? data.topicCoSuperviserID:"",
//         topicLeaderID: data.topic_Leader_ITNUM,
//         topicMember1ID: data.topic_Member1_ITNUM,
//         topicMember2ID:data.topic_Member2_ITNUM,
//         topicMember3ID: data.topic_Member3_ITNUM
//     }

//   return await axios.patch(UpdatetopicURL + id,alldata);
// }

// export async function Deletetopic(id) {
//   return await axios.delete(DeletetopicURL + id);
// }



