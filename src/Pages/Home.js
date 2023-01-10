// Libraries
import { Link } from "react-router-dom"

// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// Icons
import VideoThumb from '../Images/novideo.png'
import View from '../Images/Icons/view.png'
import Time from '../Images/Icons/time.png'

// External CSS
import '../css/Home.css'

const DataDummy = [
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
  {
    title: "Video 1",
    user: "Mikel User",
    view: "200k",
    time: "22 Mei 2003"
  },
]

const Home = ({ setOpen, open }) => {
  return (
    <div className="home-container">
      <div className="side-navbar-container">
        <SideBar open={open} setOpen={setOpen}/>
      </div>
      <div className='navbar-container'>
        <SearchBar setOpen={setOpen} open={open}/>
      </div>
      <div className="home-body">
        <div className="home-body-wrapper">

          {
            DataDummy.map(video => (
              <div className="home-card">
              <Link to="/detail-video" style={{textDecoration: 'none', color: 'white'}}>
                <div className="home-card-head">
                  <img src={VideoThumb} alt="videothumbnail" style={{marginBottom: '10px'}}/>
                  <h4>
                    {video.title}
                  </h4>
                </div>
              </Link>
                <div className="home-card-body">
                  <p>
                    {video.user}
                  </p>
                  <div className="view-time">
                    <div style={{
                      display: 'flex'
                    }}>
                      <img src={View} alt="view" style={{width: '24px', height: '24px'}}/>
                      <p>{video.view}</p>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <img src={Time} alt="time" style={{width: '18px', height: '18px'}}/>
                      <p>{video.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Home