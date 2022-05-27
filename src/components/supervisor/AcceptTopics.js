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


const AcceptTopics = () => {


  const [topicDetails, settopicDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const getAlltopics = async () => {
    try {
      setLoading(true);
      let data = await Getalltopics();
      console.log("all topics", data);
      let newData = data?.data?.map((item) => {
        return {

          GroupNo: item?.GroupNo,
          Topic: item?.Topic,
          Description: item?.Description,
          date: item?.date,

        }
      })

      settopicDetails(newData);
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
          <Button className="btn btn-warning" style={{ fontSize: "13px" }} ><b>Acceptance Of Topic</b></Button>
          
        </div>

      ),
    },

  ];


  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "black", fontSize: "30px" }}><b>Register Topic Details</b></CardTitle>
            <Button className="btn btn-success" style={{ fontSize: "13px", marginLeft: "25%" }} href=""><b>Accepted Topics</b></Button>
            <Button className="btn btn-danger" style={{ fontSize: "13px", marginLeft: "25%" }} href=""><b>Rejected Topics</b></Button>
            <br></br>
            <br></br>
          </CardHeader>
          <CardBody>
            <DataTable
              data={topicDetails}
              columns={columns}
              // noHeader
              // pagination
              // paginationServer={paginationServer}
              // paginationComponentOptions={{
              //     rowsPerPageText: "Record Per Page:",
              //     rangeSeparatorText: "of",
              //     selectAllRowsItemText: "All",
              // }}
              // onChangeRowsPerPage={handelRowChange}
              // highlightOnHover
              // paginationPerPage={20}
              // paginationTotalRows={totalCount}
              // paginationDefaultPage={1}
              // onChangePage={handelPageChange}
              // paginationRowsPerPageOptions={[20, 50, 70]}
              // // expandableRows
              // // expandOnRowClicked
              progressPending={loading}
            // progressComponent={<CustomLoader />}
            // expandableRowsComponent={
            //   <ExpandableTable title={title} locationTitle={locationTitle} />
            // }
            />
          </CardBody>
        </Card>
      </div>

      {/* <div>
		  <Modal
		  	isOpen={openModal}
			  className="modal-dialog-centered"
			  fade={true}
			  backdrop={true}>
			  <ModalHeader
			  	          toggle={() => {
							setopenModal(false);
						  }}>
					<Label>Select one role to assign</Label>
			  </ModalHeader>
			  <ModalBody>
					<Button color="primary" onClick={()=>assignStaffRole("superviser")}>Superviser</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button color="warning" onClick={()=>assignStaffRole("co_superviser")}>Co Superviser</Button>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button color="success" onClick={()=>assignStaffRole("panel_member")}>Panel Member</Button>
			  </ModalBody>
		  </Modal>
	  </div> */}
    </div>
  );
};

export default AcceptTopics;
