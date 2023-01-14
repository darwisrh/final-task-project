// Libraries
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

// External CSS
import '../css/SideBar.css'

// Icons
import WaysHub from '../Images/WaysHub.png'
import HomeW from '../Images/SideBar/HomeWhite.png'
import SubsW from '../Images/SideBar/SubsWhite.png'
import Menu from '../Images/SideBar/WhiteMenu.png'

const SideBar = ({ open, setOpen }) => {

  const navigate = useNavigate()
  const [channel, setOpenCnl] = useState(false)
  const toggle = () => setOpenCnl(!channel)
  const [state] = useContext(UserContext)

  // Get User by Id

  const goLeft = {
    position: 'fixed',
    left: '-230px',
    transition: '0.5s'
  }

  const goRight = {
    position: 'fixed',
    left: '0px',
    transition: '0.5s'
  }

  return (
    <div style={open ? goLeft : goRight} className='sidebar-container'>
      <div className='sidebar-wrapper'>
        <div className='top-section'>
          <img src={WaysHub} alt="wayshub" />
          <img src={Menu} alt="menu" onClick={setOpen}/>
        </div>
        <div className='body-section'>
          <Link to={state.isLogin ? '/home' : '/guest-home'} className="router">
            <img src={HomeW} alt="icon"/>
            <div className="name">Home</div>
          </Link>
          <Link className="router">
            <img src={SubsW} alt="icon" />
            <div className="name" onClick={() => state.isLogin ? toggle() : navigate('/sign-in')}>Subscription</div>
          </Link>
        </div>
        <div className='user-section'>
          <h2>
            Channel
          </h2>
          {/* {
            User?.map((user, i) => channel ? (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '25px'
              }}>
                <img src={Profile} alt="user" style={{width: '35px'}}/>
                <p style={{
                  fontSize: '18px',
                  color: 'white',
                  marginLeft: '10px',
                  marginBottom: 0
                }}>{user.name}</p>
              </div>
            ) : (<div></div>))
          } */}
        </div>
      </div>
    </div>
  )
}

export default SideBar