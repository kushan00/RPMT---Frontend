import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Col,
  Row,
} from "reactstrap";

const CreateGroup = () => {
  return (
    <div style={{marginTop:"70px" , marginBottom:"70px"}}>
      <div>

            <Card className="">
              <CardHeader>
                <CardTitle>Register Group</CardTitle>
              </CardHeader>
              <CardBody>
                <div>
                  <Form>
                    <Input type="text" className="input" value="Group Leader" />
                  </Form>
                </div>
              </CardBody>
            </Card>

      </div>
    </div>
  );
};

export default CreateGroup;
