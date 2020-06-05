import React from 'react';
import tallerfuera from '../imagenes/tallerfuera.jpeg';
import { Slide } from 'react-slideshow-image';
import '../Css/nosotros.css'
import slide1 from '../imagenes/slide_1.jpeg';
import slide2 from '../imagenes/slide_2.jpeg';
import slide3 from '../imagenes/slide_3.jpeg';
import slide4 from '../imagenes/slide_4.jpeg';

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Sobrenosotros = () => (

  <div className="col-12">
    <h1 className="text-center">Sobre Nosotros</h1>
    <div className="col-12 d-block ma-a">
    <p className="nosotrostxt text-center d-block ma-a col-12">Somos una empresa dedicada completamente a darle el mejor servicio a cliente y hacer las cosas en tiempo y forma de excelente calidad. <br></br>30 AÑOS nos respaldan y nuestras multiples referencias de nuestros clientes totalmente satisfechos.
    </p>  
      <img width="100%" src={tallerfuera}/>
      </div>

      <h1 className="text-center">Conoce nuestras instalaciones</h1>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
              <img src={slide1} />
          </div>
          <div className="each-slide">
            <img src={slide2} />
         </div>
          <div className="each-slide">
            <img src={slide3} />
          </div>
          <div className="each-slide">
            <img src={slide4} />
          </div>
          </Slide>
      </div>


  </div>

  )

export default Sobrenosotros;
