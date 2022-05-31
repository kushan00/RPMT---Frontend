import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
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
} from "reactstrap";
import { getGroupPanelByUserID } from "../../Services/GroupPanelServices";


const AssignedGroupsPM = () => {

  const navigate = useNavigate();


  const [selectedGroups, setselectedGroups] = useState({});
  const [loading, setLoading] = useState(false);

  const getSupDetails = async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let data = await AuthCustomer(token);
 
        getAllPanelMemberGroups(data?.data?._id);
      

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getAllPanelMemberGroups = async (id) => {
    try {
      setLoading(true);
      let data = await getGroupPanelByUserID(id);
      console.log("return Data",data?.data);
      var array = [];
      data?.data?.PanelMember1?.map((item)=>{
          array.push({GroupNo:item.GroupNo});
      })
      data?.data?.PanelMember2?.map((item)=>{
        array.push({GroupNo:item.GroupNo});
      })
      data?.data?.PanelMember3?.map((item)=>{
        array.push({GroupNo:item.GroupNo});
      })
      data?.data?.PanelMember4?.map((item)=>{
        array.push({GroupNo:item.GroupNo});
      })
      console.log("Group Names",array);
      setselectedGroups(array);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };



  useEffect(() => {
    getSupDetails();
  }, []);




  const columns = [
    {
      name: (
        <Badge color="success" style={{ fontSize: "15px" }}>
          Group registration Number
        </Badge>
      ),
      selector: "group_regnum",
      cell: (data) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>
            {data.GroupNo }
            <br />
          </Label>
        </div>
      ),
    },
    {
        name: (
          <Badge color="danger" style={{ fontSize: "15px" }}>
            Action
          </Badge>
        ),
        cell: (data) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button color="warning" href={`/group-selected/${data?.GroupNo}`}>See Group Details</Button>
          </div>
        ),
      },
  ];




  return (
    <div style={{ marginTop: "70px", marginBottom: "70px" }}>
      <div style={{ margin: "10px" }}>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "purple", fontSize: "30px" }}>
              Assigned Groups
            </CardTitle>
          </CardHeader>
          <CardBody>
            <DataTable
              data={selectedGroups}
              columns={columns}
              progressPending={loading}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AssignedGroupsPM;
