import { useContext, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { DocumentContext } from "../context";
import { indexOf } from "../data";
import { useNavigate } from "react-router-dom";

export default function LineTopCP({ message, setMessage }) {
  const pageActive = useContext(DocumentContext)[0];
  const document = useContext(DocumentContext)[2];
  const navigate = useNavigate();
  const list = document.pageDtoList;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
    }, 500);
    return () => clearTimeout(timeout);
  }, [message, setMessage]);

  return (
    <Row className="mt-1">
      <Col sm={1}>
        <h6>Document: </h6>
      </Col>
      <Col sm={1}>
        <p>{document.name}</p>
      </Col>
      <Col sm={1}>
        <h6>Page: </h6>
      </Col>
      <Col sm={1}>
        {indexOf({ array: list, obj: pageActive }) + 1} / {list.length}
      </Col>
      <Col sm={7}>{message}</Col>
      <Col sm={1}>
        <Button size="sm" variant="outline-success" onClick={()=>navigate("/")}>
          Save
        </Button>
      </Col>
    </Row>
  );
}
