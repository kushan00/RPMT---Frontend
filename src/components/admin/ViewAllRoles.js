import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetallUsers , UpdateAdmin } from "../../Services/AuthServices";
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
import moment from 'moment';


const ViewAllRoles = () => {

	const navigate = useNavigate();

	const [staffDetails , setstaffDetails] = useState({});
	const [loading,setLoading] = useState(false);
	const [openModal , setopenModal] = useState(false);
	const [staffData,setstaffData] = useState({});

	const getAllStaff = async () => {
		try{
			setLoading(true);
			let data =  await GetallUsers();
			console.log("all staff",data);
			let newData  = data?.data?.map((item) => {
				return {
						Full_Name:item?.name,
						Email:item?.email,
						mobileno:item?.mobileno,
						date:item?.date,
						password:item?.password,
						userRole:item?.userRole,
						StaffID:item?._id	
				}
			})

			setstaffDetails(newData);
			setLoading(false);
		}catch(error){
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		getAllStaff();
	},[])

	// const assignStaff = (data) => {
	// 	console.log("selected staff data",data);
	// 	setstaffData(data);
	// 	setopenModal(true);
	// }

	// const assignStaffRole = async (role) => {
	// 	const alldata = {
	// 		name:staffData.Full_Name,
	// 		mobileno:staffData.mobileno,
	// 		email:staffData.Email,
	// 		password:staffData.password,
	// 		ITnumber:"",
	// 		userRole:role
	// 	};
	//   console.log("New data",alldata);
	//   let data = await UpdateAdmin(staffData.StaffID,alldata);
	//   console.log("return",data);
	//   if(data?.status == 200)
	//   {
	// 	  alert("User Role Update Successfull..!");
	// 	  window.location.reload();
	//   }
	//   else
	//   {
	// 	  alert("Update Failed..!");
	//   }
	// }
	
	const columns = [
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} >Full Name</Badge>),
		  selector: "Full_Name",
		  sortable: false,
		  wrap: true,
		},
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} >Email</Badge>),
		  selector: "Email",
		  cell: (data) => (
			<div style={{ display: "flex", flexDirection: "column" }}>
			  <Label>{ data.Email}<br/></Label>
			</div>
		  ),
		},
		{
			name: (<Badge color="success" style={{fontSize:"15px"}} >Mobile Number</Badge>),
			selector: "Mobile No",
			cell: (data) => (
			  <div style={{ display: "flex", flexDirection: "column" }}>
				<Label>{data.mobileno}<br/></Label>
			  </div>
			),
		},
        {
			name: (<Badge color="success" style={{fontSize:"15px"}} >User Role</Badge>),
			selector: "User Role",
			cell: (data) => (
			  <div style={{ display: "flex", flexDirection: "column" }}>
				<Label>{data.userRole}<br/></Label>
			  </div>
			),
		},
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} >Date</Badge>),
		  //selector: "createdAt",
		  //selector: row => `${ moment(row.createdAt).format(" MM-DD-YYYY ") }  ${ moment(row.createdAt).format(" h:mm a ") }`,
		  cell: ({ date }) => (
			<div>
			  <Badge color="success">{moment(date).format(" YYYY-MM-DD ")}</Badge>
			  <br />
			  <Badge color="primary">{moment(date).format(" h:mm A ")}</Badge>
			</div>
		  ),
		},
		// {
		// 	name: (<Badge color="danger" style={{fontSize:"15px"}} >Actions</Badge>),
		// 	cell: (data ) => (
		// 	  <div>
		// 		  	<Button className="btn btn-warning" onClick={()=>assignStaff(data)}>Delete</Button>
		// 	  </div>
		// 	),
		// 	sortable: true,
		// 	wrap: true,
		// }
	  ];
	





	return (
		<div style={{marginTop:"70px" , marginBottom:"70px"}}>
			      <div style={{margin:"10px"}}>
      <Card>
        <CardHeader>
            <CardTitle style={{color:"purple" , fontSize:"30px"}}>Staff Details</CardTitle>
        </CardHeader>
      <CardBody>
      <DataTable 
        data={staffDetails}
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

export default ViewAllRoles;
