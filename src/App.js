// Libararies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

// Pages
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Home from "./Pages/Home"

function App() {
  // SideBar State
  const [open, setOpen] = useState(false)



  return (
    <Router>
      <Routes>
          {/* Unlogin Routes */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home setOpen={setOpen} open={open}/>}/>

          {/* After Login Routes */}
      </Routes>
    </Router>
  )
}

export default App
