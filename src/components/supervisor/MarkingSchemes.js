import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const MarkingSchemes = () => {

  const [markings, setMarkings] = useState([])

  const getAllMarkings = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/marking/allmarkings")
      setMarkings(data.data)
      console.log(data.data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllMarkings()
  }, [])


  return (
    <div>
      <h1>Marking Schemes</h1>

      <div className='container'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>#</th>
              <th>Topic</th>
              <th>Marking Scheme</th>
            </tr>
          </thead>
          <tbody>
            {markings.map((marking, index) => (
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>{marking.topic}</td>
                <td><a className='btn btn-danger btn-sm' href={marking.file}>click here to get the file</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MarkingSchemes