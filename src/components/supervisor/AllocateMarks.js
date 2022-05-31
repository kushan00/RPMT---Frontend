import React, { useEffect } from 'react'
import { getSubmissionSpecific, updateSubmission } from '../../Services/SubmissionService'
import { useParams } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FileInput from "../student/SubmissionInput";

const AllocateMarks = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const [data, setData] = useState({
        groupNo: "",
        itNo: "",
        topic: "",
        comment: "",
        
    });

    const getType = async () => {
        let data = await getSubmissionSpecific(id);
        console.log("data", data);
        setData({
            ...data, "groupNo": data?.data?.file?.groupNo,
            "itNo": data?.data?.file?.itNo,
            "topic": data?.data?.file?.topic,
            "file": data?.data?.file?.file,
            "comment": "Marks : " + data?.data?.file?.comment ,
            
        });
    }

    useEffect(() => {
        getType();
    }, [])

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            let res  = await updateSubmission(data?.data?.file?._id, data);
            console.log("updated data",res)

            if (res?.status == 200) {

                Swal.fire({
                    icon: 'success',
                    title: 'Congrats!',
                    text: 'Allocating Marks successfull...!',
                })
                navigate("/seesubmissions")
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Allocating Marks Failed!',
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
                        disabled='true'
                    />

                    <label style={{ marginTop: '15px' }}>Group Leader's IT Number</label>
                    <input
                        type="text"
                        className='form-control'
                        //placeholder="Enter Topic"
                        name="itNo"
                        onChange={handleChange}
                        value={data.itNo}
                        disabled='true'
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

                    <label style={{ marginTop: '15px' }}>Comments <span style={{ color: 'red' }}>(Add the Mark Here...)</span></label>
                    <textarea
                        className='form-control'
                        //placeholder="Description"
                        name="comment"
                        rows='2'
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

export default AllocateMarks