import { Outlet } from "react-router-dom"
import Hearder from "./components/Hearder"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Hearder />
        {/* <div className="pt-32 bg-white"> */}
          <Outlet />
        {/* </div> */}
      <Footer />
    </>
  )
}

export default App
