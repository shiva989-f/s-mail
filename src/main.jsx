import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Letter from './pages/letter/Letter'
import NotFound from './pages/Error/not-found'

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
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Providing router which we have to route
  <RouterProvider router={router}/>
)
