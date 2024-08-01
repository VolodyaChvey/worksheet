import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Row,
  SplitButton,
} from "react-bootstrap";

export default function PagePT() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="linePanel">
        <Col >
          <div className="hover">Previous page</div>
        </Col>
        <Col >
          <div className="hover">Next page</div>
        </Col>
        <Col sm={5}>
          <Row className="lineIntoPanel">
            <Col>
              <SplitButton title={"size"} size="sm" variant="outline-dark">
                <Dropdown.Item eventKey="1" active>
                  A4
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">A5</Dropdown.Item>
              </SplitButton>
            </Col>
            <Col>
              <SplitButton
                title={"orientation"}
                size="sm"
                variant="outline-dark"
              >
                <Dropdown.Item eventKey="1">portrait</Dropdown.Item>
                <Dropdown.Item eventKey="2">landscape</Dropdown.Item>
              </SplitButton>
            </Col>
            <Col>
              <Button size="sm" variant="outline-dark">
                Apply
              </Button>
            </Col>
          </Row>
        </Col>
        <Col >
          <div className="hover">Add new page</div>
        </Col>
        <Col >
          <div className="hover">Delete page</div>
        </Col>
      </Row>
    </>
  );
}
