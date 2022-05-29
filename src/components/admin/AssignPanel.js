import React , {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { 
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
 } from "reactstrap";
import { GetallGroups } from '../../Services/GroupServices';
import { GetallUsers } from "../../Services/AuthServices";
import { createNewGroupPanel } from '../../Services/GroupPanelServices';
import moment from 'moment';
import Select from "react-select";
import Swal from 'sweetalert2';

const AssignPanel = () => {

    
  const navigate = useNavigate();

  const [groupDetails , setgroupDetails] = useState({});
  const [loading,setLoading] = useState(false);

  let getAllGroups = async () => {
    try {
      setLoading(true);
        let { data } = await GetallGroups();
        console.log("retured data", data);
        let newData = data?.map((item) => {
          return {
            GroupNo: item?.res?.GroupNo,
            GroupID:item?.res?._id,
            leader:{
              leaderName:item?.grpleader?.name,
              leaderITnum:item?.grpleader?.ITnumber,
              leaderEmail:item?.grpleader?.email,
              leaderMobileno:item?.grpleader?.mobileno,
            },

            student1 : {
              student1Name:item?.grpstudent1?.name,
              student1ITnum:item?.grpstudent1?.ITnumber,
              student1Email:item?.grpstudent1?.email,
              student1Mobileno:item?.grpstudent1?.mobileno,
            },

            student2 : {
              student2Name:item?.grpstudent2?.name,
              student2ITnum:item?.grpstudent2?.ITnumber,
              student2Email:item?.grpstudent2?.email,
              student2Mobileno:item?.grpstudent2?.mobileno,
            },

            student3 : {
              student3Name:item?.grpstudent3?.name,
              student3ITnum:item?.grpstudent3?.ITnumber,
              student3Email:item?.grpstudent3?.email,
              student3Mobileno:item?.grpstudent3?.mobileno,
            },

            // cosuperviser:{
            //   cosuperviserName:item?.cosuperviserdetails?.name ? item?.cosuperviserdetails?.name : "Not Assigned yet",
            //   cosuperviserITnum:item?.cosuperviserdetails?.ITnumber ? item?.cosuperviserdetails?.ITnumber : "Not Assigned yet",
            //   cosuperviserEmail:item?.cosuperviserdetails?.email ? item?.cosuperviserdetails?.email : "Not Assigned yet",
            //   cosuperviserMobileno:item?.cosuperviserdetails?.mobileno ? item?.cosuperviserdetails?.mobileno : "Not Assigned yet",
            // },

            // superviser:{
            //   superviserName:item?.superviserdetails?.name  ? item?.superviserdetails?.name : "Not Assigned yet",
            //   superviserITnum:item?.superviserdetails?.ITnumber  ?  item?.superviserdetails?.ITnumber : "Not Assigned yet",
            //   superviserEmail:item?.superviserdetails?.email  ? item?.superviserdetails?.email  : "Not Assigned yet",
            //   superviserMobileno:item?.superviserdetails?.mobileno  ? item?.superviserdetails?.mobileno : "Not Assigned yet",
            // },
            createdAt: item.date,
          };
        });
        console.log("fixed data",newData);
       setgroupDetails(newData);
       setLoading(false);
       
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [PanelMember1Details, setPanelMember1Details] = useState({});
  const [PanelMember2Details, setPanelMember2Details] = useState({});
  const [PanelMember3Details, setPanelMember3Details] = useState({});
  const [PanelMember4Details, setPanelMember4Details] = useState({});

  const [PanelMember1Data, setPanelMember1Data] = useState({
    PanelMember1: "",
  });

  let { PanelMember1 } = PanelMember1Data;

  const [PanelMember2Data, setPanelMember2Data] = useState({
    PanelMember2: "",
  });

  let {  PanelMember2 } = PanelMember2Data;

  const [PanelMember3Data, setPanelMember3Data] = useState({
    PanelMember3: "",
  });

  let {  PanelMember3 } = PanelMember3Data;

  const [PanelMember4Data, setPanelMember4Data] = useState({
    PanelMember4: "",
  });

  let {PanelMember4 } = PanelMember4Data;

  const getAllPanelMembers1 = async () => {
        try {
        let data = await GetallUsers();
        let array = [];
        data?.data?.map((item) => {
            if (item?.userRole == "panel_member") {
            array.push(item);
            }
        });
        let newData = array?.map((item) => {
                return {
                value: item._id,
                label: item.name,             
                userRole: item.userRole,
                name:"PanelMember1"
            };
        });
        setPanelMember1Details(newData);
        } catch (error) {
        console.log(error);
        setLoading(false);
        }
    };

    const getAllPanelMembers2 = async () => {
        try {
        let data = await GetallUsers();
        let array = [];
        data?.data?.map((item) => {
            if (item?.userRole == "panel_member") {
            array.push(item);
            }
        });
        let newData = array?.map((item) => {
                return {
                value: item._id,
                label: item.name,             
                userRole: item.userRole,
                name:"PanelMember2"
            };
        });
        setPanelMember2Details(newData);
        } catch (error) {
        console.log(error);
        setLoading(false);
        }
    };

    const getAllPanelMembers3 = async () => {
        try {
        let data = await GetallUsers();
        let array = [];
        data?.data?.map((item) => {
            if (item?.userRole == "panel_member") {
            array.push(item);
            }
        });
        let newData = array?.map((item) => {
                return {
                value: item._id,
                label: item.name,             
                userRole: item.userRole,
                name:"PanelMember3"
            };
        });
        setPanelMember3Details(newData);
        } catch (error) {
        console.log(error);
        setLoading(false);
        }
    };

    const getAllPanelMembers4 = async () => {
        try {
        let data = await GetallUsers();
        let array = [];
        data?.data?.map((item) => {
            if (item?.userRole == "panel_member") {
            array.push(item);
            }
        });
        let newData = array?.map((item) => {
                return {
                value: item._id,
                label: item.name,             
                userRole: item.userRole,
                name:"PanelMember4"
            };
        });
        setPanelMember4Details(newData);
        } catch (error) {
        console.log(error);
        setLoading(false);
        }
    };


     useEffect(() => {
      getAllGroups();
      getAllPanelMembers1();
      getAllPanelMembers2();
      getAllPanelMembers3();
      getAllPanelMembers4();
     }, [])


  const columns = [
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Group Number</Badge>),
      selector: "GroupNo",
      sortable: false,
      wrap: true,
    },
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Leader details</Badge>),
      selector: "leader",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label><Badge color="success"> Name :</Badge>{data.leader.leaderName}<br/></Label>
          <Label><Badge color="success"> IT Number : </Badge>{data.leader.leaderITnum}<br/></Label>
          <Label><Badge color="success"> Email : </Badge>{data.leader.leaderEmail}<br/></Label>
          <Label><Badge color="success"> Mobile Number :</Badge>{data.leader.leaderMobileno}<br/></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Member 1 details</Badge>),
      selector: "student1",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label><Badge color="warning"> Name : </Badge>{data.student1.student1Name}<br/></Label>
          <Label><Badge color="warning"> IT Number : </Badge>{data.student1.student1ITnum}<br/></Label>
          <Label><Badge color="warning"> Email : </Badge>{data.student1.student1Email}<br/></Label>
          <Label><Badge color="warning"> Mobile Number :</Badge>{data.student1.student1Mobileno}<br/></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Member 2 details</Badge>),
      selector: "student2",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label><Badge color="warning"> Name : </Badge>{data.student2.student2Name}<br/></Label>
          <Label><Badge color="warning"> IT Number : </Badge>{data.student2.student2ITnum}<br/></Label>
          <Label><Badge color="warning"> Email : </Badge>{data.student2.student2Email}<br/></Label>
          <Label><Badge color="warning"> Mobile Number :</Badge>{data.student2.student2Mobileno}<br/></Label>
        </div>
      ),
    },
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Member 3 details</Badge>),
      selector: "student3",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label><Badge color="warning"> Name : </Badge>{data.student3.student3Name}<br/></Label>
          <Label><Badge color="warning"> IT Number : </Badge>{data.student3.student3ITnum}<br/></Label>
          <Label><Badge color="warning"> Email : </Badge>{data.student3.student3Email}<br/></Label>
          <Label><Badge color="warning"> Mobile Number :</Badge>{data.student3.student3Mobileno}<br/></Label>
        </div>
      ),
    },
    // {
    //   name: (<Badge color="primary" style={{fontSize:"15px"}} >Superviser details</Badge>),
    //   selector: "superviser",
    //   cell: (data) => (
    //     <div style={{ display: "flex", flexDirection: "column" }}>
    //       <Label><Badge color="danger"> Name : </Badge>{data.superviser.superviserName}<br/></Label>
    //       <Label><Badge color="danger"> Email : </Badge>{data.superviser.superviserEmail}<br/></Label>
    //       <Label><Badge color="danger"> Mobile Number :</Badge>{data.superviser.superviserMobileno}<br/></Label>
    //     </div>
    //   ),
    // },
    // {
    //   name: (<Badge color="primary" style={{fontSize:"15px"}} >Co Superviser details</Badge>),
    //   selector: "cosuperviser",
    //   cell: (data) => (
    //     <div style={{ display: "flex", flexDirection: "column" }}>
    //       <Label><Badge color="danger"> Name : </Badge>{data.cosuperviser.cosuperviserName}<br/></Label>
    //       <Label><Badge color="danger"> Email : </Badge>{data.cosuperviser.cosuperviserEmail}<br/></Label>
    //       <Label><Badge color="danger"> Mobile Number :</Badge>{data.cosuperviser.cosuperviserMobileno}<br/></Label>
    //     </div>
    //   ),
    // },
    {
      name: (<Badge color="primary" style={{fontSize:"15px"}} >Created At</Badge>),
      //selector: "createdAt",
      //selector: row => `${ moment(row.createdAt).format(" MM-DD-YYYY ") }  ${ moment(row.createdAt).format(" h:mm a ") }`,
      cell: ({ createdAt }) => (
        <div>
          <Badge color="success">{moment(createdAt).format(" YYYY-MM-DD ")}</Badge>
          <br />
          <Badge color="primary">{moment(createdAt).format(" h:mm A ")}</Badge>
        </div>
      ),
      sortable: true,
      wrap: true,
    },
    {
        name: (<Badge color="primary" style={{fontSize:"15px"}} >Assign</Badge>),
        selector: "Action",
        cell: (data) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
                <Button color="warning" onClick={(e)=>AssignPanelMembers(e,data)}>Assign Panel Members</Button>
          </div>
        ),
      },
  ];

  let handelPanelMember1SelectorChange = (e) => {
    console.log(e);
    setPanelMember1Data({ ...PanelMember1Data, [e.name]: e });
  };

  let handelPanelMember2SelectorChange = (e) => {
    console.log(e);
    setPanelMember2Data({ ...PanelMember2Data, [e.name]: e });
  };

  let handelPanelMember3SelectorChange = (e) => {
    console.log(e);
    setPanelMember3Data({ ...PanelMember3Data, [e.name]: e });
  };

  let handelPanelMember4SelectorChange = (e) => {
    console.log(e);
    setPanelMember4Data({ ...PanelMember4Data, [e.name]: e });
  };

  const [selectedRow,setselectedRow]= useState({});
  const [openModal,setopenModal]=useState(false);
  const [GroupNo,setGroupNo]=useState(false);

  const AssignPanelMembers = (e,data) =>{
    e.preventDefault();
    setselectedRow(data);
    setGroupNo(data?.GroupNo)
    setopenModal(true);
  }

  const createNewPanel = async (e) => {
      e.preventDefault();
      var dataset = {
        GroupNo:GroupNo,
        GroupID:selectedRow.GroupID,
        PanelMember1ID:PanelMember1.value,
        PanelMember2ID:PanelMember2.value,
        PanelMember3ID:PanelMember3.value,
        PanelMember4ID:PanelMember4.value,
      }
      console.log("final data set ",dataset);
      let data = await createNewGroupPanel(dataset);
      console.log("return data",data);
      if (data?.status == 201)
      {
        Swal.fire({
            icon: 'success',
            title: 'Congrats!',
            text: 'Group Panel  Assign successfull...!',
          })
        navigate("/dashboard");
      }
      else
      {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Panel Assign  Failed...!',
          })
      }

  }


  return (
    <div style={{marginTop:"70px" , marginBottom:"70px"}}>
      <div>

      </div>
      <div style={{margin:"10px"}}>
      <Card>
        <CardHeader>
            <CardTitle style={{color:"purple" , fontSize:"30px"}}>All Group Details</CardTitle>
        </CardHeader>
      <CardBody>
      <DataTable 
        style={{backgroundColor:"purple"}}
        data={groupDetails}
        columns={columns}
        progressPending={loading}
      />
      </CardBody>
    </Card>
      </div>

    {/*  assign Panel members */}
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
            <Label>Enter Details</Label>
          </ModalHeader>
          <ModalBody>
            <div style={{ width: "400px" }}>
                  <Form>
                    <Label>Selected Group ID</Label>
                    <Input type="text" className="input" placeholder="Enter Group Number " value={GroupNo} readOnly/>
                    <br/>
                       <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="Select Panel Member 1"
                      options={PanelMember1Details}
                      value={PanelMember1}
                      onChange={(data) => handelPanelMember1SelectorChange(data)}
                      name="PanelMember1"
                    />
                    <br/>
                    <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="Select Panel Member 2"
                      options={PanelMember2Details}
                      value={PanelMember2}
                      onChange={(data) => handelPanelMember2SelectorChange(data)}
                      name="PanelMember2"
                    />
                    <br/>
                    <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="Select Panel Member 3"
                      options={PanelMember3Details}
                      value={PanelMember3}
                      onChange={(data) => handelPanelMember3SelectorChange(data)}
                      name="PanelMember3"
                    />
                    <br/>
                    <Select
                      className="React"
                      classNamePrefix="select"
                      placeholder="Select Panel Member 4"
                      options={PanelMember4Details}
                      value={PanelMember4}
                      onChange={(data) => handelPanelMember4SelectorChange(data)}
                      name="PanelMember4"
                    />
                    <br/>
                    <Button className="btn btn-success" onClick={(e)=>createNewPanel(e)}>Assign</Button>
                  </Form>
                </div>
          </ModalBody>
        </Modal>
      </div>

    </div>
  )
}

export default AssignPanel