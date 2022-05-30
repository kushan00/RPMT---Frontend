import React , {useState,useEffect} from 'react'
import DataTable from "react-data-table-component";
import { 
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
 } from "reactstrap";
import { GetallGroups } from '../../Services/GroupServices';
import moment from 'moment';

const StdGroups = () => {

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


     useEffect(() => {
      getAllGroups();
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
  ];



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
    </div>
  )
}

export default StdGroups