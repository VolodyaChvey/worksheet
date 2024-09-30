//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import { StartPage, startPageLoader } from "./Pages/StartPage";
import { CreatePage} from "./Pages/CreatePage";
import {ViewPage, viewPageLoader} from "./Pages/ViewPage";
import CreateDocument from "./Pages/CreateDocument";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<StartPage />} loader={startPageLoader} />
      <Route path="createDocument" element={<CreateDocument />} />
      <Route path="createPage/:id"  element={<CreatePage/>} />
      <Route path="view/:id" element={<ViewPage/>} loader={viewPageLoader}/>
    </Route>
  )
);
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default function App() {
  return <RouterProvider router={router} />;
}
