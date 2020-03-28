import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Link } from "react-router-dom";
import './Css/index.css';
import App from './Paginas/App';
import Navbar from './Templates/navbar';
import Footer from './Templates/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imagenes/Logo.png';
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <div className="todalapagina">
      <Link to="/Promociones"> <div className="col-12 anuncio text-center">Checa nuestras promociones del mes</div></Link>
        <Navbar/>
        <main class="bd-masthead" id="content" role="main">
          <App/>
        </main>
      <Footer/>
      </div>
  </Router>, 
document.getElementById("root"))