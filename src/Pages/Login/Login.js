import React from "react";
import './Login.css'
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img1 from "../../image/svg/img1.svg";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {

const [email, setEmail] = useState('')
const [password ,setPassword] = useState('')

const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
const navigate = useNavigate();
let location = useLocation();


let from = location.state?.from?.pathname || "/";

const handleEmailBlur = ( event)=>{
  setEmail(event.target.value)
}


const handlePasswordBlur =(event)=>{
  setPassword(event.target.value)
}


const handleUserSignIn = (event)=>{
  event.preventDefault();
  signInWithEmailAndPassword(email, password)
}


if(user){
  navigate(from, { replace: true });
}


  return (
    <div className="login pb-5">
      <Container>
        <Row className="justify-content-md-center pt-5 ">
          <Col>
            <img className="img-fluid " src={img1} alt="" />
          </Col>
          <Col className="bg-white  rounded">
            <h4 className="pt-2 text-center">Login Please !</h4>
            <Form onSubmit={handleUserSignIn}  className="w-75 mx-auto pt-1">
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur}  type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur}  type="password" placeholder="Password" required />
              </Form.Group>
            <p className="text-danger">{error?.message}</p>
          
            {
              loading
               && 
               <><div className="spinner-border text-success" role="status">
               <span className="visually-hidden">Loading...</span>
             </div></>
            }
              <p className="text-dark fw-bolder">New User :  <Link className="text-danger text-decoration-none fw-normal" to='/register'>Register Here</Link> </p>
              <Button variant="primary w-50" type="Login">
                Login
              </Button>
            </Form>
          <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

// b644ac
