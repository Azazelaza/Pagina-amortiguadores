import React from 'react';
import iconopromo from '../imagenes/iconopromo.png';
import logo1 from '../imagenes/GROB.png';
import logo2 from '../imagenes/KYB.png';
import logo3 from '../imagenes/monroe.svg';
import logo4 from '../imagenes/Duralast.png';
import logo5 from '../imagenes/SYD.png';

const Promocionesdelmes = () => (

  <React.Fragment>
    <h1 className="text-danger text-center">Promociones en seminuevos (6 meses de garantia)</h1>
    <div className="d-flex row col-12">
  <div className="col-6 barrita-derecha">
    <p>Aprovecha nuestra promocion en amortiguadores seminuevos de las siguientes marcas</p>
<ul className="llamativo">
  <li>Tida</li>
  <li>Aveo</li>
  <li>Versa</li>
  <li>Acttitud</li>
  <li>Figo</li>
  <li>Spark</li>
  <li>March</li>
  <li>Tsuru</li>
  <li>Pointer</li>
  <li>Chevy</li>
  <li>Golf</li>
  <li>GOOL</li>
  <li>Entre muchos otros pregunta por los tuyos</li>
</ul>
</div><div className="position-absolute proomociones">
<img className="d-block ma-a" width="20%" src={iconopromo}/>
    <h3>
      Delanteros $1,200<br/>
      Traseros   $900<br/>
      Los 4 por 1,800 <br/>(Delanteros y traseros)
      </h3>
      </div>
<div className="col-6 barrita-derecha">
<span className="llamativo">
<h3>Pick up</h3>
<li>Nissa</li>
<li>S-10</li>
<li>Ranger</li>
<li>Toyota</li>
<p>1,400 X LOS 4 (Delanteros y traseros)</p>
<li>-------------------</li>
<li>A-4</li>
<li>FOCUS</li>
<li>POINTER</li>
<li>IKON</li>
<p>1,600 X LOS 4 (Delanteros y traseros)</p>
<li>Pregunta por los de tu interes</li>
</span>
      </div>
      <div className="rojito d-flex col-12"><h3 className="ml-1 mr-1 mt-3 mb-3 ">HASTA 4 AÑOS DE GARANTIA EN AMORTIGUADORES NUEVOS DE LAS SIGUIENTES MARCAS</h3></div>
      <img width="30%" src={logo1}/>
      <img width="40%" src={logo2}/>
      <img width="30%" src={logo3}/>
      <img width="50%" src={logo4}/>
      <img width="50%" src={logo5}/>
    
   </div>
    
  </React.Fragment>

  )

export default Promocionesdelmes;
