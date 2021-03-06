import React from "react";
import "/workspace/project-final/src/front/styles/seccion4.css";

const Seccion4 = () => {
  return (
    <>
      <div
        id="seccion4"
        className="row ps-5 mt-5 py-5 bg-light"
      >
        <a name="ancla-3"></a>
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <h3 className="recomendados fs-1 mx-auto">Hospedaje Recomendado</h3>
        </div>
        <div className="under col-sm-12 col-md-6 col-lg-4 pb-5 mx-auto">
        </div>
      </div>
  <div className="container bg-light p-5">
    <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
      <div id="hotels" className="col">
        <div className="card mx-auto h-100 shadow">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://exp.cdn-hotels.com/hotels/23000000/22440000/22438500/22438422/42b32580_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body mx-auto">
                <h5 className="card-title mx-auto  fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto">Cajon del Maipo Lodge</p>
                <button className="regis4 ms-5 my-5"><a href="#ancla-1">┬íRegistrate!</a></button>
              </div> 
        </div>
      </div>
      <div id="hotels" className="col">
        <div className="card mx-auto h-100 shadow">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://exp.cdn-hotels.com/hotels/16000000/15550000/15544900/15544814/593fa7ec_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body mx-auto">
                <h5 className="card-title mx-auto fs-4">$15% de descuento</h5>
                <p className="card-text mx-auto">Hotel Magnolia</p>
                <button className="regis4 mx-auto ms-5 my-5"><a href="#ancla-1">┬íRegistrate!</a></button>
              </div>
        </div>
      </div>
      <div id="hotels" className="col">
        <div className="card mx-auto h-100 shadow">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/95496768.jpg?k=37da8dc8685f0260cee98fb5bfe76a779953d523fa5299a624dafabe22a34d7e&o=&hp=1"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
            <div className="card-body mx-auto">
                <h5 className="card-title mx-auto text-center fs-4">$20% de descuento</h5>
                <p className="card-text mx-auto text-center">Hotel Boutique Castillo Rojo</p>
                <button className="regis4 mx-auto ms-5 my-5"><a href="#ancla-1">┬íRegistrate!</a></button>
              </div>    
        </div>
      </div>
      <div id="hotels" className="col">
        <div className="card mx-auto h-100 shadow">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img
                className="imagen img-fluid"
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/d5/dc/df/maison-italia-1029.jpg"
                alt="Another Image zoom-on-hover effect"
              />
            </div>
          </div>
          <div className="card-body mx-auto">
            <div className="box">
            <h5 className="card-title mx-auto text-center fs-4">$30% de descuento</h5>
                <p className="card-text mx-auto text-center">Maison Italia 1029</p>
                <button className="regis4 mx-auto ms-5 my-5"><a href="#ancla-1">┬íRegistrate!</a></button>
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