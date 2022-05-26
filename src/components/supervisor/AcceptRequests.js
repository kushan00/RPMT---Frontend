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
import Swal from "sweetalert2";

const AcceptRequests = () => {

  const navigate = useNavigate();

  const [requestDetails, setSupervisorReqDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [openModal, setopenModal] = useState(false);

  const [UserRole, setUserRole] = useState(false);
  const getSupDetails = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let data = await AuthCustomer(token);
      setUserRole(data?.data?.userRole);
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
      setSupervisorReqDetails(data?.data);
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
      setSupervisorReqDetails(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSupDetails();
  }, []);

  const [rowData,setrowData] = useState({});


  const acceptTopic = async (e) =>{
    setopenModal(false);
    rowData.is_accept = true;
    if(UserRole == "superviser")
    {
      let data =  await UpdateSuperviserRequests(rowData._id,rowData);
      console.log("data",data);
      if(data?.status == 200)
      {
        Swal.fire({
          icon: "success",
          title: "Congrats!",
          text: "Accept successfull...!",
        });
        navigate("/dashboard");
      }
      else
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Accpet  Failed...!",
        });
      }
    }
    if(UserRole == "co_superviser")
    {
      let data =  await updateCoSuperviserRequests(rowData._id,rowData);
      console.log("data",data);
      if(data?.status == 200)
      {
        Swal.fire({
          icon: "success",
          title: "Congrats!",
          text: "Accept successfull...!",
        });
        navigate("/dashboard");
      }
      else
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Accpet  Failed...!",
        });
      }
    }

  }

  const rejectTopic = async (e) =>{
    setopenModal(false);
    rowData.is_accept = false;
    if(UserRole == "superviser")
    {
      let data =  await UpdateSuperviserRequests(rowData._id,rowData);
      console.log("data",data);
      if(data?.status == 200)
      {
        Swal.fire({
          icon: "info",
          title: "Rejected!",
          text: "Reject successfull...!",
        });
        navigate("/dashboard");
      }
      else
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Reject  Failed...!",
        });
      }
    }
    if(UserRole == "co_superviser")
    {
      let data =  await updateCoSuperviserRequests(rowData._id,rowData);
      console.log("data",data);
      if(data?.status == 200)
      {
        Swal.fire({
          icon: "info",
          title: "Rejected!",
          text: "Reject successfull...!",
        });
        navigate("/dashboard");
      }
      else
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Reject  Failed...!",
        });
      }
    }
  }

  const ModalOpen = (e,data)=>{
    e.preventDefault();
    setrowData(data);
    setopenModal(true);
  }

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
          Actions
        </Badge>
      ),
      cell: (data) => (
        <div>
          <Button className="btn btn-warning" onClick={(e)=>ModalOpen(e,data)}>Accept</Button>
        </div>
      ),
      sortable: true,
      wrap: true,
    },
  ];

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              Requets for Group Supervisor
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

      <div>
        <Modal
          isOpen={openModal}
          className="modal-dialog-centered"
          fade={true}
          backdrop={true}
        >
          <ModalHeader
            toggle={() => {
              setopenModal(false);
            }}
          >
            <Label>Select one... </Label>
          </ModalHeader>
          <ModalBody>
            <center>
           <Button color="success" onClick={(e)=>acceptTopic(e)}>Accept</Button>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button color="danger" onClick={(e)=>rejectTopic(e)}>Reject</Button>
           </center>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default AcceptRequests;
