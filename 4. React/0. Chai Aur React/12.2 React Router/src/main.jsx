import React, { StrictMode } from "react";
import ReactDom from "react-dom/client"
import App from "./components/App";
import About from "./components/About";
import Contact from "./components/Contact";
import Search from "./components/Search";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <div>404 Not Found</div>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/search/:searchedPage",
    element:<Search/>
  }
])

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)

