import {  Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ViewPage() {
  const navigate = useNavigate();
  return (
    <>
      <Row className="header py-2 m-2">
        <Col><Button onClick={()=>navigate(-1)}>Go back</Button></Col>
        <Col></Col>
      </Row>
      <h2>View page</h2>
    </>
  );
}
