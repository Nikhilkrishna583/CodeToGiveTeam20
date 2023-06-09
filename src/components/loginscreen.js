import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Tlogo from '../images/Tlogo.png'

const Loginscreen = () => {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/signup')
  }

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src={Tlogo} style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Tiny Miracles Team</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn
                outline
                className="mx-2"
                color="danger"
                onClick={handleRegisterClick}
              >
                Register!
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a foundation!</h4>
              <p className="small mb-0">Random text....</p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Loginscreen
