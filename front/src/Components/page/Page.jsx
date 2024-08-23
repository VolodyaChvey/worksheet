import { useContext } from "react";
import "./Page.css";
import { PageContext } from "../../context";
import { Col, Row } from "react-bootstrap";

export default function Page() {
  const page = useContext(PageContext)[3];
  const styles = page.size + page.orientation;

  return (
    <>
      <Row className="justify-content-center">
        <Col sm={2}>
          <h6>{page.size}</h6>
        </Col>
        <Col sm={2}>
          <h6>{page.orientation}</h6>
        </Col>
      </Row>
      <div className={"paper " + styles}></div>
    </>
  );
}
