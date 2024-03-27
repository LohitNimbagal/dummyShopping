import { Outlet, useNavigate } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import axios from "axios"
import { Loading } from "./components/Loading"
import currencyConvert from "./utils/currencyConvert"
import authService from './appwrite/auth'
// import {setCurrencyData} from "./store/currencySlice"


function App() {

  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(true)
  const loggedin = useSelector(state => state.auth.status)
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
      <Hearder loggedin={loggedin} />
      <Outlet />
      <Footer />
    </>
  ) : <Loading />
}

export default App
