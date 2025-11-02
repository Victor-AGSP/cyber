import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Menu from './components/menu';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import PageTransition from './components/PageTransition';
import './styles/transitions.css';

const Inicio = lazy(() => import('./components/inicio'));
const Servicios = lazy(() => import('./components/services'));
const Cursos = lazy(() => import('./components/cursos'));
const Pages = lazy(() => import('./components/pages'));
const Privacidad = lazy(() => import('./components/privacidad'));
const Terminos = lazy(() => import('./components/terminos'));
const FormateoOptimizacion = lazy(() => import('./components/services/format'));
const DesarrolloPaginasWeb = lazy(() => import('./components/services/devweb'));
const DesarrolloAplicaciones = lazy(() => import('./components/services/devapp'));
const RecuperacionInformacion = lazy(() => import('./components/services/recovinf'));
const ConsultoriaCiberseguridad = lazy(() => import('./components/services/conseg'));
const SoporteTecnico = lazy(() => import('./components/services/tecs'));
const Contact = lazy(() => import('./components/contact'));

function App() {
  return (
    <Router>
  <ScrollToTop />
      <Menu />
  <Suspense fallback={<div style={{ padding: 40, minHeight: '60vh', background: 'var(--page-bg)' }}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<PageTransition><Inicio /></PageTransition>} />
          <Route path="/servicios" element={<PageTransition><Servicios /></PageTransition>} />
          <Route path="/cursos" element={<PageTransition><Cursos /></PageTransition>} />
          <Route path="/proyectos" element={<PageTransition><Pages /></PageTransition>} />
          <Route path="/privacidad" element={<PageTransition><Privacidad /></PageTransition>} />
          <Route path="/terminos" element={<PageTransition><Terminos /></PageTransition>} />
          <Route path="/formateo-optimizacion" element={<PageTransition><FormateoOptimizacion /></PageTransition>} />
          <Route path="/desarrollo-paginas-web" element={<PageTransition><DesarrolloPaginasWeb /></PageTransition>} />
          <Route path="/desarrollo-aplicaciones" element={<PageTransition><DesarrolloAplicaciones /></PageTransition>} />
          <Route path="/recuperacion-informacion" element={<PageTransition><RecuperacionInformacion /></PageTransition>} />
          <Route path="/consultoria-ciberseguridad" element={<PageTransition><ConsultoriaCiberseguridad /></PageTransition>} />
          <Route path="/soporte-tecnico" element={<PageTransition><SoporteTecnico /></PageTransition>} />
          <Route path="/contacto" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
