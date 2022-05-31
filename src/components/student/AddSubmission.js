import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';
import FileInput from "./SubmissionInput";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import {getSubmissionTypeByID} from "../../Services/SubmissionTypeService"
import { uploadSub } from '../../Services/SubmissionService';

const AddSubmission = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    groupNo: "",
    itNo: "",
    file: "",
    topic: "",
    comment: "",
  });

  const getType = async () => {
    let data = await getSubmissionTypeByID(id);
    console.log("data",data);
    setData({...data,"topic":data?.data?.subType});
  }

  useEffect(() => {
    getType();
  },[])

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data: res } = await uploadSub(data);
      console.log(res)

      if (res?.status == 201) {

        Swal.fire({
          icon: 'success',
          title: 'Congrats!',
          text: 'Document Upload successfull...!',
        })
        //navigate("/alltemps")
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
      <h1>Upload Your Submission Here</h1>

      <div className='container' style={{ width: '30%', }}>
        <form className='form-group' onSubmit={handleSubmit} >
          <label style={{ marginTop: '15px' }}>Group Number</label>
          <input
            type="text"
            className='form-control'
            //placeholder="Enter Topic"
            name="groupNo"
            onChange={handleChange}
            value={data.groupNo}
          />

          <label style={{ marginTop: '15px' }}>Group Leader's IT Number</label>
          <input
            type="text"
            className='form-control'
            //placeholder="Enter Topic"
            name="itNo"
            onChange={handleChange}
            value={data.itNo}
          />
          <label style={{ marginTop: '15px' }}>Topic</label>
          <input
            type="text"
            className='form-control'
            //placeholder="Enter Topic"
            name="topic"
            onChange={handleChange}
            value={data.topic}
            disabled='true'
          />
          <label style={{ marginTop: '15px' }}>Add Your Submission Here</label>
          <FileInput
            name="file"
            label="Choose Image"
            handleInputState={handleInputState}
            type="file"
            value={data.file}
          />

          <label style={{ marginTop: '15px' }}>Comments <span style={{ color: 'red' }}>(optional)</span></label>
          <textarea
            className='form-control'
            //placeholder="Description"
            name="comment"
            onChange={handleChange}
            value={data.comment}
          />

          <center>
            <button style={{ marginTop: '15px', marginBottom: '15px' }} type="submit" className="btn btn-success" >
              Upload Submission
            </button>
          </center>
        </form>
      </div>
    </div>
  )
}

export default AddSubmission