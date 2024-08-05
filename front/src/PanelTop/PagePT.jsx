import { useContext } from "react";
import {
  Button,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  SplitButton,
  Tooltip,
} from "react-bootstrap";
import { DocumentContext, PageContext } from "../context";

export default function PagePT() {
  const [pageActive, setPageActive, document] = useContext(DocumentContext);
  const [onApply, onAdd, onDelete, pageShow, setPageShow] =
    useContext(PageContext);
  const list = document.pageDtoList;
  const lonely =list.length === 1;


  function onSize(value) {
    setPageShow({ ...pageShow, size: value });
  }
  function onOrientation(value) {
    setPageShow({ ...pageShow, orientation: value });
  }
  function onPrevious(){

  }
  function onNext(){

  }

  return (
    <>
      <Row className="linePanel">
        <Col>
          <Button variant="link" onClick={onPrevious} disabled={list.length>0&&list.indexOf(pageActive)>0}>Previous</Button>
        </Col>
        <Col>
          <Button variant="link" onClick={onNext}>Next</Button>
        </Col>
        <Col sm={5}>
          <Row className="lineIntoPanel">
            <Col>
              <SplitButton title={"size"} size="sm" variant="outline-dark">
                <Dropdown.Item eventKey="1" onClick={() => onSize("A4")}>
                  A4
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={() => onSize("A5")}>
                  A5
                </Dropdown.Item>
              </SplitButton>
            </Col>
            <Col>
              <SplitButton
                title={"orientation"}
                size="sm"
                variant="outline-dark"
              >
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => onOrientation("portrait")}
                >
                  portrait
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => onOrientation("landscape")}
                >
                  landscape
                </Dropdown.Item>
              </SplitButton>
            </Col>
            <Col>
              <Button size="sm" variant="outline-dark" onClick={onApply}>
                Apply
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                {lonely
                  ? "You can create the same page"
                  : "number of pages maximum"}
              </Tooltip>
            }
          >
            <div>
              <Button variant="link" onClick={onAdd} disabled={!lonely}>
                Add new
              </Button>
            </div>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip>
                {lonely ? "It is the last page" : "You can delete this page"}
              </Tooltip>
            }
          >
            <div>
              <Button variant="link" onClick={onDelete} disabled={lonely}>
                Delete
              </Button>
            </div>
          </OverlayTrigger>
        </Col>
      </Row>
    </>
  );
}
