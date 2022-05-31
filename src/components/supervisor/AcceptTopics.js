import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Getalltopics , updateTopic } from '../../Services/TopicServices';
import { GetByIT } from "../../Services/AuthServices";
import { AuthCustomer } from "../../Services/AuthServices";
import moment from 'moment';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const AcceptTopics = () => {

  const navigate = useNavigate();

  const [topicDetails, settopicDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openModalConfirm, setopenModalConfirm] = useState(false);

  const getAlltopics = async () => {
    try {
      setLoading(true);
      let data = await Getalltopics();
      console.log("all topics", data);
      var array = [];
       data?.data?.map((item) => {
          if(item?.is_accept == null)
          {
            array.push(item);
          }

      })
      settopicDetails(array);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlltopics();
  }, [])


  const columns = [
    {
      name: (<Badge color="dark" style={{ fontSize: "15px" }} >Group ID</Badge>),
      selector: "GroupNo",
      sortable: false,
      wrap: true,
    },
    {
      name: (<Badge color="dark" style={{ fontSize: "15px" }} >Topic</Badge>),
      selector: "Topic",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{data.Topic}<br /></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="dark" style={{ fontSize: "15px" }} >Description</Badge>),
      selector: "Description",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{data.Description}<br /></Label>
        </div>
      ),
    },

    {
      name: (<Badge color="dark" style={{ fontSize: "15px" }} >Date</Badge>),

      cell: ({ date }) => (
        <div>
          <Badge color="secondary">{moment(date).format(" YYYY-MM-DD ")}</Badge>
          <br />
          <Badge color="secondary">{moment(date).format(" h:mm A ")}</Badge>
        </div>
      ),
    },

    {
      name: (<Badge color="dark" style={{ fontSize: "15px" }} ></Badge>),

      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button className="btn btn-warning" style={{ fontSize: "13px" }} onClick={(e)=>OpenAcceptModal(e,data)}><b>Acceptance Of Topic</b></Button>
          
        </div>

      ),
    },

  ];

  const [rowData,setrowData] = useState({});

  const OpenAcceptModal = (e,data)=> {
    e.preventDefault();
    console.log(data);
    setrowData(data);
    setopenModal(true);
  }


  const sendTopicEmail =  (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cjbxevj', 'template_w52m3iw', e.target, 'RHxy3gAoDYBvssyTu')
      .then((result) => {
          console.log(result.text);
          if(rowData.is_accept == true)
          {
            Swal.fire({
              icon: "success",
              title: "Congrats!",
              text: "Topic Accept successfull...!",
            });
            navigate("/dashboard");
          }
          else
          {
            Swal.fire({
              icon: "info",
              title: "Rejected!",
              text: "Topic Reject successfull...!",
            });
            navigate("/dashboard");
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  const [to_name, setto_name] = useState("");
  const [topic, settopic] = useState("");
  const [checked_name, setchecked_name] = useState("");
  const [recieve_email, setrecieve_email] = useState("");
  const [accept_status, setaccept_status] = useState("");


  const RejectTopic = async (e) => {
    e.preventDefault();
    console.log("Reject");
    let token = localStorage.getItem('token');
    let currentUser = await AuthCustomer(token);
    let student = {
      ITnum : rowData.LeaderITNum
    }
    var res =  await GetByIT(student);
    rowData.is_accept = false;
    let data =  await updateTopic(rowData._id,rowData);
    console.log("return data",data);
    if(data?.status == 200)
    {
      setto_name(res?.data?.name);
      settopic(rowData?.Topic);
      setchecked_name(currentUser?.data?.name);
      setrecieve_email(res?.data?.email);
      setaccept_status(rowData.is_accept);
      setopenModalConfirm(true);
    }
    else
    {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Topic Accpet  Failed...!",
      });
    }
    
  }

  const AcceptTopic = async (e) => {
    e.preventDefault();
    console.log("Accept");
    let token = localStorage.getItem('token');
    let currentUser = await AuthCustomer(token);
    let student = {
      ITnum : rowData.LeaderITNum
    }
    var res =  await GetByIT(student);
    rowData.is_accept = true;
    let data =  await updateTopic(rowData._id,rowData);
    console.log("return data",data);
    if(data?.status == 200)
    {
      setto_name(res?.data?.name);
      settopic(rowData?.Topic);
      setchecked_name(currentUser?.data?.name);
      setrecieve_email(res?.data?.email);
      setaccept_status(rowData.is_accept);
      setopenModalConfirm(true);
    }
    else
    {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Topic Accpet  Failed...!",
      });
    }
  }

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "black", fontSize: "30px" }}><b>Register Topic Details</b></CardTitle>
            <Button className="btn btn-success" style={{ fontSize: "13px", marginLeft: "25%" }} href="/accepted-topics"><b>View All Accepted Topics</b></Button>
            <Button className="btn btn-danger" style={{ fontSize: "13px", marginLeft: "25%" }} href="/rejected-topics"><b>View All Rejected Topics</b></Button>
            <br></br>
            <br></br>
          </CardHeader>
          <CardBody>
            <DataTable
              data={topicDetails}
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
            backdrop={true}>
            <ModalHeader
                        toggle={() => {
                  setopenModal(false);
                  }}>
              <Label>Choose one ...</Label>
            </ModalHeader>
            <ModalBody>
              <center>
               <Button color="primary" onClick={(e)=>AcceptTopic(e)}>Accept</Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Button color="warning" onClick={(e)=>RejectTopic(e)}>Reject</Button>
              </center>
            </ModalBody>
          </Modal>
        </div>

        <div>
        <Modal
          isOpen={openModalConfirm}
          className="modal-dialog-centered"
          fade={true}
          backdrop={true}
        >
          <ModalHeader
            toggle={() => {
              setopenModalConfirm(false);
            }}
          >
            <Label>Send Mail</Label>
          </ModalHeader>
          <ModalBody>
            <center>
                <form onSubmit={sendTopicEmail}>
                      <label className="label">Student Name</label>
                      <input className="form-control" type="text" name="to_name"  readOnly
                       value={to_name}/><br/><br/>

                      <label className="label">Name</label>
                      <input  className="form-control" type="text" name="checked_name" readOnly
                       value={checked_name}/><br/><br/>    

                      <label className="label">Topic</label>
                      <input className="form-control" type="text" name="topic" readOnly
                       value={topic}/><br/><br/>

                      <label className="label">Student Mail</label>
                      <input  className="form-control" type="email" name="recieve_email" readOnly
                       value={recieve_email}/><br/><br/>

                      <label className="label">Status</label>
                      <input  className="form-control" type="text" name="accept_status" readOnly
                       value={accept_status == true ? "accepted" : "rejected"}/><br/><br/>                                                                       

                      <button className="btn btn-warning" type="submit" >
                      Send
                      </button>
                </form>    
            </center>
          </ModalBody>
        </Modal>
        </div>

    </div>
  );
};

export default AcceptTopics;
