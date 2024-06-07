import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PlayerName from './components/PlayerName'


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/game",
        element: <App/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <RouterProvider router={router} />
    // </StrictMode>
)
