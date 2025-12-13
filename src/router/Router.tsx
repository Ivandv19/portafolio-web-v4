import { Routes, Route } from "react-router-dom";
import Skills from "../pages/Skills.tsx";
import NotFound from "../pages/NotFound.tsx";
import { Layout } from "../components/Layout/Layout.tsx";
import Hero from "../pages/Hero.tsx";
import Experiencia from "../pages/Experiencia.tsx";
import Proyectos from "../pages/Proyectos.tsx";
import SobreMi from "../pages/SobreMi.tsx";
import Formacion from "../pages/Formacion.tsx";
import Contacto from "../pages/Contacto.tsx";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
