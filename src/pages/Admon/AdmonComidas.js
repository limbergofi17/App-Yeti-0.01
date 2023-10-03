import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


function AdmonComidas() {
  const variables = {
    _id: "",
    nombre: "",
    apellidos: "",
    sexo: "",
    telefono: ""
  }

  const [programes, setProgrames] = useState(variables);
  const params = useParams();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setProgrames({ ...programes, [name]: value })
  }

  const GuardarDatos = async (e) => {
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/programe', {
      nombre: programes.nombre,
      apellidos: programes.apellidos,
      sexo: programes.sexo,
      telefono: programes.telefono
    }).then(() => {
      toast.success('Registros Guardados!');
    })
    navigate("/agendadecomidas");
  }


  const consultarUnServicio = async (id) => {
    const buscarUno = await Axios.get("/unProgrames/" + id);
    setProgrames(buscarUno.data);
  };



  const actualizarServicio = async () => {
    await Axios.put(`/programe/${params.id}`, programes).then(() => {
      toast.success('Registros Actualizados!');
    });
    navigate("/agendadecomidas")
  };


  const Enviar = (e) => {
    e.preventDefault();
    if (programes._id === "") {
      GuardarDatos();
    } else {
      actualizarServicio();
    }
  };

  useEffect(() => {
    consultarUnServicio(params.id);
  }, [params.id]);


  return (
    <div className="container-fluid p-3">
      <div class="card">

        <div class="card-header"><center>AGREGAR COMIDAS</center></div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre del Platillo
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese el nombre del Platillo"
                  value={programes.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="sexo" class="col-sm-2 col-form-label">
                Descripcion del Platillo
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  id="sexo"
                  placeholder="Ingrese la descripcion del servicio"
                  value={programes.sexo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Precio del Platillo
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingrese el  Precio del Platillo"
                  value={programes.telefono}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Unidades Disponibles
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Ingrese las unidades"
                  value={programes.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>
            <center>
              <div class="">
                <label for="formFile" class="form-label">Agregar foto</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </center>

            <div class="p-2">
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

export default AdmonComidas