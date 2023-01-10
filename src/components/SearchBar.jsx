// Libraries
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

// External CSS
import '../css/SideBar.css'

// Icons
import Menu from '../Images/SideBar/WhiteMenu.png'
import Video from '../Images/Icons/video.png'

const SearchBar = ({ setOpen, open }) => {

  const toggle = () => setOpen(!open)


  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className='first-side'>
          <img src={Menu} alt="menubar" onClick={toggle} style={{width: '40px', cursor: 'pointer'}}/>
        </div>
        <div className='middle-side'>
          <Form.Group>
            <Form.Control className="search" type="text" placeholder="Search" />
          </Form.Group>
        </div>
        <div className='last-side'>
          <Link className='last-side'>
            <img src={Video} alt="video" />
            <p>Add Video</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;