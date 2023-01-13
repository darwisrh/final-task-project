// Libraries
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { API } from "../config/api"
import { useMutation, useQuery } from "react-query"

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
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ContentCreator = ({ setOpen, open }) => {

  const [state] = useContext(UserContext)
  console.log(state)

  const { id } = useParams()
  const {data: getChannelById} = useQuery('channelContentByIdCache', async () => {
    const response = await API.get(`/channel/${id}`)
    return response.data.data
  })

  const {data: subscribers} = useQuery('subscriberCache', async () => {
    const response = await API.get(`/subscribes`)
    return response.data.data
  })
  console.log(subscribers)

  const subscriber = {
    channel_id: state?.user.id
  }

  const handleClick = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(subscriber)
      const response = await API.post(`/subscribe/${id}`, body, config)
      alert("Subscribe Success")
    } catch (err) {
      alert("FAILED")
      console.log(err.data)
    }
  })

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
                        {getChannelById?.channelName}
                      </p>
                      <p>
                        {getChannelById?.subscriber} Subscriber
                      </p>
                    </div>
                  </div>
                  <div className="channel-right-side">
                    <Link >
                      <button onClick={(e) => handleClick.mutate(e)}>
                        Subscribe
                      </button>
                    </Link>
                  </div>
                </div>
                <hr style={{
                  margin: 0,
                  backgroundColor: 'white',
                  height: '4px'
                }}/>
                <div className="my-channel-videos">
                {
                  getChannelById?.video.map(video => (
                    <div className="home-card" key={video?.id}>
                    <Link to="/detail-video" style={{textDecoration: 'none', color: 'white'}}>
                      <div className="home-card-head">
                        <img src={video?.thumbnail} alt="videothumbnail" style={{marginBottom: '10px'}}/>
                        <h4>
                          {video?.title}
                        </h4>
                      </div>
                    </Link>
                      <div className="home-card-body">
                        <p>
                          {video?.channel.channelName}
                        </p>
                        <div className="view-time">
                          <div style={{
                            display: 'flex'
                          }}>
                            <img src={View} alt="view" style={{width: '24px', height: '24px'}}/>
                            <p>{video?.viewCount}</p>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <img src={Time} alt="time" style={{width: '18px', height: '18px'}}/>
                            <p>{video?.formatTime}</p>
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

        </div>
      </div>

    </div>
  )
}

export default ContentCreator