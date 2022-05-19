import React,{useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Insertuser = () => {

 
    const[cusID , setcusID] = useState("");
    const[cusFullName , setcusFullName] = useState("");
    const[cusAddress , setcusAddress] = useState("");
    const[cusNumber , setcusNumber] = useState("");
    const[cusGender , setcusGender] = useState("");
    const [fileName , setFileName]= useState("");
   


    const onChangeFile = e =>{
      
      setFileName(e.target.files[0]);
      
    }

    
    
   
        const changeOnClick = e =>{
         
            e.preventDefault();
    
    
          const formData = new FormData();
           
          console.log(fileName)
    
          formData.append("cusID" , cusID);
          formData.append("cusFullName" , cusFullName);
          formData.append("cusAddress" , cusAddress);
          formData.append("cusNumber" , cusNumber);
          formData.append("cusGender" , cusGender); 
          formData.append("cusImage" , fileName);


        
        setcusID("");
        setcusFullName("");
        setcusAddress('');
        setcusNumber('');
        setcusGender('');



      

        axios.post("http://localhost:5000/customers/insert/" , formData)
        .then (res =>
         
        alert("Insert Successfull!!")
        (res.data))
        .catch(err =>{
            console.log(err);
        });
     };


    return (
        <div>
          <div>
  <br/><br/><br/><br/><br/>
  <div>
    <center><Link to="/dashboard" className='btn btn-primary'>Visit Dashboard</Link></center>

	
  </div>

  <br/><br/><br/>
          </div>
              <div className="container"
               style={{
                marginTop: "50px",
                width: "50%",
                backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              
              >
             <h1>Add New User </h1>
             
             <form onSubmit={changeOnClick} encType="mltipart/form-data">

  <div class="mb-3">
    <label htmlFor="cusID" class="form-label">cus ID</label>
    <input type="" class="form-control" placeholder="Enter cus ID"
      onChange={(e )=> setcusID(e.target.value)}
       value={cusID} required
    />
  
  </div>

  <div class="mb-3">
    <label htmlFor="cusFullName" class="form-label">cus Full Name</label>
    <input type="" class="form-control" placeholder="Enter cus Name" 
        onChange={e => setcusFullName(e.target.value)} required
        value={cusFullName}/>
  </div>


 <div class="form-group">
    <label htmlFor="cusAddress">cus Address</label>
    <textarea className="form-control"  rows="5"  
        onChange={e => setcusAddress(e.target.value)}
        value={cusAddress} required
        ></textarea>
  </div>

    
  <div class="row mb-4">
    <div class="col">
    <div class="form-outline">
      <label htmlFor="category" class="form-label">cus Number</label>
        <input type="" class="form-control"  placeholder="Enter cus Number" required
        onChange={e => setcusNumber(e.target.value)} 
        value={cusNumber}
        />
        
      </div>
     
    </div>
    <div class="col">
    <div class="form-outline">
          
          <label htmlFor="cusGender" class="form-label">cusGender</label>
              <input type="" list="cusGender" class="form-control" placeholder=" Enter Male or Female" 
                  onChange={e => setcusGender(e.target.value)} required
                  value={cusGender}
                  />
                         <datalist id="cusGender">
                                      <option value="Male"></option>
                                      <option value="Fe male"></option>
                                    
                                  </datalist>
            </div>

    </div>
  </div>
 <div>
  <label htmlFor="file" class="form-label">Upload Any Image</label><br></br>
  <input type="file" class="form-control-file" filename="cusImage" required
  onChange={onChangeFile}
  /><br></br>
    </div>
  
   <div align="center"> 
    <br></br>
    <br></br>
  <button type="submit"  class="btn btn-success">Insert </button><br/>
  </div>

</form>
<br></br>
<div align="right">
    <p></p>
    <br/><br/>
</div >





</div>


</div>
    )
}

export default Insertuser;

