import React from 'react';
import contact from '../imagenes/Contactos.jpg'
import Celular from '../imagenes/celular.png'
import Telefono from '../imagenes/telefono.png'
import Correo from '../imagenes/correo.png'


const Contacto = () => (

  <div className="col-12">
    <img width="100%" src={contact}/>
    
  <div className="d-flex">
  <div className="col-6 mt-5" >
  <span className="col-6"><img width="10%" src={Celular}/><a className="contacto-info pl-3" href="tel:36563113">36563113</a></span>
  <span className="col-6"><img width="8%" src={Telefono}/><a className="contacto-info pl-3" href="tel:3331313692"> 3331313692<br></br></a></span>
  <span className="col-12"><img width="10%" src={Correo}/><a className="contacto-info pl-3" href="#">Contacto@AcolumpioI.com.mx<br></br></a></span>
    </div>
    
  <div className="col-6"> 
  <form action="ejemplo.php" method="get">
  <p>Nombre: <br/><input type="text" name="nombre" size="40"/></p>
  <p>Asunto:<br/> <input type="text" name="asunto" min="1900"/></p>
  <p>Cotizacion:<br/> <input type="text" name="cot"/>
  </p>

    <input type="submit" value="Enviar"/>

</form>
    </div>
  </div>
  <div col-12>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5496397460124!2d-103.40867568507237!3d20.728504886161776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af0af4082fbd%3A0xb932626f82e84da9!2sSta.%20Esther%2057A%2C%20Santa%20Margarita1a%20Secc.%2C%2045140%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1585385099860!5m2!1ses-419!2smx"
        width="100%" height="450px"/>
  </div>
  </div>

  )

export default Contacto;
