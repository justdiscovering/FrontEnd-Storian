import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faUser, faList, faSignOutAlt, faPlus, faTachometerAlt, faBook, faCode, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';

import { ToastContainer } from 'react-toastify';

import BooksListContainer from "./components/book-list-container";
import BookForm from "./components/book-form";
import About from './components/about';
import NotFound from './components/not-found';
import LoginForm from './Login/LoginForm';
import RegisterForm from './Login/RegisterForm';

library.add(faEye);
library.add(faEdit);
library.add(faTrash);
library.add(faUser);
library.add(faTachometerAlt);
library.add(faList);
library.add(faSignOutAlt);
library.add(faPlus);
library.add(faBook);
library.add(faCode);
library.add(faQuestionCircle);


const App = () => {

  return (
    <Router>
      <ToastContainer />
      <div className="cont">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="app-logo" src={logo} width="60" height="60" alt="ReactJS" />
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/books" className="nav-link"><FontAwesomeIcon icon='book' />Livros</Link>
              </li>
              <li className="navbar-item">
                <Link to="/book" className="nav-link"><FontAwesomeIcon icon='plus' />Novo livro</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/registro" className="nav-link">Registre-se</Link>
              </li>
            </ul>
            {<ul className="navbar-nav mr-auto pull-right">
              <li className="navbar-item">
                <Link to="/about" className="nav-link"><FontAwesomeIcon icon='question-circle' /></Link>
              </li>
            </ul>}
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/books" component={BooksListContainer} />
            <Route path="/book" component={BookForm} />
            <Route path="/book/:id" component={BookForm} />
            <Route path="/about" component={About} />
            <Route path= "/login" component={LoginForm} />
            <Route path= "/registro" component={RegisterForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
