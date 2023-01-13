// Libraries
import { Link } from 'react-router-dom'
import { API } from '../config/api'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

// External CSS
import '../css/Detail.css'

// Icons
import NoVideo from '../Images/novideo.png'
import View from '../Images/Icons/view.png'
import Profile from '../Images/Icons/profile.png'

// Components
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import VideoThumb from '../Images/novideo.png'
import Time from '../Images/Icons/time.png'

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

const GuestDetail = ({ setOpen, open }) => {

  const { id } = useParams()
  const {data: getVideoById} = useQuery('videoGuestIdCache', async () => {
    const response = await API.get(`/video/${id}`)
    return response.data.data
  })

  return (
    <div className="detail-container">
      <div className="side-navbar-container">
        <SideBar open={open} setOpen={setOpen}/>
      </div>
      <div className='navbar-container'>
        <SearchBar setOpen={setOpen} open={open}/>
      </div>

      <div className='detail-body'>
        <div className='detail-body-wrapper'>
          
          <div className='main-detail-video'>
            <div className='detail-video-head'>
              <video controls muted autoplay loop>
                <source src={getVideoById?.video} type="video/mp4"/>
              </video>
            </div>
            <h2>
              {getVideoById?.title}
            </h2>
            <div className='detail-body-video'>
              <img src={View} alt="view" className='view-detail'/>
              <p>
                {getVideoById?.viewCount}
              </p>
              <img src={Time} alt="view" className='view-detail' style={{width: '18px'}}/>
              <p>
                {getVideoById?.formatTime}
              </p>
            </div>
            <hr style={{backgroundColor: 'white', height: '4px'}}/>
              <div className='profile-in-detail'>
                <Link className='profile-in-detail' to="/sign-in" style={{textDecoration: 'none'}}>
                  <img src={Profile} alt="profile" style={{width: '35px', marginRight: '10px'}}/>
                  <p>
                    {getVideoById?.channel.channelName}
                  </p>
                </Link>
              </div>
            <div className='description-detail'>
              <p>
                {getVideoById?.description}
              </p>
            </div>
          </div>

          <div className='random-video'>
          {
            DataDummy?.map(video => (
              <div className="home-card-detail" style={{position: 'relative',}}>
              <Link to="/detail-video" style={{textDecoration: 'none', color: 'white'}}>
                <div className="home-card-head">
                  <img src={VideoThumb} alt="videothumbnail" style={{height: '210px', marginBottom: '5px'}}/>
                  <h4>
                    {video?.title}
                  </h4>
                </div>
              </Link>
                <div className="home-card-body">
                  <p>
                    {video?.user}
                  </p>
                  <div className="view-time">
                    <div style={{
                      display: 'flex'
                    }}>
                      <img src={View} alt="view" style={{width: '24px', height: '24px'}}/>
                      <p>{video?.view}</p>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <img src={Time} alt="time" style={{width: '18px', height: '18px'}}/>
                      <p>{video?.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>

        </div>
      </div>
    </div>
  )
}

export default GuestDetail