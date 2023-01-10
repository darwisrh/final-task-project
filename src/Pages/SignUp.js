// Libraries
import { Link } from 'react-router-dom'

// CSS External
import '../css/SignUp.css'

// Icons
import WaysHub from '../Images/WaysHub.png'

// Bootstrap CSS
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import 'bootstrap/dist/css/bootstrap.min.css'

const SignUp = () => {
  return (
      <div className='container'>

        <div className='wrapper'>
          <div className='left-side'>

            <div className='leftSide-container'>
              <img src={WaysHub} alt="WaysHub" />
              <div className='text-1'>
                <p>&</p>
                <p>Chill</p>
                <p>Chill</p>
              </div>
              <div className='description'>
                Join now, share your creations with another people and enjoy other creations
              </div>
              <Link to="/sign-in" className="sign-in" >Sign In</Link>
            </div>

          </div>

          <div className='right-side'>
            <div className='form-cont'>
              <h2>Sign Up</h2>
              <Form>
                <Form.Group className='mb-4'>
                  <Form.Control 
                  className='control' 
                  type='email' 
                  placeholder="Email"
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Control 
                  className='control' 
                  type='password' 
                  placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                <Form.Control 
                className='control' 
                type='text' 
                placeholder="Name Channel"
                />
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Description Channel">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '180px' }}
                  className='control'
                />
                </FloatingLabel>
                <button className='button' type='submit'>Sign Up</button>
              </Form>
            </div>
          </div>
        </div>

      </div>
  )
}

export default SignUp