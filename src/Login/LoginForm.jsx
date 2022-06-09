import React from 'react';
import {Link} from 'react-router-dom';
import './LoginAndRegister.css';


const LoginForm = ()=>{
  return (
    <>
      <div className="Login-container">
        <h1>Login em Storian</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="username">Nome de usuário</label>
              <input className="form-control" id="username" type="text" placeholder="Insira o seu nome de usuário" name="username" required></input>
            </div>

            <div>
              <label className="form-label" for="Password">Senha</label>
              <input className="form-control" id="Password" type="password" placeholder="Insira a sua senha" name="Password" required></input>
            </div>
            <button className="btn btn-md btn-warning">Login</button>

        </form>
        <Link exact to="/registro" activeClassName="active">Não tem uma conta ainda? Registre-se.</Link>
      </div>
    </>
  )
};


export default LoginForm;
