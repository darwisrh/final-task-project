import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons
import Polygon from '../Images/DropDown/Polygon.png'
import Profile from '../Images/DropDown/ProfileDropD.png'
import Logout from '../Images/DropDown/Logout.png'

const dropDown = {
  width: "200px",
  padding: "20px",
  marginTop: "25px",
  backgroundColor: '#141414',
  borderRadius: '5px'
}

const drop = {
  background: "transparent",
  border: "0px"
}

const dropItem1 = {
  marginLeft: "0",
  color: "black",
  display: "flex",
  alignItem: "center",
  marginBottom: '10px'
}

const dropItem2 = {
  marginLeft: "0",
  color: "black",
  display: "flex",
  alignItem: "center"
}

const fonts = {
  fontSize: "18px",
  fontWeight: "400",
  margin: "0",
  display: "flex",
  position: "relative",
  top: "2px"
}

const img = {
  width: "30px",
  height: "30px",
  marginRight: "10px"
}

const dropDiv = {
  width: "200px",
  position: "relative",
  right: "20px",
  border: "1px solid #A8A8A8"
}

const polygon = {
  width: '45px',
  height: '40px',
  position: "absolute",
  bottom: "120px",
  left: "140px"
}


function DropDownAll() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" style={drop}>
          <img src={Profile} alt="profile" />
        </Dropdown.Toggle>

        <Dropdown.Menu style={dropDown}>
            <img style={polygon} src={Polygon} />
          <Dropdown.Item style={dropItem1}>
            <Link style={dropItem1} to="/my-channel">
              <img style={img} src={Profile} alt="user" />
              <p style={fonts}>My Channel</p>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item style={dropItem2}>
            <Link style={dropItem2}>
              <img style={img} src={Logout} alt="user" />
              <p style={fonts}>Logout</p>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropDownAll