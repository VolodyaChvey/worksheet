import { Tab, Tabs } from "react-bootstrap";
import PagePT from "./PagePT";

export default function PanelTop() {
  return (
    <div className="panel">
      <Tabs defaultActiveKey="page" justify className="">
        <Tab eventKey="page" title="Page">
          <PagePT />
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <div className="linePanel">Tab content for tools</div>
        </Tab>
      </Tabs>
    </div>
  );
}
