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

import { Link, useNavigate, useParams } from "react-router-dom";
import { updateSubmissionType } from "../../Services/SubmissionTypeService";
import { getSubmissionTypeByID } from "../../Services/SubmissionTypeService";

const UpdateSubmission = () => {

    const navigate = useNavigate();

    const { id } = useParams();


    const [subType, setSubType] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");



    const handleSubType = (e) => {
        setSubType(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleDeadline = (e) => {
        setDeadline(e.target.value);
    };


    const GetSubmissionData = async () => {
        let data = await getSubmissionTypeByID(id);
        console.log("Update Submissions", data);
        setSubType(data?.data?.subType);
        setDescription(data?.data?.description);
        setDeadline(data?.data?.deadline);

    }


    useEffect(() => {
        GetSubmissionData();
    }, [])

    const UpdateSubmissionData = async (e) => {
        e.preventDefault();
        let newdata = {
            subType: subType,
            description: description,
            deadline: deadline,
        }
        let data = await updateSubmissionType(id, newdata);
        console.log("Update ", data);
        if (data?.status == 200) {
  
            Swal.fire({
				icon: 'success',
				title: 'Successful!',
				text: 'Submission type updated!',
			  })
            navigate("/adminViewsub");
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
                        <CardTitle style={{ color: "purple", fontSize: "30px" }}>Update Submission Type </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div style={{ width: "600px" }}>
                            <Form>
                   
                                <Input type="text" className="input" placeholder="Enter submission type" value={subType} onChange={(e) => handleSubType(e)} />
                                <br />
                                <textarea type="text" className="form-control" cols="73" rows="2" placeholder="Enter The description" value={description} onChange={(e) => handleDescription(e)} />
                                <br />
                                <Input type="text" className="input" placeholder="Enter submission type" value={deadline} onChange={(e) => handleDeadline(e)} />
                                <br />

                               
                                <Button className="btn btn-success"  onClick={(e) => UpdateSubmissionData(e)}>Update</Button>
                            </Form>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
};

export default UpdateSubmission;
