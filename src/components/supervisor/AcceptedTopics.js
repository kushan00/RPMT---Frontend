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
import { Getalltopics } from '../../Services/TopicServices';
import moment from 'moment';


const AcceptedTopics = () => {

  const navigate = useNavigate();

  const [topicDetails, settopicDetails] = useState({});
  const [loading, setLoading] = useState(false);


  const getAlltopics = async () => {
    try {
      setLoading(true);
      let data = await Getalltopics();
      console.log("all topics", data);
      var array = [];
       data?.data?.map((item) => {
          if(item?.is_accept == true)
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



  ];



  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "black", fontSize: "30px" }}><b>Accepted Topic Details</b></CardTitle>
            <Button className="btn btn-info" style={{ fontSize: "13px", marginLeft: "40%" }} href="/actopics"><b>View Registered Topics</b></Button>
            
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

    
 

    </div>
  );
};

export default AcceptedTopics;
