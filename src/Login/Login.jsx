import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LoginForm from '../LoginForm';
import './LoginAndRegister.css';





const Login = ()=>{
  return (
    <div className="Body">
      <NavBar />
      <LoginForm/>
      <Footer/>
    </div>
  )
};


export default Login;