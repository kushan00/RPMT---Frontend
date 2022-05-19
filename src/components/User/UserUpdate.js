import React  from 'react';
import {useState ,useEffect }from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import {Link } from "react-router-dom";

const UserUpdate =  () => { 


   // const navigate = useNavigate()


    const[cusID, setcusID] = useState("");
    const[cusFullName , setcusFullName] = useState("");
    const[cusAddress, setcusAddress] = useState("");
    const[cusNumber, setcusNumber] = useState("");
    const[cusGender, setcusGender] = useState("");
    

    const id = useParams();
    //const id =JSON.stringify(oid);

    console.log(id.id)

    const [user , setuser] = useState({
        cusID:"",
        cusFullName:"",
        cusAddress:"",
        cusNumber:"",
        cusGender:""
      })
///^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
      const validatephone=(str)=>{
        const regexPhoneNumber = /^(?:7|0|(?:\+94))[0-9]{9,10}$/i ; 
       
        if (str.match(regexPhoneNumber)) {
          return true;
        } else {
          return false;
        }

      }

    const changeOnClick = e =>{
        e.preventDefault();
   
       
        const formData = new FormData();
   
        formData.append("cusID",cusID);
        formData.append("cusFullName",cusFullName);
        formData.append("cusAddress",cusAddress);
        formData.append("cusNumber",cusNumber);
        formData.append("cusGender",cusGender); 
   
        setcusID("");
        setcusFullName("");
        setcusAddress("");
        setcusNumber("");
        setcusGender("");
        
        console.log(formData.get('cusID')); 

      
            user.cusID=formData.get('cusID');
            user.cusFullName=formData.get('cusFullName');
            user.cusAddress=formData.get('cusAddress');
            user.cusNumber=formData.get('cusNumber');
            user.cusGender=formData.get('cusGender');
            
 
         console.log(user);

         //validations
         const phone = validatephone(user.cusNumber);//execute validate phone function and get the return value

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
                            if(user.cusGender.length >= "7")
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
                                    console.log(id.id)
                                    axios.put(`http://localhost:5000/customers/update/${id.id}`,user)
                                    .then(res=>
                                        alert("Update Successfull!!"),
                                        )
                                    .catch(err=>{
                                        alert("update failed")
                                        console.log(err);
                                    });
                                          
                                }
                            }
                        }
                    }
                }
                     
    };
   




    useEffect(()=>{
     axios.get(`http://localhost:5000/customers/find/${id.id}`)
     .then(res=>[
         setcusID(res.data.cusID),
         setcusFullName(res.data.cusFullName),
         setcusAddress(res.data.cusAddress),
         setcusNumber(res.data.cusNumber),
         setcusGender(res.data.cusGender),
 
     ])
     .catch(err => console.log(err));
   },[]);

        return (
            <div>
              <br/><br/><br/><br/>
               <div
          className="container border"
          style={{
            marginTop: "50px",
            width: "50%",
            backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
              <center> 
                  <h1>Update The User Details </h1>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
    
                <br/>
               
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="userID">User Id</label><br/>
                <input type="text" 
                 onChange={e => setcusID(e.target.value)}
              
                value={cusID}
                className="form-control"  
                placeholder="User Id" />
    
    
                </div>
    
                <br/>
    
              <div className="form-group col-md-6">
                <label htmlFor="userFullName ">User Full Name</label><br/>
                <input type="text"
                onChange={e => setcusFullName(e.target.value)}
              
                 value={cusFullName}
                className="form-control"  
                placeholder="Enter full name" />
                </div>
            </div>
    
                <br/>
    
            <div className="form-group col-md-6">
                <label htmlFor="userAddress">user Address</label><br/>
                <input type="text"
                 onChange={e => setcusAddress(e.target.value)}
               
                value={cusAddress}
                className="form-control"  
                placeholder="user Address" />
              </div>
    
              <br/>
    
              <div className="form-group col-md-6">
                <label htmlFor="userAddress">user Number</label><br/>
                <input type="text"
                onChange={e => setcusNumber(e.target.value)}
               
                value={cusNumber} 
                className="form-control"  
                placeholder="user Number" />
              </div>
    
              <br/>
    
              <div className="form-group col-md-6">
                <label htmlFor="userGender">user Gender</label><br/>
                <input type="text" 
                 onChange={e => setcusGender(e.target.value)} 
               
                value={cusGender}
                className="form-control"  
                placeholder="user Gender" />
              </div>
    
                <br/>

            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </center>
        
          </div>
          </div>
  )
}
export default UserUpdate;