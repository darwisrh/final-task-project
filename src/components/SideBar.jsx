// Libraries
import { Link } from 'react-router-dom'

// External CSS
import '../css/SideBar.css'

// Icons
import WaysHub from '../Images/WaysHub.png'
import HomeW from '../Images/SideBar/HomeWhite.png'
import SubsW from '../Images/SideBar/SubsWhite.png'
import Menu from '../Images/SideBar/WhiteMenu.png'

const SideBar = ({ open, setOpen }) => {

  const MenuItems = [
    {
      path: "/home",
      name: "Home",
      icon: HomeW
    },
    {
      path: "/sign-in",
      name: "Subscrtiption",
      icon: SubsW
    }
  ]

  const goLeft = {
    position: 'absolute',
    left: '-230px',
    transition: '0.5s'
  }

  const goRight = {
    position: 'absolute',
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
          {
            MenuItems.map((item, i) => (
              <Link to={`${item.path}`} key={i} className="router">
                <img src={item.icon} alt="icon" />
                <div className="name">{item.name}</div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar