import { Col, Row } from "react-bootstrap";

export default function LineTopCP({ document ,pageActive}) {
  return (
    <Row className="mt-1" >
      <Col sm={1}><h6>Document: </h6></Col>
      <Col sm={1}><p>{document.name}</p></Col>
      <Col sm={1}><h6>Page: </h6></Col>
      <Col sm={1}>{pageActive} / {document.pageDtoList.length}</Col>
      <Col sm={8}></Col>
    </Row>
  );
}
