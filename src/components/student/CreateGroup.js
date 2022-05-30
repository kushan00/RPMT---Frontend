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
import { GetByIT } from "../../Services/AuthServices";
import { createNewGroup } from "../../Services/GroupServices";
import Swal from 'sweetalert2';
import { ValidateCreateGrp } from "./Validation";

const CreateGroup = () => {

  const navigate = useNavigate();

  const [GroupNo, setGroupNo] = useState("");
  const [Group_Leader_ITNUM, setGroup_Leader_ITNUM] = useState("");
  const [Group_Member1_ITNUM, setGroup_Member1_ITNUM] = useState("");
  const [Group_Member2_ITNUM, setGroup_Member2_ITNUM] = useState("");
  const [Group_Member3_ITNUM, setGroup_Member3_ITNUM] = useState("");


  const handleGroupNo = (e) => {
    e.preventDefault();
    setGroupNo(e.target.value)
  }

  const handleGroup_Leader_ITNUM = (e) => {
    e.preventDefault();
    setGroup_Leader_ITNUM(e.target.value)
  }

  const handleGroup_Member1_ITNUM = (e) => {
    e.preventDefault();
    setGroup_Member1_ITNUM(e.target.value)
  }

  const handleGroup_Member2_ITNUM = (e) => {
    e.preventDefault();
    setGroup_Member2_ITNUM(e.target.value)
  }

  const handleGroup_Member3_ITNUM = (e) => {
    e.preventDefault();
    setGroup_Member3_ITNUM(e.target.value)
  }

  const regGroup = async (e) => {
    e.preventDefault();

    const dataset = {
      GroupNo: GroupNo,
      Group_Leader_ITNUM: Group_Leader_ITNUM,
      Group_Member1_ITNUM: Group_Member1_ITNUM,
      Group_Member2_ITNUM: Group_Member2_ITNUM,
      Group_Member3_ITNUM: Group_Member3_ITNUM,
    }
    let validate = ValidateCreateGrp(dataset);

    if (validate.status == false) {
      alert(validate.message);
    }

    else {
      var numbers = [Group_Leader_ITNUM, Group_Member1_ITNUM, Group_Member2_ITNUM, Group_Member3_ITNUM]
      for (var i = 0; i < 4; i++) {
        const ITdata = {
          ITnum: numbers[i],
        }
        let data = await GetByIT(ITdata);
        console.log("data", data?.data?._id);
        if (data?.data?._id) {
          numbers[i] = data?.data?._id;
        }
        else {
          alert(`${number[i]} IT Number Is not Valid`);
        }
      }

      const regdata = {
        GroupNo: GroupNo,
        Group_Leader_ITNUM: numbers[0],
        Group_Member1_ITNUM: numbers[1],
        Group_Member2_ITNUM: numbers[2],
        Group_Member3_ITNUM: numbers[3],
      }

      console.log("sending data", regdata);
      let data = await createNewGroup(regdata);
      console.log("Reg Group ", data);
      if (data?.data?._id) {
        Swal.fire({
          icon: 'success',
          title: 'Congrats!',
          text: 'Group Registration successfull...!',
        })
        navigate("/dashboard");
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration Failed...!',
        })
      }
    }

  }


  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div >

        <Card className="" style={{ marginLeft: "30px", marginRight: "30px" }}>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>Register Group</CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ width: "600px" }}>
              <Form>
                <Label>Enter Group Number as Follow (REG_(WD/WE)_GroupLeaderITnum)</Label>
                <Input type="text" className="input" placeholder="Enter Group Number " value={GroupNo} onChange={(e) => handleGroupNo(e)} />
                <br />
                <Input type="text" className="input" placeholder="Enter Group Leader IT Number" value={Group_Leader_ITNUM} onChange={(e) => handleGroup_Leader_ITNUM(e)} />
                <br />
                <Input type="text" className="input" placeholder="Enter Member 1 IT Number " value={Group_Member1_ITNUM} onChange={(e) => handleGroup_Member1_ITNUM(e)} />
                <br />
                <Input type="text" className="input" placeholder="Enter Member 2 IT Number" value={Group_Member2_ITNUM} onChange={(e) => handleGroup_Member2_ITNUM(e)} />
                <br />
                <Input type="text" className="input" placeholder="Enter Member 3 IT Number" value={Group_Member3_ITNUM} onChange={(e) => handleGroup_Member3_ITNUM(e)} />
                <br />
                <Button className="btn btn-success" onClick={(e) => regGroup(e)} >Register</Button>
              </Form>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default CreateGroup;
