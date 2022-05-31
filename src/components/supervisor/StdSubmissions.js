import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSubmissions } from '../../Services/SubmissionService';

const StdSubmissions = () => {

    const [subs, setSubs] = useState([])

    const getAllSubs = async () => {
        try {
            const { data } = await getSubmissions();
            setSubs(data.data)
            console.log(data.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllSubs()
    }, [])


    return (
        <div>
            <h1>See All Student Submissions</h1>
            <div className='container' >
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Group Number</th>
                            <th>Leader's IUT Number</th>
                            <th>Topic</th>
                            <th>Submission File</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subs.map((submission, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{submission.groupNo}</td>
                                <td>{submission.itNo}</td>
                                <td>{submission.topic}</td>
                                <td><a className='btn btn-outline-danger' href={submission.file}>click here to get the file</a></td>
                                <td>{submission.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default StdSubmissions