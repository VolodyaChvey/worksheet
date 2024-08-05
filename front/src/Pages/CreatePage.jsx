import { useParams } from "react-router-dom";
import Get from "../Controllers/Get";
import Put from "../Controllers/Put";
import Post from "../Controllers/Post";
import Delete from "../Controllers/Delete";
import Page from "../Components/page/Page";
import PanelBottom from "../PanelBottom/PanelBottom";
import { useEffect, useState } from "react";
import { DocumentContext, PageContext } from "../context";
import PanelTop from "../PanelTop/PanelTop";
import LineTopCP from "../Common/LineTopCP";
//import { isEqual } from "../data";

function CreatePage() {
  const { id } = useParams();
  const [document, setDocument] = useState();
  const [pageActive, setPageActive] = useState();
  const [pageShow, setPageShow] = useState();

  useEffect(() => {
    async function getDocumentById() {
      let document = await Get({ path: "/documents/" + id });
      setDocument(document);
      setPageActive(document.pageDtoList[0]);
      setPageShow(document.pageDtoList[0]);
    }
    getDocumentById();
  }, [id]);

  async function onDelete() {
    let del = await deletePage(pageActive.id);
    if (del) {
    }
  }

  async function onAdd() {
    let newPage = {
      documentId: document.id,
      size: document.pageDtoList.at(-1).size,
      orientation: document.pageDtoList.at(-1).orientation,
    };
    let page = await createNewPage(newPage);
    setPageActive(page);
  }

  async function onApply() {
    let page = await updatePage(pageShow);
    setPageActive(page);
  }
  if (document) {
    return (
      <>
        <DocumentContext.Provider value={[pageActive, setPageActive, document]}>
          <div className="top">
            <LineTopCP document={document} pageActive={pageActive} />
            <PageContext.Provider
              value={[onApply, onAdd, onDelete,pageShow, setPageShow]}
            >
              <PanelTop />
              <Page />
            </PageContext.Provider>
          </div>
          <div className="bottom">
            <PanelBottom component={""} />
          </div>
        </DocumentContext.Provider>
      </>
    );
  }
}

async function deletePage(id) {
  return await Delete({ path: "/pages/" + id });
}
async function createNewPage(newPage) {
  return await Post({ path: "/pages", body: newPage });
}

async function updatePage(pageActive) {
  return await Put({ path: "/pages/" + pageActive.id, body: pageActive });
}

export { CreatePage };
