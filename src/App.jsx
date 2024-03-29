import { Outlet, useNavigate } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Loading } from "./components/Loading"
import authService from './appwrite/auth'
import { fetchCartProducts } from "./store/cartThunkSlice"


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
          dispatch(fetchCartProducts())
        } else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <>
      <Hearder />
      <Outlet />
      <Footer />
    </>
  ) : <Loading />
}

export default App
