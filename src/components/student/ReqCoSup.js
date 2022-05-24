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
  Form,
  Input,
	Label,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
   } from "reactstrap";
import { AssignCoSupervisor } from "../../Services/AssignSupervisor-Co";
import Swal from 'sweetalert2';


const ReqCoSup = () => {
  const navigate = useNavigate();

  const[Group_Leader_ITNUM,setGroup_Leader_ITNUM]=useState("");
  const[Group_Reg_NUM,setGroupNo]=useState("");

  const handleGroup_Leader_ITNUM = (e) => {
    e.preventDefault();
    setGroup_Leader_ITNUM(e.target.value)
  }

  const handleGroup_Reg_Num = (e) => {
    e.preventDefault();
    setGroupNo(e.target.value)
  }


	const [staffDetails , setstaffDetails] = useState({});
	const [loading,setLoading] = useState(false);
	const [openModal , setopenModal] = useState(false);
	const [staffData,setstaffData] = useState({});

	const requestCoSupervisor = async (e) => {

		const data ={
			supervisor_id: staffData.StaffID,
			leader_itnum: Group_Leader_ITNUM,
			group_regnum: Group_Reg_NUM,
		}
		let response = await AssignCoSupervisor(data);
		console.log("Superviser reg ", response);
		if(response?.status == 201)
		{
			Swal.fire({
				icon: 'success',
				title: 'Congrats!',
				text: 'Request successfull...!',
			  })
			getAllStaff();
			setopenModal(false);
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Request Failed!',
			  })
		}
	}
  
	const getAllStaff = async () => {
		try{
			setLoading(true);
			let data =  await GetallUsers();
			console.log("all staff",data);
			let array = [];
			data?.data?.map((item) => {
				if(item?.userRole == "co_superviser")
				{
					array.push(item);
				}
			})
			let newData  = array?.map((item) => {
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

	const assignStaff = (data) => {
		setGroup_Leader_ITNUM("");
		setGroupNo("");
		setstaffData(data);
		setopenModal(true);
	}

	
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
			name: (<Badge color="danger" style={{fontSize:"15px"}} >Actions</Badge>),
			cell: (data ) => (
			  <div>
				  	<Button className="btn btn-warning" onClick={()=>assignStaff(data)}>Request</Button>
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
    <CardTitle style={{color:"purple" , fontSize:"30px"}}>Request Co-Supervisor</CardTitle>
</CardHeader>
<CardBody>
<DataTable 
style={{backgroundColor:"purple"}}
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
  <Label>Enter Details</Label>
</ModalHeader>
<ModalBody>
<div style={{width:"400px"}}> 
                  <Form>
                    <Label>Group Leader IT Number </Label>
                    <Input type="text" className="input" placeholder="Leader IT Number" value={Group_Leader_ITNUM} onChange={(e)=>handleGroup_Leader_ITNUM(e)}/>
                    <br/>
                    <Label>Group Registration Number </Label>
                    <Input type="text" className="input" placeholder="Group Registration Number" value={Group_Reg_NUM} onChange={(e)=>handleGroup_Reg_Num(e)}/>
                    <br/>
                    <Button className="btn btn-success" onClick={(e)=>requestCoSupervisor(e)}>Request</Button>
                  </Form>
</div>
</ModalBody>
</Modal>
</div>
</div>
);
};

export default ReqCoSup

