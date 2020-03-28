import React from 'react';
import { Link } from "react-router-dom";
import logo from '../imagenes/Logo.png';

const Footer = () => (
<footer className="d-flex footer-black">
        <div className="col-1"></div>
          <div className="col-4">
            <img className="logo-footer" src={logo}/>
            <p>Somos una empresa dedicada completamente a darle el mejor servicio a cliente y hacer las cosas en tiempo y forma de excelente calidad</p>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
          <h3>Contacto</h3>
          Ubicacion: Av.Santa Esther 57A Col.Santa Margarita CP 45140 Zapopan, Jalisco<br></br>
          Correo: <a className="numeros" href="#">Contacto@AcolumpioI.com.mx<br></br></a>
          Tel: <a className="numeros" href="tel:36563113">36563113<br></br></a>
          Cel: <a className="numeros" href="tel:3331313692"> 3331313692<br></br></a>
          </div>
          </footer>
  )

export default Footer;