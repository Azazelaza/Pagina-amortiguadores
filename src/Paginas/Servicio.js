import React from 'react';
import buenservicio from '../imagenes/buenservicio.jpg';
import frenosamor from '../imagenes/frenosamor.jpeg'
const Servicio = () => (

  <div>
    <h1 className="text-center">Nuestros servicios</h1>
    <p className="text-center">Ofrecemos una variedad de servicios dentro de nuestras instalaciones</p>
    <div className="d-flex">
    <div className="col-6">
    <img width="100%" src={buenservicio}/>
    </div>
    <div className="col-12">
    <h1 className="col-6 text-center">Servicio de suspensiones</h1>
    <div className="col-6 d-flex">
    <ul>
    <li>Modificacion amortiguadores</li>
    <li>rotulas</li>
    <li>vieletes</li>
    <li>terminales de direccion</li>
    <li>Bujes</li>
    <li>Orquillas</li>
    <li>Brazo Pitma</li>
    </ul>
    <ul>
    <li>Brazo Auxiliar</li>
    <li>Resortes</li>
    <li>Maza</li>
    <li>Bases Amortiguadoras</li>
    <li>Baleros</li>
    <li>Suspensiones</li>
    <li>Frenos</li>
    
    </ul>
      </div>
      </div>
      </div>

      <div className="col-12 d-flex">
        <div className="col-6">
        <h2 className="text-center mt-4">Prueba nuestro servicio de frenos</h2>
        <p className="text-center col-8 ma-a d-block mb-3">Nuestro servicio de frenos es uno de los mejores por lo cual podras frenar en cualquier situacion inconveniente</p>
        <button className="d-block ma-a">Contactano</button>
        </div> 
        <div className="col-6">
        <img width="100%" src={frenosamor} />
      </div>
      </div>
      
      </div>
    
  )

export default Servicio;
