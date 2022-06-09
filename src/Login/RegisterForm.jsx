import React from 'react';
import {Link} from 'react-router-dom';
import './LoginAndRegister.css';


const RegisterForm = ()=>{
  return (
    <>
      <div className="Login-container">
        <h1>Registre-se em Storian</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="username">Nome de Usuário</label>
              <input className="form-control" id="username" type="text" placeholder="Insira o seu nome de usuário" name="username" required></input>
            </div>

            <div>
              <label className="form-label" for="Email">Email</label>
              <input className="form-control" id="Email" type="email" placeholder="Insira o seu email" name="Email" required></input>
            </div>

            <div>
              <label className="form-label" for="Password">Senha</label>
              <input className="form-control" id="Password" type="password" placeholder="Insira a sua senha" name="Password" required></input>
            </div>

            <button className="btn btn-md btn-warning">Login</button>

        </form>
        <Link activeClassName="active" exact to="/login">Já tem uma conta? Faça o login.</Link>
      </div>
    </>
  )
};




export default RegisterForm;
