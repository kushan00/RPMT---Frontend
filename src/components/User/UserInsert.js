import React  from 'react';
import {useState ,useEffect }from 'react'
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import {Link ,Redirect} from "react-router-dom";


const UserInsert =  () => { 


  //const navigate = useNavigate()

            const [user , setuser] = useState({
              cusID:"",
              cusFullName:"",
              cusAddress:"",
              cusNumber:"",
              cusGender:""
            })

            const [isDisabled, setIsDisabled] = useState(false);
          
            //get input changes to these variables
            const handleChange = e =>{
              const {name , value } = e.target
              setuser({
                  ...user,
                  [name]:value
              })
              if(name==='cusNumber')
              {
                if(user.cusNumber.length === 11)
                {
                  setIsDisabled(!isDisabled)
                }
              }
            }

            const validatephone=(str)=>{
              const regexPhoneNumber = /^(?:7|0|(?:\+94))[0-9]{9,10}$/i ; 
  
              if (str.match(regexPhoneNumber)) {
                return true;
              } else {
                return false;
              }

            }

            //calling the backend route api 
            const AddUser =()=>{
              const phone = validatephone(user.userNumber);//execute validate phone function and get the return value
              
              console.log(phone)
              // console.log(typeof(user.userNumber))
              if(user.cusAddress.length <= 10)
              {
                  alert("User Address should not be empty or less than 10 characters")
              }
              else
              {
                  if(user.cusFullName.length <= 10)
                  {
                      alert("User Full Name should not be empty or less than 10 characters")
                  }
                  else
                  {
                      if(user.cusID.length == 0)
                      {
                          alert("User Id should not be empty")
                      }
                      else
                      {
                          if(user.cusGender.length >= 7)
                          {
                              alert("Please Enter male or female")
                          }
                          else
                          {
                              if(phone == false)
                              {
                                  const num = "+947 13 233 876";
                                  alert(`Please Enter valid phone number as given ${num}`)
                              }
                              else
                              {
                                console.log(user)
              
                                  axios.post("http://localhost:5000/customers/",user)
                                                          .then(res=>{
                                                              alert("data Inserted Successfull")                                                          
                                                              console.log(user)
                                                              
                                                          })
                                                          .catch(err=>console.log(err))
                                        
                              }
                          }
                      }
                  }
              }
            }


  return (
        <div >
<br/><br/><br/><br/>
          <div>

                <div className="container border"
          style={{
            marginTop: "50px",
            width: "50%",
            backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}> 
          <div>
          <center >
            <b style={{fontSize:"48px" , textDecoration:"underline"}}> Add New User  </b>
          </center>
          </div><br/><br/>
                <input type="text" style={{width:"100%"}} name="cusID" value={user.cusID} onChange={handleChange} placeholder="Enter user ID"></input><br/><br/>
                <input type="text" style={{width:"100%"}} name="cusFullName" value={user.cusFullName} onChange={handleChange}  placeholder="Enter your Name" ></input><br/><br/>
                <input type="text" style={{width:"100%"}} name="cusAddress" value={user.cusAddress} onChange={handleChange}  placeholder="Enter your Address" ></input><br/><br/>
                <input type="text" disabled={isDisabled}  style={{width:"100%"}} name="cusNumber" value={user.cusNumber} onChange={handleChange}  placeholder="Enter your Number" ></input><br/><br/>
                <input type="text" style={{width:"100%"}} name="cusGender" value={user.cusGender} onChange={handleChange}  placeholder="Enter your Gender" ></input><br/><br/>
                <center><div className="btn btn-success" onClick={AddUser}>Add User</div></center><br/>
  
                </div>
        </div>
        </div>
  )
}

export default UserInsert;
