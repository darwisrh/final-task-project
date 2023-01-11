// Libararies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

// Components
import PrivateRoute from "./components/PrivateRoutes"

// Pages
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import EditChannel from "./Pages/EditChannel"
import AddVideo from "./Pages/AddVideo"
import MyChannel from "./Pages/MyChannel"
import Description from "./Pages/Description"
import ContentCreator from "./Pages/ContentCreator"

function App() {
  // SideBar State
  const [open, setOpen] = useState(false)

  const client = new QueryClient()

  return (
    <Router>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route element={<PrivateRoute />}>
            <Route path="/home" element={
              <Home setOpen={setOpen} open={open}/>
            }/>
            <Route path="/detail-video" element={
              <DetailPage setOpen={setOpen} open={open}/>
            }/>
            <Route path="/edit-channel" element={
              <EditChannel setOpen={setOpen} open={open}/>
            }/>
            <Route path="/addvideo" element={
              <AddVideo setOpen={setOpen} open={open}/>
            }/>
            <Route path="/my-channel" element={
              <MyChannel setOpen={setOpen} open={open}/>
            } />
            <Route path="/my-channel/description" element={
              <Description setOpen={setOpen} open={open}/>
            } />
            <Route path="/content-creator" element={
              <ContentCreator setOpen={setOpen} open={open}/>
            } />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Router>
  )
}

export default App
