import React from 'react';
import { Link } from "react-router-dom";
import amortiguadores from '../imagenes/amortiguadores.jpg';
import nosotros from '../imagenes/nosotros.jpg';
import garantia from '../imagenes/Garantia.png';

const Inicio = () => (

<div id="inicio">
    <div id="slide">
      <h1 className="texto-slide">Servicios Rapidos <br></br> y Seguros</h1>
      <Link to="/Servicios"><button className="btn-slide">Ver servicios </button></Link>
    </div>

    <div className="Nosotros d-flex">
      
      <div className="col-6 text-center center">
        <h1 className="p-4">Nosotros</h1>
        <p className="p-2 pl-5 pr-5">Somos una empresa comprometida con el cliente con 30 años de experiencia dentro de la industria automotriz</p>
        <Link to="/Nosotros"><button className="btn-slide">Descubre mas...</button></Link>
      </div>

      <div className="col-6 pl-0 pr-0">
        <img width="100%" src={nosotros}/>
      </div>
      
    </div>

    <div className="Servicios d-flex">

      <div className="col-6 pl-0 pr-0">
        <img width="100%" src={amortiguadores}/>
      </div>
      
      <div className="col-6 text-center center">
        <h1 className="p-4">¿Necesitas ayuda?</h1>
        <Link to="/Contacto"><button className="btn-slide">¡Contactanos!</button></Link>
      </div>
    </div>

    <div className="rojito d-flex col-12">
<img className="position-relative l-3" height="5%" width="5%" src={garantia}/><h2 className="ml-1 mr-1 m-auto ">AMORTIGUADORES NUEVOS Y SEMINUEVOS ORIGINALES (DE AGENCIA)</h2> <button className="garantia-button">CONOCE MAS</button>
    </div>

</div>

  )

export default Inicio;
