import React from 'react';
import './LoginAndRegister.css';
import NavBar from './NavBar';
import Footer from './Footer';
import RegisterForm from './RegisterForm';




const Register = () =>{
  return (
    <div className="Body">
      <NavBar />
      <RegisterForm/>
      <Footer/>
    </div>
  )
}


export default Register;
