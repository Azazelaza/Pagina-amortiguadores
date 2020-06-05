import React from 'react';
import contact from '../imagenes/Contactos.jpg'
import Celular from '../imagenes/celular.png'
import Telefono from '../imagenes/telefono.png'
import Correo from '../imagenes/correo.png'


const Contacto = () => (
  <React.Fragment>
<img width="100%" src={contact}/>
  <div className="col-12">
    
    
  
  <div className="col-12 mt-5" >
    <div className="d-flex" >
      <div className="col-4 d-block maaa-a"><img className="d-block ma-a" width="50%" src={Celular}/></div>
      <div className="col-4 d-block maaa-a"><img className="d-block ma-a" width="30%" src={Telefono}/></div>
      <div className="col-4 d-block maaa-a"><img className="d-block ma-a" width="40%" src={Correo}/></div>
    </div>
    <div className="d-flex" >
      <div className="col-4 d-block ma-a"><a className="contacto-info pl-3 text-center d-block ma-a" href="tel:36563113"><h1>36563113</h1></a></div>
      <div className="col-4 d-block ma-a"><a className="contacto-info pl-3 text-center d-block ma-a" href="tel:3331313692"> 3331313692</a></div>
      <div className="col-4 d-block ma-a"><a className="contacto-info pl-3 text-center d-block ma-a" href="#">Contacto@Acolumpio1.com.mx</a></div>{/* Liviglez75@gmail.com */}
      </div>
    </div>
    <h4 className="text-warning text-center">
      Horarios <br/>
      Lunes a viernes 9:00 a 18:00<br/>
      Sabados 9:00 a 15:00 <br/>
      Horario corrido
      </h4>
    
  <div className="col-12"> 
  <form className="d-block" action="ejemplo.php" method="get">
  <h3>Nombre <br/><input type="text" name="nombre" size="40"/></h3>
  <h3>Asunto<br/> <input type="text" name="asunto" size="40"/></h3>
  <h3>Mensaje<br/> <textarea className="cotiza" type="text" size="40" name="cot"></textarea> </h3>

    <input className="buton-enviar" type="submit" value="Enviar"/>

</form>
    </div>
  <div col-12>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.5496397460124!2d-103.40867568507237!3d20.728504886161776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af0af4082fbd%3A0xb932626f82e84da9!2sSta.%20Esther%2057A%2C%20Santa%20Margarita1a%20Secc.%2C%2045140%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1585385099860!5m2!1ses-419!2smx"
        width="100%" height="450px"/>
  </div>
  </div>
  </React.Fragment>
  )

export default Contacto;
