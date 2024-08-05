import { useContext } from "react";
import "./Page.css";
import { DocumentContext, PageContext } from "../../context";
import { Col, Row } from "react-bootstrap";

export default function Page() {
 // const pageActive = useContext(DocumentContext)[0];
  const pContext = useContext(PageContext);
  const styles = pContext[3].size + pContext[3].orientation;

  return (
    <>
      <Row className="justify-content-center">
        <Col sm={2}>
          <h6>{pContext[3].size}</h6>
        </Col>
        <Col sm={2}>
          <h6>{pContext[3].orientation}</h6>
        </Col>
      </Row>
      <div className={"paper " + styles}></div>
    </>
  );
}
