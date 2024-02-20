import { Outlet, useNavigate } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import axios from "axios"
import { Loading } from "./components/UI/Loading"
import currencyConvert from "./utils/currencyConvert"
import {setCurrency} from "./store/currencySlice"


function App() {

  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(true)
  const loggedin = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currency = currencyConvert()

  if (currency) {
    dispatch(setCurrency(currency))
  }

  useEffect(() => {
    axios
      .get('https://dummyjson.com/auth/me', { headers: { 'Authorization': `Bearer ${authToken}` } })
      .then(response => {
        dispatch(login(response.data))
        navigate("/")
      })
      .catch(error => {
        console.log(error);
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [authToken])

  return !loading ? (
    <>
      <Hearder loggedin={loggedin} />
      <Outlet />
      <Footer />
    </>
  ) : <Loading />
}

export default App
