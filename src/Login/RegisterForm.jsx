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
              <label className="form-label" for="username">Nome</label>
              <input className="form-control" id="username" type="text" placeholder="Insira o seu nome" name="username" required></input>
            </div>

            <div>
              <label className="form-label" for="idade">Idade</label>
              <input className="form-control" id="idade" type="number" placeholder="Insira a sua idade" name="idade" required></input>
            </div>

            <div>
              <label className="form-label" for="telefone">Telefone</label>
              <input className="form-control" id="telefone" type="text" placeholder="Insira o seu telefone" name="telefone" required></input>
            </div>

            <div>
              <label className="form-label" for="cidade">Cidade</label>
              <input className="form-control" id="cidade" type="text" placeholder="Insira a sua cidade" name="cidade" required></input>
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
