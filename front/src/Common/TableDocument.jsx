import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TableDocument({ documents, onDelete, onCorrectName}) {
  const navigate = useNavigate();

  return (
    <div className="tableDocument">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th width="20%"></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((d) => (
            <tr key={d.id}>
              <td onClick={() => navigate("/view/" + d.id)}>{d.name}</td>
              <td>
                <DropdownButton
                  size="sm"
                  variant="secondary"
                  title={<i class="fa-solid fa-bars"></i>}
                >
                  <Dropdown.Item onClick={()=>onCorrectName(d.id)}>Correct name</Dropdown.Item>
                  <Dropdown.Item href={"/createPage/" + d.id}>
                    Correct document
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => onDelete(d.id)}>
                    Delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
