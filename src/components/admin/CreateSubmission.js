import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Button,
  Col,
  Row,
  Label,
} from "reactstrap";

import { createNewSubmissionType } from "../../Services/SubmissionTypeService";

const CreateSubmission = () => {

  const navigate = useNavigate();

  
  const [subType, setSubType] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");


  const handleSubType = (e) => {
    e.preventDefault();
    setSubType(e.target.value)
  }

  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value)
  }

  const handleDeadline = (e) => {
    e.preventDefault();
    setDeadline(e.target.value)
  }



  const regSubmissionType = async (e) => {
    e.preventDefault();
    var info = [subType, description,deadline]

    const regdata = {
      subType: subType,
      description: description,
      deadline: deadline
     

    }
    console.log("sending data", regdata);
    let data = await createNewSubmissionType(regdata);
    console.log(" submission Type ", data);
    if (data?.status==201) {
      alert("submissionType Insert Successful!");
      navigate("/adminviewsub");

    }
    else {
      alert("submission Type Insert Failed!");
    }
  }

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div >

        <Card className="" style={{ marginLeft: "30px", marginRight: "30px" }}>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>Create Submission Type </CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ width: "600px" }}>
              <Form>
                {/* <Label>Enter Group Number as Follow (REG_(WD/WE)_GroupLeaderITnum)</Label> */}
                <Input type="text" className="input" placeholder="Enter submission type" value={subType} onChange={(e) => handleSubType(e)} />
                <br />
                <textarea type="text" className="form-control" cols="73" rows="2" placeholder="Enter The description" value={description} onChange={(e) => handleDescription(e)} />
                <br />
                <Input type="text" className="input" placeholder="Enter submission type" value={deadline} onChange={(e) => handleDeadline(e)} />
                <br />
                

                <Button className="btn btn-success" onClick={(e) => regSubmissionType(e)} >Submit</Button>
              </Form>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default CreateSubmission;
