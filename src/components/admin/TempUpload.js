import React from 'react'
import { useState } from "react";
import axios from 'axios';
import FileInput from "./FileInput";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { validateMarkingUp } from './Validation';

const TempUpload = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    topic: "",
    description: "",
    file: "",
    img: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    var validate = validateMarkingUp(data);

    if (validate.status == false) {
      alert(validate.message);
    }

    else {
      try {
        const url = "http://localhost:5000/fileupload/uploadfile"
        const { data: res } = await axios.post(url, data);
        console.log(res)

        if (res?.status == 201) {

          Swal.fire({
            icon: 'success',
            title: 'Congrats!',
            text: 'Document Upload successfull...!',
          })
          navigate("/alltemps")
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Document Upload Failed!',
          })
        }
      } catch (error) {

        console.log(error)
      }
    }

  };

  return (
    <div className="container" style={{ width: '30%', }}>
      <form className='form-group' onSubmit={handleSubmit} >
        <h1 >Template upload Form</h1>

        <label style={{ marginTop: '15px' }}>Enter Topic</label>
        <input
          type="text"
          className='form-control'
          //placeholder="Enter Topic"
          name="topic"
          onChange={handleChange}
          value={data.topic}
        />

        <label style={{ marginTop: '15px' }}>Enter Description</label>
        <textarea
          className='form-control'
          //placeholder="Description"
          name="description"
          onChange={handleChange}
          value={data.description}
        />
        <label style={{ marginTop: '15px' }}>Insert Image <span style={{ color: 'red' }}>(optional)</span></label>
        <FileInput
          name="img"
          label="Choose Image"
          handleInputState={handleInputState}
          type="image"
          value={data.img}
        />

        <label style={{ marginTop: '15px' }}>Insert File</label>
        <FileInput
          name="file"
          label="Choose File"
          handleInputState={handleInputState}
          type="file"
          value={data.file}
        />
        <center><button style={{ marginTop: '15px', marginBottom: '15px' }} type="submit" className="btn btn-success" >
          Upload Document
        </button></center>
      </form>
      <div>
        <a className='btn btn-secondary' href='/alltemps'>All Documents</a>&nbsp;
        <a className='btn btn-info' href='/downtmp'>Download Documents std View</a>
      </div>
    </div>
  )
}

export default TempUpload