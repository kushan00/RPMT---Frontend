import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
  Table,
  Col,
  Row
} from "reactstrap";
import { getGroupByNo } from "../../Services/GroupServices";
import moment from "moment";

const SelectedGroupDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [seletedGroupData, setseletedGroupData] = useState({});

  let getAssignedGroups = async () => {
    try {
      setLoading(true);
      let item = await getGroupByNo(id);
      console.log("data set", item?.data);
      let newData = {
        GroupNo: item?.data?.res?.GroupNo,
        GroupID: item?.data?.res?._id,
        leader: {
          leaderName: item?.data?.grpleader?.name,
          leaderITnum: item?.data?.grpleader?.ITnumber,
          leaderEmail: item?.data?.grpleader?.email,
          leaderMobileno: item?.data?.grpleader?.mobileno,
        },

        student1: {
          student1Name: item?.data?.grpstudent1?.name,
          student1ITnum: item?.data?.grpstudent1?.ITnumber,
          student1Email: item?.data?.grpstudent1?.email,
          student1Mobileno: item?.data?.grpstudent1?.mobileno,
        },

        student2: {
          student2Name: item?.data?.grpstudent2?.name,
          student2ITnum: item?.data?.grpstudent2?.ITnumber,
          student2Email: item?.data?.grpstudent2?.email,
          student2Mobileno: item?.data?.grpstudent2?.mobileno,
        },

        student3: {
          student3Name: item?.data?.grpstudent3?.name,
          student3ITnum: item?.data?.grpstudent3?.ITnumber,
          student3Email: item?.data?.grpstudent3?.email,
          student3Mobileno: item?.data?.grpstudent3?.mobileno,
        },
        createdAt: item?.data?.res?.date,
      };
      console.log("fixed data", newData);
      setseletedGroupData(newData);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAssignedGroups();
  }, []);




  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              Seleted Group Details
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
            <Col lg="12" md="12">
                <Label style={{ color: "green", fontSize: "25px" }}>group Details</Label>
                <Table responsive striped>
                  <thead></thead>
                  <tbody>    
                    <tr>
                      <td>group Number</td>
                      {seletedGroupData ? (
                        <td>{seletedGroupData.GroupNo}</td>
                      ) : (
                        <td>-------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Created Date</td>
                      {seletedGroupData ? (
                        <td>{moment(seletedGroupData.createdAt).format(" YYYY-MM-DD ")}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>                    
                  </tbody>
                </Table>
              </Col>
              <Col lg="12" md="12">
                <Label style={{ color: "green", fontSize: "25px" }}>Leader Details</Label>
                <Table responsive striped>
                  <thead></thead>
                  <tbody>    
                    <tr>
                      <td>Full Name</td>
                      {seletedGroupData.leader ? (
                        <td>{seletedGroupData.leader.leaderName}</td>
                      ) : (
                        <td>-------</td>
                      )}
                    </tr>
                    <tr>
                      <td>IT Number</td>
                      {seletedGroupData.leader ? (
                        <td>{seletedGroupData.leader.leaderITnum}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Email</td>
                      {seletedGroupData.leader ? (
                        <td> {seletedGroupData.leader.leaderEmail}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      {seletedGroupData.leader ? (
                        <td> {seletedGroupData.leader.leaderMobileno}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    
                  </tbody>
                </Table>
              </Col>
              <Col lg="12" md="12">
                <Label style={{ color: "green", fontSize: "25px" }}>Student 1 Details</Label>
                <Table responsive striped>
                  <thead></thead>
                  <tbody>    
                    <tr>
                      <td>Full Name</td>
                      {seletedGroupData.student1 ? (
                        <td>{seletedGroupData.student1.student1Name}</td>
                      ) : (
                        <td>-------</td>
                      )}
                    </tr>
                    <tr>
                      <td>IT Number</td>
                      {seletedGroupData.student1 ? (
                        <td>{seletedGroupData.student1.student1ITnum}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Email</td>
                      {seletedGroupData.student1 ? (
                        <td> {seletedGroupData.student1.student1Email}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      {seletedGroupData.student1 ? (
                        <td> {seletedGroupData.student1.student1Mobileno}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col lg="12" md="12">
                <Label style={{ color: "green", fontSize: "25px" }}>Student 2 Details</Label>
                <Table responsive striped>
                  <thead></thead>
                  <tbody>    
                    <tr>
                      <td>Full Name</td>
                      {seletedGroupData.student2 ? (
                        <td>{seletedGroupData.student2.student2Name}</td>
                      ) : (
                        <td>-------</td>
                      )}
                    </tr>
                    <tr>
                      <td>IT Number</td>
                      {seletedGroupData.student2 ? (
                        <td>{seletedGroupData.student2.student2ITnum}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Email</td>
                      {seletedGroupData.student2 ? (
                        <td> {seletedGroupData.student2.student2Email}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      {seletedGroupData.student2 ? (
                        <td> {seletedGroupData.student2.student2Mobileno}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col lg="12" md="12">
                <Label style={{ color: "green", fontSize: "25px" }}>Student 3 Details</Label>
                <Table responsive striped>
                  <thead></thead>
                  <tbody>    
                    <tr>
                      <td>Full Name</td>
                      {seletedGroupData.student3 ? (
                        <td>{seletedGroupData.student3.student3Name}</td>
                      ) : (
                        <td>-------</td>
                      )}
                    </tr>
                    <tr>
                      <td>IT Number</td>
                      {seletedGroupData.student3 ? (
                        <td>{seletedGroupData.student3.student3ITnum}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Email</td>
                      {seletedGroupData.student3 ? (
                        <td> {seletedGroupData.student3.student3Email}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      {seletedGroupData.student3 ? (
                        <td> {seletedGroupData.student3.student3Mobileno}</td>
                      ) : (
                        <td>--------</td>
                      )}
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <div>
          <br />
          <Button
            style={{ float: "right" }}
            color="primary"
            onClick={() => {
              navigate("/assigned-groups");
            }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectedGroupDetails;
