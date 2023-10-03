import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";

import { Link, useNavigate, useParams } from "react-router-dom";

function ListarPersonas() {
    const [personas, setPersonas] = useState([]);


    const navigate = useNavigate();

    const consultarPersonas = async () => {
        const consultar = await Axios.get("/personas");
        console.log(consultar.data)
        setPersonas(consultar.data);
    };

    const deletePersonas = async (id) => {
        if (window.confirm("¿Esta seguro de eliminar a la persona?")) {
            const eliminar = await Axios.delete("/persona/" + id);
        }
        consultarPersonas();
    };

    useEffect(() => {
        consultarPersonas();
    }, []);

    return (
        <div className="container-fluid">
            <div className="text-center text-warning">
                <h1>Administración de personas</h1>
            </div>
            <center>
                <button type="button" class="btn btn-success">
                    <Link class="dropdown-item" to="/agregarpersonas">
                        Agregar personas...
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
                                <th scope="col">Contraseña</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido Paterno</th>
                                <th scope="col">Apellido Materno</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">edad</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personas.map((persona) => {
                                return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{persona.curp}</td>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.apellidos}</td>
                                        <td>{persona.fechana}</td>
                                        <td>{persona.telefono}</td>
                                        <td>{persona.email}</td>
                                        <td>{persona.sexo}</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-success"
                                                onClick={() => navigate(`/agregarpersonas/${persona._id}`)}
                                            >
                                                Editar
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-danger"
                                                onClick={() => deletePersonas(persona._id)}
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

export default ListarPersonas