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
  const [message,setMessage ] = useState('');

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
      let list = document.pageDtoList.filter((e) => e.id !== pageActive.id);
      setDocument({ ...document, pageDtoList: list });
      setPageActive(list[0]);
      setPageShow(list[0]);
      setMessage("Page deleted successfully")
    }
  }

  async function onAdd() {
    let newPage = {
      documentId: document.id,
      size: pageActive.size,
      orientation: pageActive.orientation,
    };
    let page = await createNewPage(newPage);
    let doc = await getDocument(id);
    setMessage("Page added successfully")
    setPageActive(page);
    setPageShow(page);
    setDocument(doc);
  }

  async function onApply() {
    let page = await updatePage(pageShow);
    setMessage("Page updated successfully")
    let index = document.pageDtoList.indexOf(pageActive);
    let list = document.pageDtoList.with(index, page);
    setPageActive(page);
    setDocument({ ...document, pageDtoList: list });
  }
  if (document) {
    return (
      <>
        <DocumentContext.Provider value={[pageActive, setPageActive, document]}>
          <div className="top">
            <LineTopCP message={message}setMessage={setMessage}/>
            <PageContext.Provider
              value={[onApply, onAdd, onDelete, pageShow, setPageShow]}
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

async function getDocument(id) {
  return await Get({ path: "/documents/" + id });
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
