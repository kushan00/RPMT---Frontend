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
import { getSupervisorRequests } from "../../Services/AssignSupervisor-Co";
import Swal from "sweetalert2";

const AcceptRequests = () => {

    const sup_id ={};
    const navigate = useNavigate();

    const [requestDetails , setSupervisorReqDetails] = useState({});
    const [loading,setLoading] = useState(false);
    const [openModal , setopenModal] = useState(false);

    const getSupDetails = async () => {
        try{
            setLoading(true);
            let token = localStorage.getItem('token');
            let data = await AuthCustomer(token)
    
            sup_id = data.supervisor_id;

            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
      };

  const getAllSupervisorRequests = async () => {
    try{
        setLoading(true);
        let data = await getSupervisorRequests(sup_id)

        setSupervisorReqDetails(data)
        setLoading(false);
    }catch(error){
        console.log(error);
        setLoading(false);
    }
  };

  useEffect(() => {
    getAllSupervisorRequests();
},[])

  const columns = [
    {
      name: (<Badge color="success" style={{fontSize:"15px"}} >Group registration Number</Badge>),
      selector: "group_regnum",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>{ data.group_regnum}<br/></Label>
        </div>
      ),
    },
    {
        name: (<Badge color="success" style={{fontSize:"15px"}} >Leader IT Number</Badge>),
        selector: "leader_itnum",
        cell: (data) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label>{data.leader_itnum}<br/></Label>
          </div>
        ),
      },
    {
        name: (<Badge color="danger" style={{fontSize:"15px"}} >Actions</Badge>),
        cell: (data ) => (
          <div>
                <Button className="btn btn-warning">Accept</Button>
          </div>
        ),
        sortable: true,
        wrap: true,
    }
  ];



  return (
    <div style={{marginTop:"70px" , marginBottom:"70px"}}>
    <div style={{margin:"10px"}}>
<Card>
<CardHeader>
<CardTitle style={{color:"purple" , fontSize:"30px"}}>Requets for Group Supervisor</CardTitle>
</CardHeader>
<CardBody>
<DataTable 
style={{backgroundColor:"purple"}}
data={requestDetails}
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
      <Label>Select one role to assign</Label>
</ModalHeader>
<ModalBody>

</ModalBody>
</Modal>
</div>
</div>
);

  
};

export default AcceptRequests;
