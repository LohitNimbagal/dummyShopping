import { Outlet, useNavigate } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Loading } from "./components/Loading"
import currencyConvert from "./utils/currencyConvert"
import authService from './appwrite/auth'


function App() {

  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currency = currencyConvert()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
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
