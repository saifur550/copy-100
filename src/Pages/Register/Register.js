import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import img1 from "../../image/svg/img6.svg";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword ] = useState('')
    const [error , setError] = useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const handleEmailBlur =(event)=>{
        // console.log('click email input');
        setEmail(event.target.value);
    }

    const handlePassWordBlur =(event)=>{
        // console.log('click password');
        setPassword(event.target.value);
    }


    const handleConfirmPassWordBlur = (event)=>{
      setConfirmPassword(event.target.value)
    }

    // user create 


    if(user){
      navigate('/services')
    }



    const handleSubmitForm =(event)=>{
      event.preventDefault()
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if(password !== confirmPassword){
        setError(' Enter Password Does not match');
        return;
      }else{
        setError('password match');
      }

      //password validation

      if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
        setError('password should contain at least one special character')
        return;
      }

      // password length check 
      if(password.length<6){
        setError('password Must be characters or longer')
        return;
      }
  
      setValidated(true);
      setError('')


    
        console.log('submit' ,  email , password , confirmPassword);
        createUserWithEmailAndPassword(email , password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            setEmail('')
            setPassword('')
        })
        .catch(error =>{
            console.error(error);
            setError(error.message)
        })
     
    }
  
    return (
        <div className='register'>
            <div className="bg-color2 ">
      <Container>
        <Row className="justify-content-md-center pt-5 pb-5 ">
          <Col>
            <img className="img-fluid pt-1   " src={img1} alt="" />
          </Col>
          <Col className="bg-dark  rounded">
            <h4 className="pt-5 text-white  text-center">Register Please !</h4>

            <Form noValidate validated={validated} onSubmit={handleSubmitForm} className="w-75 mx-auto ">
         

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-white' >Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Your Email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                Please provide a valid Email.
            </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-white' >Password</Form.Label>
                <Form.Control onBlur={handlePassWordBlur} type="password" placeholder=" Enter Your Password" required />
                <Form.Control.Feedback type="invalid">
                 Please provide a valid password.
               </Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className='text-white' > Confirm Password</Form.Label>
                <Form.Control onBlur={handleConfirmPassWordBlur} type="password" placeholder=" Re-Enter Password" required />
                <Form.Control.Feedback type="invalid">
                 Please provide a valid password.
               </Form.Control.Feedback>
              </Form.Group>

              <p className="text-white fw-bolder"> Already Register :  <Link className="text-danger fw-normal text-decoration-none" to='/login'> Login Here</Link> </p>
              <p className="text-danger">{error}</p>


              <Button variant="primary w-50" className='mb-5' type="submit">
              Register
              </Button>
            </Form>
            <SocialLogin></SocialLogin>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    );
};

export default Register;