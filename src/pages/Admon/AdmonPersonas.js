import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

function AdmonPersonas() {
    const variables = {
        _id: "",
        curp: "",
        nombre: "",
        apellidos: "",
        fechana: "",
        sexo: "",
        telefono: "",
        email: ""
    };

    const [personas, setPersonas] = useState(variables);
    const params = useParams();
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setPersonas({ ...personas, [name]: value });
    }

    const GuardarDatos = async (e) => {
        //const formulario=document.getElementById("personales");
        //const formData=new FormData(formulario);
        await Axios.post("/guardarPersona", {
            curp: personas.curp,
            nombre: personas.nombre,
            apellidos: personas.apellidos,
            fechana: personas.fechana,
            sexo: personas.sexo,
            telefono: personas.telefono,
            email: personas.email
        }).then(() => {
            toast.success('Registros Guardados!');
        });
        navigate("/agendadepersonas");
    };

    const consultarUnaPersona = async (id) => {
        const buscarUno = await Axios.get("/unaPersona/" + id);
        setPersonas(buscarUno.data);
    };

    const actualizarPersonas = async () => {
        await Axios.put(`/unPersonas/${params.id}`, personas).then(() => {
            toast.success("Se actualizaron los datos");
        });
        navigate("/agendadepersonas");
    };

    const Enviar = (e) => {
        e.preventDefault();
        if (personas._id === "") {
            GuardarDatos();
        } else {
            actualizarPersonas();
        }
    };

    useEffect(() => {
        consultarUnaPersona(params.id);
    }, [params.id]);

    return (
        <div className="container-fluid p-3">
            <div class="card">
                <div class="card-header">Datos personales</div>
                <div class="card-body">
                    <form class="row g-3 p-2" onSubmit={Enviar}>
                        <div class="mb-3 row">
                            <label for="curp" class="col-sm-2 col-form-label">
                                Contraseña
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    name="curp"
                                    class="form-control"
                                    id="curp"
                                    placeholder="Ingrese su Contraseña"
                                    value={personas.curp}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="nombre" class="col-sm-2 col-form-label">
                                Nombre
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Ingrese su Nombre"
                                    value={personas.nombre}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="apellidos" class="col-sm-2 col-form-label">
                                Apellido Paterno
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="apellidos"
                                    id="apellidos"
                                    placeholder="Ingrese su Apellido Paterno"
                                    value={personas.apellidos}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="apellidos" class="col-sm-2 col-form-label">
                            Apellido Materno
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fechana"
                                    id="fechana"
                                    placeholder="Ingrese su Apellido Materno"
                                    value={personas.fechana}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="telefono" class="col-sm-2 col-form-label">
                                Teléfono
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="telefono"
                                    id="telefono"
                                    placeholder="Ingrese su telefono"
                                    value={personas.telefono}
                                    onChange={onChange}
                                />
                            </div>
                            </div>
                            <div class="mb-3 row">
                            <label for="telefono" class="col-sm-2 col-form-label">
                                Correo
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Ingrese su Correo"
                                    value={personas.email}
                                    onChange={onChange}
                                />
                            </div>
                            </div>
                            <div class="mb-3 row">
                            <label for="telefono" class="col-sm-2 col-form-label">
                                Edad
                            </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="sexo"
                                    id="sexo"
                                    placeholder="Ingrese su Edad"
                                    value={personas.sexo}
                                    onChange={onChange}
                                />
                            </div>
                            </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdmonPersonas