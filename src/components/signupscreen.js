import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit'
// import appCss from '../app.css';
import TLogo from '../images/Tlogo.png'

const SigninScreen = () => {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src={TLogo} style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Tiny Miracles Team</h4>
            </div>
            <p>Please provide your information</p>
            <MDBInput wrapperClass="mb-4" label="Name" id="name" type="text" />
            <MDBInput wrapperClass="mb-4" label="Age" id="age" type="number" />
            <MDBInput
              wrapperClass="mb-4"
              label="Gender"
              id="gender"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Medical Records"
              id="medical-records"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contact Details"
              id="contact-details"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Address"
              id="address"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Aadhar No"
              id="aadhar-no"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Marital Status"
              id="marital-status"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Source of Income"
              id="source-of-income"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Income Range"
              id="income-range"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Number of Children"
              id="number-of-children"
              type="number"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Educational Background"
              id="educational-background"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign up</MDBBtn>
              <a className="text-muted" href="#!">
                Already have an account? Sign in.
              </a>
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

export default SigninScreen
