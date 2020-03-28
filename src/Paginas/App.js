import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/App.css';
import { Switch, Route } from "react-router-dom";
import Contacto from './Contacto';
import Inicio from './Inicio';
import Promociones from './Promocionesdelmes';
import Sobrenosotros from './Sobrenosotros';
import Servicios from './Servicio';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/Servicios" component={Servicios} />
      <Route path="/Nosotros" component={Sobrenosotros} />
      <Route path="/Promociones" component={Promociones} />
      <Route path="/Contacto" component={Contacto} />
    </Switch>

  );
}
export default App;
