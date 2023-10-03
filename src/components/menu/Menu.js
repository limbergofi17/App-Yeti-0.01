import React from "react";
import usuario from "../../assets/usuario.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();
  const login = () => navigate("/Login");
  const location = useLocation();

  const menuStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F3F1E9", // Color similar a la barra de navegación de Carne Premium XO
    boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 10px", // Aumentamos el espaciado vertical y horizontal moderadamente
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif", // Fuente de la barra de navegación
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "10px", // Espaciado horizontal moderado
    marginLeft: "5px", // Margen izquierdo reducido
    alignItems: "center", // Centra verticalmente los elementos
  };

  const linkBubbleStyle = {
    backgroundColor: "#555", // Color del fondo del contenedor
    color: "#fff", // Color del texto
    padding: "4px 8px", // Espaciado interno moderado
    borderRadius: "10px", // Borde redondeado moderado
    textDecoration: "none",
    fontSize: "10px", // Tamaño de texto moderado
    fontWeight: "bold",
    letterSpacing: "0.8px",
    display: "flex",
    flexDirection: "column", // Coloca el texto debajo de la burbuja
    alignItems: "center", // Centra horizontalmente el texto
    textAlign: "center", // Centra el texto en la burbuja
  };

  const userContainerStyle = {
    display: "flex",
    flexDirection: "column", // Coloca el texto debajo de la imagen
    alignItems: "center", // Centra horizontalmente los elementos
    cursor: "pointer",
    marginRight: "5px", // Margen derecho reducido
  };

  const userImageStyle = {
    width: "20px", // Imagen un poco más grande
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "3px", // Espaciado inferior moderado
  };


}