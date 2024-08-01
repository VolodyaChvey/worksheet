import { useLoaderData } from "react-router-dom";
import Get from "../Controllers/Get";
import Page from "../Components/page/Page";
import { Button } from "react-bootstrap";
import PanelBottom from "../PanelBottom/PanelBottom";
import { useState } from "react";
import { DocumentContext } from "../context";
import PanelTop from "../PanelTop/PanelTop";
import LineTopCP from "../Common/LineTopCP";

function CreatePage() {
  const { document } = useLoaderData();
  const [pageActive, setPageActive] = useState(document.pageDtoList[0]);
  // const [component, setComponent] = useState("");

  return (
    <>
      <DocumentContext.Provider value={document}>
        <div className="top">
          <LineTopCP document={document} pageActive={1} />
          <div className="panel">
            <PanelTop />
          </div>
          <Page size={pageActive.size} orientation={pageActive.orientation}/>
        </div>
        <div className="bottom">
          <PanelBottom component={""} />
        </div>
      </DocumentContext.Provider>
    </>
  );
}

async function getDocumentById(id) {
  return await Get({ path: "/documents/" + id });
}

async function documentLoader({ params }) {
  const id = params.id;
  const document = await getDocumentById(id);
  return { document };
}
export { CreatePage, documentLoader };
