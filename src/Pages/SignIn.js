// Libraries
import { Link } from 'react-router-dom'

// CSS External
import '../css/SignUp.css'
import '../css/SignIn.css'

// Icons
import WaysHub from '../Images/WaysHub.png'

// Bootstrap CSS
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

// Object Style
const formCont = {
  padding: '20px',
  backgroundColor: '#161616',
  width: '416px',
  borderRadius: '5px'
}

const h2 = {
  color: 'white',
  marginBottom: '25px',
  fontWeight: 700
}

const SignUp = () => {
  return (
      <div className='container'>

        <div className='wrapper'>
          <div className='left-side'>

            <div>
              <img src={WaysHub} alt="WaysHub" />
              <div className='text-1'>
                <p>&</p>
                <p>Chill</p>
                <p>Chill</p>
              </div>
              <div className='description'>
                Join now, share your creations with another people and enjoy other creations
              </div>
              <Link to="/sign-Up" className="sign-in" >Sign Up</Link>
            </div>

          </div>

          <div className='right-side'>
            <div style={formCont} className='formCont'>
              <h2 style={h2}>Sign In</h2>
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Control className='control' type='email' placeholder="Email" />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Control className='control' type='password' placeholder="Password" />
                </Form.Group>
                <button className='button' type='submit'>Sign In</button>
              </Form>
            </div>
          </div>
        </div>

      </div>
  )
}

export default SignUp