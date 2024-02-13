import { Outlet } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Hearder />
      {/* <h1 className="bg-yellow-400 h-10">Welcome Dummy Shopping </h1> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
