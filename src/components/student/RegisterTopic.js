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
import Swal from 'sweetalert2';

import { createNewTopic } from "../../Services/TopicServices";

const RegisterTopic = () => {

  const navigate = useNavigate();

  const [GroupNo, setGroupNo] = useState("");
  const [Topic, setTopic] = useState("");
  const [Description, setDescription] = useState("");
  const [LeaderITNum,setLeaderITNum] = useState("");


  const handleGroupNo = (e) => {
    e.preventDefault();
    setGroupNo(e.target.value)
  }

  const handleTopic = (e) => {
    e.preventDefault();
    setTopic(e.target.value)
  }

  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value)
  }

  const handleLeaderITNum = (e) => {
    e.preventDefault();
    setLeaderITNum(e.target.value)
  }



  const regTopic = async (e) => {
    e.preventDefault();
    const regdata = {
      GroupNo: GroupNo,
      Topic:Topic ,
      Description: Description,
      LeaderITNum: LeaderITNum

    }
    console.log("sending data", regdata);
    let data = await createNewTopic(regdata);
    console.log("Register Topic ", data);
    if (data?.status==201) {
      Swal.fire({
				icon: 'success',
				title: 'Successful!',
				text: 'Topic registered',
			  })
      navigate("/dashboard");

    }
    else {
      Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Failed!',
			  })
    }
  }

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div >

        <Card className="" style={{ marginLeft: "30px", marginRight: "30px" }}>
          <CardHeader>
            <CardTitle style={{ color: "black", fontSize: "30px" }}><b>Research Topic Registration</b></CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ width: "600px" }}>
              <Form>
                {/* <Label>Enter Group Number as Follow (REG_(WD/WE)_GroupLeaderITnum)</Label> */}
                <Input type="text" className="input" placeholder="Enter Group Number " required value={GroupNo} onChange={(e) => handleGroupNo(e) } />
                <br />
                <Input type="text" className="input" placeholder="Enter Leader IT Number " required value={LeaderITNum} onChange={(e) => handleLeaderITNum(e) } />
                <br/>
                <textarea type="text" className="form-control" cols="73" rows="2" required placeholder="Enter The Topic" value={Topic} onChange={(e) => handleTopic(e)} />
                <br />
                <textarea type="text" className="form-control" cols="73" rows="4" required placeholder="Enter The Description" value={Description} onChange={(e) => handleDescription(e)} />
                <br />
                

                <Button className="btn btn-success" onClick={(e) => regTopic(e)} >Submit</Button>
              </Form>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default RegisterTopic;
