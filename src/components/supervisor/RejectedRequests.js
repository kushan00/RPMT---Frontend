import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCustomer } from "../../Services/AuthServices";
import DataTable from "react-data-table-component";
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import {
  getSupervisorRequests,
  getCoSupervisorRequests,
  UpdateSuperviserRequests,
  updateCoSuperviserRequests
} from "../../Services/AssignSupervisor-Co";
import { GetByIT } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const RejectedRequests = () => {

  const navigate = useNavigate();

  const [requestDetails, setSupervisorReqDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getSupDetails = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let data = await AuthCustomer(token);
      console.log(data);
      if (data?.data?.userRole == "superviser") {
        getAllSupervisorRequests(data?.data?._id);
      }
      if (data?.data?.userRole == "co_superviser") {
        getAllCoSupervisorRequests(data?.data?._id);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllSupervisorRequests = async (id) => {
    try {
      setLoading(true);
      let data = await getSupervisorRequests(id);
      console.log(data);
      var array = [];
      data?.data?.map((item)=>{
        if(item?.is_accept == false)
        {
          array.push(item);
        }
      })
      setSupervisorReqDetails(array);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllCoSupervisorRequests = async (id) => {
    try {
      setLoading(true);
      let data = await getCoSupervisorRequests(id);
      console.log(data);
      var array = [];
      data?.data?.map((item)=>{
        if(item?.is_accept == false)
        {
          array.push(item);
        }
      })
      setSupervisorReqDetails(array);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSupDetails();
  }, []);



  const columns = [
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Group registration Number
        </Badge>
      ),
      selector: "group_regnum",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.group_regnum }
            <br />
          </Label>
        </div>
      ),
    },
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Leader IT Number
        </Badge>
      ),
      selector: "leader_itnum",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.leader_itnum}
            <br />
          </Label>
        </div>
      ),
    },
 
  ];

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div>
      <Button href="/acceptReq" color="success">New Requests</Button> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
      <Button href="/accepted-requests"  color="warning">Accepted Requests</Button> 
      </div>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              Rejected Requests
            </CardTitle>
          </CardHeader>
          <CardBody>
            <DataTable
              data={requestDetails}
              columns={columns}
              progressPending={loading}
            />
          </CardBody>
        </Card>
      </div>


    </div>
  );
};

export default RejectedRequests;
