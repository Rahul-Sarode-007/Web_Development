import { createBrowserRouter } from "react-router-dom";
import StartGame from "../components/StartGame";
import PlayGame from "../components/PlayGame";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<StartGame/>
    },
    {
        path:"/game",
        element: <PlayGame/>
    }
])