import React from "react";
import { GiCampingTent } from "react-icons/gi";
import "/workspace/project-final/src/front/styles/seccion4.css";

const Seccion4 = () => {
  return (
    <>
      <div
        id="seccion4"
        className="row ps-5 mt-5 py-5 bg-white"
      >
        <a name="ancla-3"></a>
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <h3 className="recomendados fs-1 mx-auto">Hospedaje Recomendado</h3>
        </div>
        <div className="under col-sm-12 col-md-6 col-lg-4 pb-5 mx-auto">
        </div>
      </div>
  <div className="container p-5">
    <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body">
                <h5 className="card-title mx-auto  fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto">Cajon del Maipo Lodge</p>
                <button className="regis4 mx-auto"><a href="#ancla-1">¡Registrate!</a></button>
              </div> 
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://exp.cdn-hotels.com/hotels/16000000/15550000/15544900/15544814/593fa7ec_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body">
                <h5 className="card-title mx-auto fs-4">$15% de descuento</h5>
                <p className="card-text mx-auto">Hotel Magnolia</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/95496768.jpg?k=37da8dc8685f0260cee98fb5bfe76a779953d523fa5299a624dafabe22a34d7e&o=&hp=1"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body">
                <h5 className="card-title mx-auto fs-4">$20% de descuento</h5>
                <p className="card-text mx-auto ">Hotel Boutique Castillo Rojo</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>    
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d5/dc/df/maison-italia-1029.jpg"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
          <div className="card-body">
            <div className="box">
            <h5 className="card-title mx-auto fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto">Maison Italia 1029</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>

  );
};
export default Seccion4;

    {/*<>
    
      <div className="container-fluid row">
        <div
          className="card mx-auto mb-3"
          style={{ maxWidth: 440 }}
        >
          <div className="hotel row">
            <div className="col-md-5 wrapthumbnail">
              <img
                id="hoteles"
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid "
              />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <h5 className="card-title mx-auto  fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto">Cajon del Maipo Lodge</p>
                <button className="regis4 mx-auto my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row">
            <div className="col-md-5 wrapthumbnail">
              <img
                src="https://exp.cdn-hotels.com/hotels/16000000/15550000/15544900/15544814/593fa7ec_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                className="imagen img-fluid"
              />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <h5 className="card-title mx-auto fs-4">$15% de descuento</h5>
                <p className="card-text mx-auto">Hotel Magnolia</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row ">
            <div className="col-md-5 wrapthumbnail">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/95496768.jpg?k=37da8dc8685f0260cee98fb5bfe76a779953d523fa5299a624dafabe22a34d7e&o=&hp=1"
                className="imagen img-fluid"
              />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <h5 className="card-title mx-auto fs-4">$20% de descuento</h5>
                <p className="card-text mx-auto ">Hotel Boutique Castillo Rojo</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mx-auto mb-3" style={{ maxWidth: 440 }}>
          <div className="hotel row ">
            <div className="col-md-5 wrapthumbnail">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d5/dc/df/maison-italia-1029.jpg"
                className="imagen img-fluid "
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title mx-auto fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto">Maison Italia 1029</p>
                <button className="regis4 mx-auto  my-5"><a href="#ancla-1">¡Registrate!</a></button>
              </div>
            </div>
          </div>
        </div>
</div>*/}