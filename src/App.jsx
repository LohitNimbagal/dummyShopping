import authService from './appwrite/auth'
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loading } from "./components/Loading"
import { login, logout } from "./store/authSlice"
import { useDispatch } from "react-redux"
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
      .finally(() => setLoading(false))
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
