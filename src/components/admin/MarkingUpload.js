import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FileInput from "./MarkingInput";

const MarkingUpload = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    topic: "",
    file: ""
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/marking/uploadmarking"
      const { data: res } = await axios.post(url, data);
      console.log(res)

      if (res?.status == 201) {

        Swal.fire({
          icon: 'success',
          title: 'Congrats!',
          text: 'Document Upload successfull...!',
        })
        // navigate("/alltemps")
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
  };

  return (
    <div>
      <h1>Upload Marking Scheme</h1>

      <div className='container' style={{ width: '30%', }}>
        <form className='form-group' onSubmit={handleSubmit} >
          <label>Topic</label>
          <input
            type='text'
            className='form-control'
            name='topic'
            onChange={handleChange}
            value={data.topic}
          />

          <label style={{ marginTop: '15px' }}>Marking Scheme File</label>
          <FileInput
            name="file"
            label="Choose File"
            handleInputState={handleInputState}
            type="file"
            value={data.file}
          />

          <center>
            <button style={{ marginTop: '15px', marginBottom: '15px' }} type="submit" className="btn btn-success" >
              Upload Document
            </button>
          </center>
        </form>
        <div>
          <a className='btn btn-secondary' href='/markingsche'>All Markings</a>&nbsp;
        </div>
      </div>
    </div>
  )
}

export default MarkingUpload