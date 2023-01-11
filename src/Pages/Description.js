// Libraries
import { Link } from "react-router-dom"

// Components
import SideBar from "../components/SideBar"
import SearchBar from "../components/SearchBar"

// External CSS
import '../css/MyChannel.css'

// Images
import Banner from '../Images/banner.webp'
import Profile from '../Images/Icons/profile-100px.png'
import VideoThumb from '../Images/novideo.png'
import View from '../Images/Icons/view.png'
import Time from '../Images/Icons/time.png'

const Description = ({ setOpen, open }) => {
  return (
    <div className="my-channel-container">
      <div className="side-navbar-container">
        <SideBar open={open} setOpen={setOpen}/>
      </div>
      <div className='navbar-container'>
        <SearchBar setOpen={setOpen} open={open}/>
      </div>

      <div className="my-channel-body">
        <div className="my-channel-wrapper">
          
          <div className="my-channel-main">
            <div className="my-channel-banner">
              <img src={Banner} alt="banner" />
            </div>
            <div className="my-channel-body">
              <div className="my-channel-body-wrapper">
                
                <div className="my-channel-body-header">
                  <div className="channel-left-side">
                    <img src={Profile} alt="profile" />
                    <div className="channel-left-text">
                      <p>
                        Some User
                      </p>
                      <p>
                        100k Subscriber
                      </p>
                    </div>
                  </div>
                  <div className="channel-right-side">
                    <Link to="/edit-channel">
                      <button>Edit Channel</button>
                    </Link>
                  </div>
                </div>
                <div className="my-channel-body-body">
                  <Link to="/my-channel" style={{textDecoration: 'none'}}>
                    <p>Video</p>
                  </Link>
                  <Link to="/my-channel/description" style={{textDecoration: 'none'}}>
                    <p style={{color: '#FF7A00'}}>Description Channel</p>
                  </Link>
                </div>
                <hr style={{
                  margin: 0,
                  backgroundColor: 'white',
                  height: '4px'
                }}/>
                <div className="my-channel-description">
                  <p style={{
                    fontSize: '17px',
                    color: 'white',
                    fontWeight: '400'
                  }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, nulla sequi. Itaque cupiditate, ducimus quidem delectus ratione magnam temporibus earum, voluptatum libero ex distinctio id quis repellendus commodi dignissimos incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, odit repudiandae! Id deleniti nesciunt ea obcaecati consequuntur, at qui rerum reprehenderit, sunt animi, libero minima. Vitae possimus aliquid rerum iste!
                  </p>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Description