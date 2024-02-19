import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import Signup from './pages/Signup.jsx'
import Protected from './components/Protected.jsx'
import About from './pages/About.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected authentication>
            <Home />
          </Protected>
        )
      },
      {
        path: "/about",
        element: (
          <Protected authentication = {false}>
            <About />
          </Protected>
        )
      },
      {
        path: "/cart",
        element: (
          <Protected authentication >
            <Cart />
          </Protected>
        )
      },
      {
        path: "/login",
        element: (
          <Protected authentication = {false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication = {false}>
            <Signup />
          </Protected>
        )
      },
    ]
  },
  {
    path: "*",
    element: (
      <PageNotFound />
    )
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
      />
    </Provider>
  </React.StrictMode>,
)
