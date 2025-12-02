import React from "react";
import { Routes, Route } from "react-router-dom";
import Portada from "./pages/Portada.jsx";
import Inicio from "./pages/Inicio.jsx";
import Directorio from "./pages/Directorio.jsx";
import Oferta from "./pages/Oferta.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portada />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/directorio" element={<Directorio />} />
      <Route path="/oferta" element={<Oferta />} />

    </Routes>
  );
};

export default App;
