import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllTemps } from '../../Services/tmpUploadService';

const AllTemps = () => {

    const [songs, setSongs] = useState([])

    const getAllSongs = async () => {
        try {
            const { data } = await getAllTemps();
            setSongs(data.data)
            console.log(data.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllSongs()
    }, [])


    return (
        <div>
            <h1>See All Templates</h1>
            <div className='container' >
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Template Topic</th>
                            <th>Description</th>
                            <th>Template Image</th>
                            <th>Template File</th>
                        </tr>
                    </thead>
                    <tbody>
                            {songs.map((song, index) => (
                              <tr key={index}>  
                                <th scope='row'>{index+1}</th>
                                <td>{song.topic}</td>
                                <td>{song.description}</td>
                                <td><img src={song.img} style={{width:'160px', height:'auto'}} alt='Image not added...'/></td>
                                <td><a className='btn btn-outline-danger' href={song.file}>click here to get the file</a></td>
                            </tr>
                            ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default AllTemps