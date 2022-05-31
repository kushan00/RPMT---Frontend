import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSubmissions } from '../../Services/SubmissionService';

const MarksPage = () => {

    const [marks, setMarks] = useState([])

    const getAllMarks = async () => {
        try {
            const { data } = await getSubmissions();
            setMarks(data.data)
            console.log(data.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllMarks()
    }, [])

    const [searchTerm, setSearchTerm] = useState();

    return (
        <div>
            <h1>Final Marks</h1>
            <div className='container' >
                
                    <center><div className='card' style={{ width: '500px', backgroundColor:'#99ddff' }}>
                        <div className='card-header'>Search Your Group ID Here...</div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input style={{ width: '200px', marginLeft:'30px', marginTop:'15px' }}
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                name="searchQuery"
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }} />
                        </div>
                        <table style={{ width: '400px', marginLeft:'30px' }} className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Group Number</th>
                                    <th>Final Mark</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {marks.filter((submission) => {
                                    if (searchTerm == "") {
                                        return submission;
                                    } else if (submission.groupNo.includes(searchTerm)) {
                                        return submission;
                                    }
                                }).map((submission, index) => (
                                    <tr key={index}>
                                        <td>{submission.groupNo}</td>
                                        <td>{submission.comment == null ? "Marks not allocated " : submission.comment + "%"}</td>
                                        <td>This is the Final Mark for your <b style={{ color: 'red' }}>{submission.topic}</b></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div></center>
                

                <table className='table' style={{ marginTop: '50px' }}>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Group Number</th>
                            <th>Leader's IT Number</th>
                            <th>Final Mark</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((submission, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{submission.groupNo}</td>
                                <td>{submission.itNo}</td>
                                <td>{submission.comment == null ? "Marks not allocated " : submission.comment + "%"}</td>
                                <td>This is the Final Mark for your <b style={{ color: 'red' }}>{submission.topic}</b></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default MarksPage