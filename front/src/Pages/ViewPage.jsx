import { useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function ViewPage() {
  const params = useLoaderData();
  const content = useRef();
  const handelPrint = useReactToPrint({
    content:()=>content.current
  })
  const navigate = useNavigate();


 console.log(params)
  return (
    <>
      <Row className="header py-2 m-2">
        <Col>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Col>
        <Col><Button onClick={handelPrint}>Print</Button></Col>
      </Row>
      <h2>View page</h2>
      <div ref={content}></div>
    </>
  );
}

async function viewPageLoader({params}) {
  
  return params;
}
export { ViewPage, viewPageLoader };
