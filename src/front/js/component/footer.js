import React from "react";
import { GoLocation, GoArrowUp} from "react-icons/go";
import { BsTelephone, BsInstagram} from "react-icons/bs";
import "/workspace/project-final/src/front/styles/footer.css";

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <a name="ancla-4"></a>
        <div className="col-sm-12 col-md-6">
          <h6 className="contacto ms-5">Contacto</h6>
          <ul>
          <ol className="iconsfoot me-5"> <GoLocation/> Av. Manquehue Sur 350, Oficina 110, Las Condes</ol>
            <ol className="iconsfoot me-5"> <BsTelephone/> +569 394674587</ol>
            <ol> <BsInstagram/> T.Social</ol>
            
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Explora</h6>
          <ul className="footer-links">
            <li>
              <a href="#ancla-2">Recomendado Visitar</a>
            </li>
            <li>
              <a href="#ancla-3">Hoteles Recomendados</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>¿Quienes Somos?</h6>
          <ul className="footer-links">
            <li>
              <a href="https://github.com/cburibe" target="_blank">
                Benjamin Uribe
              </a>
            </li>
            <li>
              <a href="https://github.com/InTr0p" target="_blank">
                Christian Olivares
              </a>
            </li>
            <li>
              <a href="https://github.com/Robinsoncifuentes" target="_blank">
                Robinson Cifuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © 2022 All Rights Reserved by
            <a href="#"> TurismoSocial</a>.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <GoArrowUp/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
