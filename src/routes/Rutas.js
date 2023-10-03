import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../layouts";
import Homy from "../pages/Homy/Homy";
import AdmonComidas from "../pages/Admon/AdmonComidas";
import AdmonPersonas from "../pages/Admon/AdmonPersonas";
import ListarComidas from "../pages/Admon/ListarComidas";
import ListarPersonas from "../pages/Admon/ListarPersonas";
import Orden from "../pages/Orden/Orden";
import {
  Home,
  Footer,
  formAlumno,
  FormPersonas,
  AdminPersonas,
  Perfil,
  PuestosForm,
  Puesto,
  Login,
  ComidasForm,
  PuestosExp,
  Registrar,
  PuestoVendedor,
  PerfilEdit,
  EditPuesto,


} from "../pages";

export function Rutas() {
  const loadLayouts = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>

      <Route path="/" element={loadLayouts(Layout, Home)} />
      <Route path="/Login" element={loadLayouts(Layout, Login)} />
      <Route path="/Registrar" element={loadLayouts(Layout, Registrar)} />
      <Route path="/Doris" element={loadLayouts(Layout, Homy)} />

      <Route path="/agregarcomidas" element={loadLayouts(Layout, AdmonComidas)} />
      <Route path="/agregarcomidas/:id" element={loadLayouts(Layout, AdmonComidas)} />
      <Route path="/agendadecomidas" element={loadLayouts(Layout, ListarComidas)} />

      
      <Route path="/agregarpersonas" element={loadLayouts(Layout, AdmonPersonas)} />
      <Route path="/agregarpersonas/:id" element={loadLayouts(Layout, AdmonPersonas)} />
      <Route path="/agendadepersonas" element={loadLayouts(Layout, ListarPersonas)} />

      <Route path="/Menu-Doris" element={loadLayouts(Layout, Orden)} />

    </Routes>
  );
}