import { useLoaderData, useNavigate } from "react-router-dom";
import Get from "../Controllers/Get";
import { Button, Col, Row } from "react-bootstrap";
function StartPage() {
  const documents = useLoaderData();
  const navigate = useNavigate();
  
  console.log(documents)
  return (
    <>
      <Row className="my-3">
        <Col></Col>
        <Col>
          <Button onClick={() => navigate("/createDocument")}>Create</Button>
        </Col>
      </Row>
      {documents.length === 0 ? <h3>Not found any documents</h3> : null}
      <h2>Start page</h2>
    </>
  );
}

async function getAllDocuments() {
  return await Get({ path: "/documents" });
}
async function startPageLoader() {
  return await getAllDocuments();
}

export { StartPage, startPageLoader };
