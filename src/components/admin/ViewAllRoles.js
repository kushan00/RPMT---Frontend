import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetallUsers, DeleteAdmin } from "../../Services/AuthServices";
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
import moment from "moment";
import Swal from "sweetalert2";

const ViewAllRoles = () => {
  const navigate = useNavigate();

  const [staffDetails, setstaffDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const [superviserDetails, setsuperviserDetails] = useState({});
  const [cosuperviserDetails, setcosuperviserDetails] = useState({});
  const [panelmemberDetails, setpanelmemberDetails] = useState({});

  const getAllStudent = async () => {
    try {
      setLoading(true);
      let data = await GetallUsers();
      console.log("all staff", data);
      let array = [];
      data?.data?.map((item) => {
        if (item?.userRole == "student" && item?.name != "staff") {
          array.push(item);
        }
      });
      let newData = array.map((item) => {
        return {
          Full_Name: item?.name,
          Email: item?.email,
          mobileno: item?.mobileno,
          date: item?.date,
          password: item?.password,
          userRole: item?.userRole,
          StaffID: item?._id,
        };
      });

      setstaffDetails(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllSuperviser = async () => {
    try {
      setLoading(true);
      let data = await GetallUsers();
      console.log("all staff", data);
      let array = [];
      data?.data?.map((item) => {
        if (item?.userRole == "superviser" && item?.name != "staff") {
          array.push(item);
        }
      });
      let newData = array.map((item) => {
        return {
          Full_Name: item?.name,
          Email: item?.email,
          mobileno: item?.mobileno,
          date: item?.date,
          password: item?.password,
          userRole: item?.userRole,
          StaffID: item?._id,
        };
      });

      setsuperviserDetails(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllCoSuperviser = async () => {
    try {
      setLoading(true);
      let data = await GetallUsers();
      console.log("all staff", data);
      let array = [];
      data?.data?.map((item) => {
        if (item?.userRole == "co_superviser" && item?.name != "staff") {
          array.push(item);
        }
      });
      let newData = array.map((item) => {
        return {
          Full_Name: item?.name,
          Email: item?.email,
          mobileno: item?.mobileno,
          date: item?.date,
          password: item?.password,
          userRole: item?.userRole,
          StaffID: item?._id,
        };
      });

      setcosuperviserDetails(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllPanelMember = async () => {
    try {
      setLoading(true);
      let data = await GetallUsers();
      console.log("all staff", data);
      let array = [];
      data?.data?.map((item) => {
        if (item?.userRole == "panel_member" && item?.name != "staff") {
          array.push(item);
        }
      });
      let newData = array.map((item) => {
        return {
          Full_Name: item?.name,
          Email: item?.email,
          mobileno: item?.mobileno,
          date: item?.date,
          password: item?.password,
          userRole: item?.userRole,
          StaffID: item?._id,
        };
      });

      setpanelmemberDetails(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStudent();
    getAllSuperviser();
    getAllCoSuperviser();
    getAllPanelMember();
  }, []);

  const deleteRowData = async (id) => {
    let data = await DeleteAdmin(id);
    console.log("return", data);
    if (data?.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Successful!",
        text: "Delete successfull...!",
      });
      getAllStudent();
      getAllSuperviser();
      getAllCoSuperviser();
      getAllPanelMember();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed!",
      });
    }
  };

  const columns = [
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Full Name
        </Badge>
      ),
      selector: "Full_Name",
      sortable: false,
      wrap: true,
    },
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Email
        </Badge>
      ),
      selector: "Email",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.Email}
            <br />
          </Label>
        </div>
      ),
    },
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Mobile Number
        </Badge>
      ),
      selector: "Mobile No",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.mobileno}
            <br />
          </Label>
        </div>
      ),
    },
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          User Role
        </Badge>
      ),
      selector: "User Role",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.userRole}
            <br />
          </Label>
        </div>
      ),
    },
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Date
        </Badge>
      ),
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
    {
      name: (
        <Badge color="danger" style={{ fontSize: "15px" }}>
          Actions
        </Badge>
      ),
      cell: (data) => (
        <div>
          <Button
            className="btn btn-warning"
           	href={`/updateUser/${data?.StaffID}`}
          >
            Update
          </Button>
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            className="btn btn-danger"
            onClick={() => deleteRowData(data?.StaffID)}
          >
            Delete
          </Button>
        </div>
      ),
      sortable: true,
      wrap: true,
    },
  ];

  const [showstudent, setshowstudent] = useState(true);
  const [showsuperviser, setshowsuperviser] = useState(false);
  const [showcosuperviser, setshowcosuperviser] = useState(false);
  const [showpanelmember, setshowpanelmember] = useState(false);

  const showstudentbtn = (e) => {
    e.preventDefault();
    setshowstudent(true);
    setshowsuperviser(false);
    setshowcosuperviser(false);
    setshowpanelmember(false);
  };

  const showsuperviserbtn = (e) => {
    e.preventDefault();
    setshowstudent(false);
    setshowsuperviser(true);
    setshowcosuperviser(false);
    setshowpanelmember(false);
  };

  const showcosuperviserbtn = (e) => {
    e.preventDefault();
    setshowstudent(false);
    setshowsuperviser(false);
    setshowcosuperviser(true);
    setshowpanelmember(false);
  };

  const showpanelmemberbtn = (e) => {
    e.preventDefault();
    setshowstudent(false);
    setshowsuperviser(false);
    setshowcosuperviser(false);
    setshowpanelmember(true);
  };

  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <div>
          <Button color="primary" onClick={(e) => showstudentbtn(e)}>
            Student
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="success" onClick={(e) => showsuperviserbtn(e)}>
            Superviser
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="warning" onClick={(e) => showcosuperviserbtn(e)}>
            Co Superviser
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="danger" onClick={(e) => showpanelmemberbtn(e)}>
            Panel Member
          </Button>
          <br />
          <br />
        </div>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              All User Details
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ display: showstudent ? "flex" : "none" }}>
              <DataTable
                data={staffDetails}
                columns={columns}
                progressPending={loading}
              />
            </div>
            <div style={{ display: showsuperviser ? "flex" : "none" }}>
              <DataTable
                data={superviserDetails}
                columns={columns}
                progressPending={loading}
              />
            </div>
            <div style={{ display: showcosuperviser ? "flex" : "none" }}>
              <DataTable
                data={cosuperviserDetails}
                columns={columns}
                progressPending={loading}
              />
            </div>
            <div style={{ display: showpanelmember ? "flex" : "none" }}>
              <DataTable
                data={panelmemberDetails}
                columns={columns}
                progressPending={loading}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ViewAllRoles;
