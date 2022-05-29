import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const DownloadTemp = () => {

  const [templates, setTemplates] = useState([])

  const getAllTemps = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/fileupload/allfiles")
      setTemplates(data.data)
      console.log(data.data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllTemps()
  }, [])


  return (
    <div className='container'>
      <section class="cards" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>

        {templates.map((song) => (
          <article class="card" style={{ flex: '0 1 24%', borderWidth: '2px', marginBottom: '20px' }}>
            <img src={song.img} alt='No Image Added...' style={{ width: '100%', height: 'auto' }} />
            <h4>{song.topic}</h4>
            <p>{song.description}</p>
            <a className='btn btn-warning' href={song.file}>Download Template</a>
          </article>
        ))}


      </section>
    </div>
  )
}

export default DownloadTemp