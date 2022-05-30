import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
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
} from "reactstrap";
import {
  getSupervisorRequests,
  getCoSupervisorRequests,
} from "../../Services/AssignSupervisor-Co";


const AssignedGroups = () => {

  const navigate = useNavigate();


  const [requestDetails, setSupervisorReqDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getSupDetails = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let data = await AuthCustomer(token);
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
        if(item?.is_accept == true)
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
        if(item?.is_accept == true)
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
    {
        name: (
          <Badge color="danger" style={{ fontSize: "15px" }}>
            Action
          </Badge>
        ),
        cell: (data) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button color="warning" href={`/group-selected/${data?.group_regnum}`}>See Group Details</Button>
          </div>
        ),
      },
  ];




  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              Accepted Requests
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

export default AssignedGroups;
