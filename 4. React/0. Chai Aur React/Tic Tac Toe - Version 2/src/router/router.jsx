import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import MainGame from "../components/MainGame" 
import Game from "../components/Game";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Game/>
    },
    {
        path:"/maingame",
        element: <MainGame/>
    }
])