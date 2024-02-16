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
import { ToastContainer } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';

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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
