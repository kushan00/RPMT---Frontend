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
import { getAllSubmissionTypes } from '../../Services/SubmissionTypeService';
import moment from 'moment';


const ViewSubmission = () => {


  const [submissionTypeDetails, setSubmissionTypeDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const GetAllsubmissionTypes = async () => {
    try {
      setLoading(true);
      let data = await getAllSubmissionTypes();
      console.log("all submissionTypes", data);
      let newData = data?.data?.map((item) => {
        return {
         
          subType: item?.subType,
          description: item?.description,
          deadline: item?.deadline,
          _id: item?._id
        }
      })

      setSubmissionTypeDetails(newData);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    GetAllsubmissionTypes();
  }, [])


  const columns = [
    {
      name: (<Badge color="secondary" style={{ fontSize: "15px" }} >Submission Type</Badge>),
      selector: "subType",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{data.subType}<br /></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="secondary" style={{ fontSize: "15px" }} >Description</Badge>),
      selector: "description",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{data.description}<br /></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="secondary" style={{ fontSize: "15px" }} >Deadline</Badge>),
      selector: "deadline",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{data.deadline}<br /></Label>
        </div>
      ),
    },

    {
      // name: (<Badge color="secondary" style={{ fontSize: "15px" }} ></Badge>),
      
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
            
            <Button className="btn btn-success" style={{ fontSize: "13px" }} href={`/add-submission/${data?._id}`}><b> {data.subType} Submission<br /></b></Button>
        </div>
        
      ),
    }, 

    


  ];


  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "black", fontSize: "30px" }}><b>Submission Details</b></CardTitle>
          </CardHeader>
          <CardBody>
            <DataTable
              data={submissionTypeDetails}
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

export default ViewSubmission;
