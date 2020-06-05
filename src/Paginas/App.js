import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import '../Css/App.css';
import { Switch, Route, Router } from "react-router-dom";
import Contacto from './Contacto';
import Inicio from './Inicio';
import Promociones from './Promocionesdelmes';
import Sobrenosotros from './Sobrenosotros';
import Servicios from './Servicio';

function App() {
  return (
<React.Fragment>
  <Link to="/Contacto"> <span className="mesesgarantia">Revisión Gratuita</span> </Link>
  <Link to="/Contacto"> <span className="mesesgarantia2">Aceptamos pagos con tarjeta</span> </Link>
  <a> <span className="wasap">Nuestro Whatsapp</span> </a>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/Servicios" component={Servicios} />
      <Route path="/Nosotros" component={Sobrenosotros} />
      <Route path="/Promociones" component={Promociones} />
      <Route path="/Contacto" component={Contacto} />
    </Switch>
    </React.Fragment>

  );
}
export default App;
