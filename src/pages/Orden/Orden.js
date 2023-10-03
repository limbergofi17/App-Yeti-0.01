import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";
import "./Orden.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function Orden() {
  const [programes, setProgrames] = useState([]);

  const navigate = useNavigate();

  const consultarProgrames = async () => {
    const consultar = await Axios.get("/programes");
    console.log(consultar.data);
    setProgrames(consultar.data);
  };

  useEffect(() => {
    consultarProgrames();
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>Menu</h1>
      </div>
      <br />
      <div class="container text-center">
        <div class="row row-cols-12">
          <table class="table table-bordered border-dark table-warning table-hover">
            <thead>
              <tr>
                <th class="Tablita" alt="...">#</th>
                <th class="Tablita" alt="...">Platillos</th>
                <th class="Tablita" alt="..."></th>
                <th class="Tablita" alt="..."> Precios </th>
                <th class="Tablita" alt="...">+</th>
              </tr>
            </thead>
            <tbody>
              {programes.map((programe) => {
                return (
                  <tr>
                    <th class="Tablita" >{1}</th>
                    <td class="Tablita p-4">{programe.nombre}</td>
                    <td class="Tablita">
                      <img src="https://cdn0.recetasgratis.net/es/posts/9/9/6/camarones_a_la_diabla_31699_orig.jpg" class="card-img-custom1" alt="..." />
                    </td>
                    <td class="Tablita p-4" > ${programe.telefono}.00 </td>
                    <td class="Tablita p-4" >
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() =>
                          navigate(`/Ordenar/${programe._id}`)
                        }
                      >
                        Ordenar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Orden