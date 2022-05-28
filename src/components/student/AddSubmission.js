import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AddSubmission = () => {

  const {id} = useParams();

  return (
    <div>AddSubmission</div>
  )
}

export default AddSubmission