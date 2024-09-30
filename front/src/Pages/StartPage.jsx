import { json, useLoaderData, useNavigate } from "react-router-dom";
import Get from "../Controllers/Get";
import Put from "../Controllers/Put";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import TableDocument from "../Common/TableDocument";
import React, { useState } from "react";
import Delete from "../Controllers/Delete";
import { checkParam, errorValid, indexOf } from "../data";
import Message from "../Common/Message";
import { useDebounce } from "../Common/useDebounce";

function StartPage() {
  const [documents, setDocuments] = useState(useLoaderData());
  const navigate = useNavigate();
  const [del, setDel] = useState(false);
  const [correctName, setCorrectName] = useState(false);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");
  const [documentId, setDocumentId] = useState();
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const fun = useDebounce(getSearchDocument);

  async function onSearch(e) {
    let value = e.target.value;
    setSearch(value);
    let response = [];
    if (value) {
      response = await fun(value);
    } else {
      response = await getAllDocuments();
    }
    setDocuments(response);
  }

  function onDelete(id) {
    setDocumentId(id);
    setDel(true);
  }
  function onCorrectName(id) {
    setDocumentId(id);
    setCorrectName(true);
  }
  function onChange(value) {
    setNewName(value);
    setError("");
  }
  function onClose() {
    setError("");
    setNewName("");
    setCorrectName(false);
  }
  async function onApply() {
    let doc = await updateDocument();
    if (!(typeof doc === "undefined")) {
      let index = indexOf({ array: documents, obj: doc });
      documents.splice(index, 1, doc);
      setDocuments(documents);
      setMessage("Document name updated successfully")
      onClose();
    }
  }

  async function onDeleteDocument() {
    let response = await deleteDocument(documentId);
    if (response) {
      setMessage("document deleted successfully");
      let doc = await getAllDocuments();
      setDocuments(doc);
      setSearch("");
    } else {
      setMessage("Something went wrong");
    }
    setDel(false);
  }
  return (
    <>
      <Row className="header py-2 m-2">
        <Col>
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
          <input placeholder="Search" value={search} onChange={onSearch} />
        </Col>
        <Col>
          <Message message={message} setMessage={setMessage} />
        </Col>
        <Col>
          <Button onClick={() => navigate("/createDocument")}>
            Create new document
          </Button>
        </Col>
      </Row>
      {documents.length === 0 ? (
        <h3>Not found any documents</h3>
      ) : (
        <TableDocument
          documents={documents}
          onDelete={onDelete}
          onCorrectName={onCorrectName}
        />
      )}

      <Modal show={correctName} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter a new document name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup onChange={(e) => onChange(e.target.value)}>
            <InputGroup.Text>New name</InputGroup.Text>
            <FormControl autoFocus value={newName} />
          </InputGroup>
          {error?.name && (
            <p style={{ color: "red", fontStyle: "italic" }}>{error.name}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button onClick={onApply}>Apply</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={del} onHide={() => setDel(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDel(false)}>
            Close
          </Button>
          <Button onClick={() => onDeleteDocument()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  async function checkName() {
    let exists = await Get({ path: "/documents/exists/" + newName });
    if (exists) {
      let violations = [
        { fieldName: "name", message: "Название уже существует" },
      ];
      throw json({ violations }, { status: 400 });
    }
  }

  async function updateDocument() {
    try {
      checkParam({
        fieldName: "name",
        value: newName,
        message: "Название не должно быть пустым",
      });
      await checkName();
      let doc = documents.find((d) => d.id === documentId);
      doc.name = newName;
      return await Put({ path: "/documents/" + documentId, body: doc });
    } catch (e) {
      let er = await errorValid(e);
      setError(er);
    }
  }
} 

async function getSearchDocument(name) {
  return await Get({ path: "/documents/search/" + name });
}

async function deleteDocument(documentId) {
  return await Delete({ path: "/documents/" + documentId });
}

async function getAllDocuments() {
  return await Get({ path: "/documents" });
}
async function startPageLoader() {
  return await getAllDocuments();
}

export { StartPage, startPageLoader };
