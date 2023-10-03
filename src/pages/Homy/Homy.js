import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link } from "react-router-dom";
import Barramenu from '../Barramenu/Barramenu';
//import './Homy.css';


function Homy() {
    // Estado para almacenar los datos de "programes".
    const [programes, setProgrames] = useState([]);

    // Función para consultar los datos de "programes".
    const consultarProgrames = async () => {
        try {
            // Realiza una solicitud GET para obtener datos de "programes".
            const consultar = await Axios.get("/programes");

            // Establece los datos obtenidos en el estado.
            setProgrames(consultar.data);
        } catch (error) {
            // Maneja errores aquí, por ejemplo, mostrando un mensaje de error al usuario o registrando el error en la consola.
            console.error('Error al consultar los datos de "programes":', error);
        }
    };

    // Se utiliza useEffect para llamar a la función consultarProgrames cuando el componente se monta por primera vez ([] como dependencia).
    useEffect(() => {
        consultarProgrames();
    }, []);


    return (
        <div>
            <Barramenu />

            <div class="container text-center p-2">
                <div class="row row-cols-4">


                {programes.map((programe) => {
                    return (
                            <div class="col p-2">
                                <div class="card h-100">
                                    <img src="https://laroussecocina.mx/wp-content/uploads/2018/01/Camarones-a-la-diabla-001-Larousse-Cocina.jpg.webp" class="card-img-custom" alt="..."  height='250px'/>
                                    <div class="card-body">
                                        <p class="card-title">{programe.nombre}</p>
                                        <p class="card-text">${programe.telefono}.00</p>
                                        <Link type="button" class="btn btn-warning" to="...">
                                            Ordenar
                                        </Link>
                                    </div>
                                </div>
                            </div>                       
                    );
                    
                })}
                </div>
                </div>
            </div>
            );
}


            export default Homy