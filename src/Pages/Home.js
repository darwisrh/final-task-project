// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// External CSS
import '../css/Home.css'

const Home = ({ setOpen, open }) => {
  return (
    <div className="home-container">
      <div className="side-navbar-container">
        <SideBar open={open} setOpen={setOpen}/>
      </div>
      <div className='navbar-container'>
        <SearchBar setOpen={setOpen} open={open}/>
      </div>
    </div>
  )
}

export default Home