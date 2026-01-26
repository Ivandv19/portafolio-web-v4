import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout.tsx";

// Lazy Loading
const Hero = lazy(() => import("@/pages/Hero"));
const Skills = lazy(() => import("@/pages/Skills"));
const Experiencia = lazy(() => import("@/pages/Experiencia"));
const Proyectos = lazy(() => import("@/pages/Proyectos"));
const SobreMi = lazy(() => import("@/pages/SobreMi"));
const Formacion = lazy(() => import("@/pages/Formacion"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const Router = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
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
    </Suspense>
  );
};
