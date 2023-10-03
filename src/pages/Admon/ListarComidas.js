import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";

import { Link, useNavigate, useParams } from "react-router-dom";

function ListarComidas() {
  const [programes, setProgrames] = useState([]);

  const navigate = useNavigate();

  const consultarProgrames = async () => {
    const consultar = await Axios.get("/programes");
    console.log(consultar.data);
    setProgrames(consultar.data);
  };

  const deleteProgrames = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar a la persona?")) {
      const eliminar = await Axios.delete("/programe/" + id);
    }
    consultarProgrames();
  };

  useEffect(() => {
    consultarProgrames();
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center text-warning">
        <h1>Administración de Platillos</h1>
      </div>
      <center>
        <button type="button" class="btn btn-success">
          <Link class="dropdown-item" to="/agregarcomidas">
            Agregar Comida...
          </Link>
        </button>
      </center>
      <br />
      <div class="container text-center">
        <div class="row row-cols-12">
          <table class="table table-bordered border-dark table-warning table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre del Platillo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Unidades Disponibles</th>
                <th scope="col">Editar</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {programes.map((programe) => {
                return (
                  <tr>
                    <th scope="row">-</th>
                    <td>{programe.nombre}</td>
                    <td>{programe.sexo}</td>
                    <td>${programe.telefono}.00</td>
                    <td>{programe.apellidos}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() =>
                          navigate(`/agregarcomidas/${programe._id}`)
                        }
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteProgrames(programe._id)}
                      >
                        Delete
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

export default ListarComidas