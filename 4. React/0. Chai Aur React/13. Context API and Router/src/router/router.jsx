import { createBrowserRouter } from "react-router-dom";
import App from "../components/App.jsx";
import Access from "../components/Access.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "access", element: <Access /> }
]);

export default router;
