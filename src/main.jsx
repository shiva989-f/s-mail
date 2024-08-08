import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Letter from './pages/letter/Letter'

// React Router for navigating on different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/letter",
    element: <Letter/>
  },
  {
    path: "*",
    element: <h1>Error: 404 Page Not Found</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Providing router which we have to route
  <RouterProvider router={router}/>
)
