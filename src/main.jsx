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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
