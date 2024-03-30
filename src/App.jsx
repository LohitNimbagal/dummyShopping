import { Outlet, useNavigate } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Loading } from "./components/Loading"
import authService from './appwrite/auth'
import service from "./appwrite/config"
import { addToCart, fetchCartProducts } from "./store/cartThunkSlice"
// import { fetchCartProducts } from "./store/cartThunkSlice"


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
          // getCartItems()
        } else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [])

  // const getCartItems = async () => {
  //   try {
  //     const cartProducts = await service.listItems()
  //     console.log(cartProducts);
  //     // dispatch(addToCart(cartProducts.documents))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return !loading ? (
    <>
      <Hearder />
      <Outlet />
      <Footer />
    </>
  ) : <Loading />
}

export default App
