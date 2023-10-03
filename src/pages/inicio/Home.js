import React, { useEffect } from "react";
import logo from "../../assets/LOGO-DORIS.jpeg";
import fondo from "../../assets/INICIO.jpeg";
import "./Home.css"; // Importa un archivo CSS para estilos
import { Link } from "react-router-dom";
export function Home() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      document.body.style.backgroundImage = `url(${fondo})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundPosition = "center";
    } else {
      document.body.style.backgroundImage = "none";
    }
  }, []);

  return (
    <div className="background-container">
      <div className="overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="col-12 col-md-8 col-lg-6">
              <div className="rounded-square">
                <div className="logo-container">
                  <img src={logo} alt="Logo" className="logo" />
                  <li><Link class='dropdown' to='/Login'>Next</Link></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
