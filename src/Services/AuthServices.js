import axios from 'axios';
import {StartUrl} from "../configs/Url.json";


let RegisterURL = StartUrl + "user/signup";
let LoginURL = StartUrl + "user/signin";
let AuthURL = StartUrl + "user/auth";
let getAllUsers = StartUrl + "user/getAllUsers";
let CreateUser = StartUrl + "user/createUser";
let UpdateUser = StartUrl + "user/updateUserById/";
let DeleteUser = StartUrl + "user/deleteUser/";

let getByITNum = StartUrl + "user/getUserByITNum/";

export async function RegisterStudent(data) {
    const alldata = {
        name:data.name,
        mobileno:data.mobileno,
        ITnumber:data.ITnumber,
        email:data.email,
        password:data.password,
        userRole:"student"
    };

    return await axios.post(RegisterURL,alldata);
}


export async function LoginCustomer(data) {
    const alldata = {
        email:data.email,
        password:data.password,
    };
    
    return await axios.post(LoginURL,alldata);
}

export async function AuthCustomer(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallUsers(){
  return axios.get(getAllUsers);
}

export async function CreateAdmin(data) {
  const alldata = {
      name:data.name,
      mobileno:data.mobileno,
      email:data.email,
      ITnumber:data.ITnumer,
      password:data.password,
      userRole:data.userRole
  };

  return await axios.post(CreateUser,alldata);
}


export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      mobileno:data.mobileno,
      email:data.email,
      password:data.password,
      ITnumber:data.ITnumber,
      userRole:data.userRole
  };

  return await axios.patch(UpdateUser + id,alldata);
}

export async function DeleteAdmin(id) {
  return await axios.delete(DeleteUser + id);
}



export async function GetByIT(data) {
  
  let  ITnum =data.ITnum
  
  console.log(ITnum);
  return await axios.get(getByITNum + ITnum);
}