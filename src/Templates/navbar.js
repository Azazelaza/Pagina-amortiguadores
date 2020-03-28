import React from 'react';
import { Link } from "react-router-dom";
import logo from '../imagenes/Logo.png';

const Navbar = () => (

<div className="col-12 d-flex navbar">
  <div className="col-2">
    <a href="/"><img width="100%" src={logo}/></a>
  </div>
  <div className="col-10">
      <nav>
        <ul className="menudenavegacion">
            <Link to="/"><li className="navegacion">Inicio</li></Link>
            <Link to="/Servicios"><li className="navegacion">Servicios</li></Link>
            <Link to="/Nosotros"><li className="navegacion">Nosotros</li></Link>
            <Link to="/Promociones"><li className="navegacion">Promociones</li></Link>
            <Link to="/Contacto"><li className="navegacion">Contacto</li></Link>
        </ul>
      </nav>
   </div>
</div>

      
  )

export default Navbar;