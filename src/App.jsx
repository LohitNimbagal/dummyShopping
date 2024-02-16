import { Outlet } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function App() {

  const [loggedin, setLoggedIn] = useState(false)
  const userData = useSelector(state => state.auth.userData)

  useEffect(() => {
    if (!userData) {
      setLoggedIn(false)
      return
    };

    setLoggedIn(false)
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userData.token}`,
      },
    })
    .then(res => res.json())
    .then(setLoggedIn(!loggedin));
  }, [userData])

  return (
    <>
      <Hearder loggedin={loggedin}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
