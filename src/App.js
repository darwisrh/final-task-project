// Libararies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

// Pages
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import EditChannel from "./Pages/EditChannel"
import AddVideo from "./Pages/AddVideo"

function App() {
  // SideBar State
  const [open, setOpen] = useState(false)

  const client = new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={client}>
        <Routes>
            {/* Unlogin Routes */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home setOpen={setOpen} open={open}/>}/>
          <Route path="/detail-video" element={<DetailPage setOpen={setOpen} open={open}/>}/>
          <Route path="/edit-channel" element={<EditChannel setOpen={setOpen} open={open}/>}/>
          <Route path="/addvideo" element={<AddVideo setOpen={setOpen} open={open}/>}/>

            {/* After Login Routes */}
        </Routes>
      </QueryClientProvider>
    </Router>
  )
}

export default App
