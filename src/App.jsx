import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Support from "./pages/Support"
import LiteracyForAll from "./pages/LiteracyForAll"
import Creaters from "./pages/Creaters"
import Knowledge from "./pages/Knowledge"
import KuttyMakers from "./pages/KuttyMakers"
import YoungMakers from "./pages/YoungMakers"
import FriendMovement from "./pages/FriendMovement"
import ParnterWithUs from "./pages/ParnterWithUs"
import SignIn from "./pages/SignIn"
import GetStarted from "./pages/GetStarted"


function App() {


  return (
    <>
      <Header />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted/>} />
        <Route path="/literacy" element={<LiteracyForAll />} />
        <Route path="/creaters" element={<Creaters />} />
        <Route path="/knowldege" element={<Knowledge />} />
        <Route path='/support' element={<Support />} />
        <Route path="/kutty-makers" element={<KuttyMakers />} />
        <Route path="/young-makers" element={<YoungMakers />} />
        <Route path="/friends-movement" element={<FriendMovement />} />
        <Route path="/partnerwithus" element={<ParnterWithUs />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
