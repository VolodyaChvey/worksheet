import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import CheckboxGroup from "../Common/CheckboxGroup";
import { useState } from "react";
import Post from "../Controllers/Post";
import { checkParam, errorValid } from "../data";
import Get from "../Controllers/Get";
import { json, useNavigate } from "react-router-dom";

export default function CreateDocument() {
  const [name, setName] = useState("");
  const [size, setSize] = useState(null);
  const [orientation, setOrientation] = useState(null);
  const [count, setCount] = useState(null);
  const [error, setError] = useState();
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  function onChange({ name, value }) {
    if (name === "name") setName(value);
    if (name === "size") setSize(value);
    if (name === "orientation") setOrientation(value);
    if (name === "count") setCount(value);
  }
  async function onApply() {
    await createDocument();
  }

  function onClose() {
    setName("");
    setSize(null);
    setOrientation(null);
    setCount(null);
    setError(null);
    setReset(!reset);
  }
  return (
    <>
      <Card className="pageDocument">
        <Card.Header>
          <h4>Create new document</h4>
        </Card.Header>
        <Card.Body>
          <InputGroup
            className="my-3"
            onChange={(e) =>
              onChange({ name: e.target.name, value: e.target.value })
            }
          >
            <InputGroup.Text>Название: </InputGroup.Text>
            <FormControl name="name" autoFocus value={name} />
          </InputGroup>
          {error?.name && (
            <p style={{ color: "red", fontStyle: "italic" }}>{error.name}</p>
          )}
          <CheckboxGroup
            title={"Размер"}
            name={"size"}
            value1={"A4"}
            value2={"A5"}
            change={onChange}
            reset={reset}
          />
          {error?.size && (
            <p style={{ color: "red", fontStyle: "italic" }}>{error.size}</p>
          )}
          <CheckboxGroup
            title={"Ориентация"}
            name={"orientation"}
            value1={"portrait"}
            value2={"landscape"}
            change={onChange}
            reset={reset}
          />
          {error?.orientation && (
            <p style={{ color: "red", fontStyle: "italic" }}>
              {error.orientation}
            </p>
          )}
          <CheckboxGroup
            title={"Количество страниц"}
            name={"count"}
            value1={"1"}
            value2={"2"}
            change={onChange}
            reset={reset}
          />
          {error?.count && (
            <p style={{ color: "red", fontStyle: "italic" }}>{error.count}</p>
          )}
          <Row>
            <Col></Col>
            <Col>
              <Button variant="secondary" onClick={onClose}>
                Отменить
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={onApply}>
                Создать
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );

  //throw exception if parameter is null or empty
  function checkForm() {
    let parameters = [
      {
        fieldName: "name",
        value: name,
        message: "Название не должно быть пустым",
      },
      { fieldName: "size", value: size, message: "Размер не выбран" },
      {
        fieldName: "orientation",
        value: orientation,
        message: "Ориентация не выбрана",
      },
      {
        fieldName: "count",
        value: count,
        message: "Количество страниц не выбрано",
      },
    ];
    parameters.forEach((p) =>
      checkParam({ fieldName: p.fieldName, value: p.value, message: p.message })
    );
  }

  async function checkName() {
    let exists = await Get({ path: "/documents/exists/" + name });
    if (exists) {
      let violations = [
        { fieldName: "name", message: "Название уже существует" },
      ];
      throw json({ violations }, { status: 400 });
    }
  }

  async function createPages(documentId) {
    for (let index = 0; index < count; index++) {
      await Post({ path: "/pages", body: { documentId, size, orientation } });
    }
  }

  async function createDocument() {
    try {
      checkForm();
      await checkName();
      let response = await Post({ path: "/documents", body: { name } });
      await createPages(response.id);
      onClose()
      navigate("/createPage/" + response.id);
    } catch (e) {
      let er = await errorValid(e);
      setError(er);
    }
  }
}
