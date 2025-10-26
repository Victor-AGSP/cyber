import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Menu from './components/menu';
import Servicios from './components/services';
import Cursos from './components/cursos';
import Pages from './components/pages';
import Footer from './components/footer';
import Privacidad from './components/privacidad';
import Terminos from './components/terminos';
import FormateoOptimizacion from './components/services/format';
import DesarrolloPaginasWeb from './components/services/devweb';
import DesarrolloAplicaciones from './components/services/devapp';
import RecuperacionInformacion from './components/services/recovinf';
import ConsultoriaCiberseguridad from './components/services/conseg';
import SoporteTecnico from './components/services/tecs';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/proyectos" element={<Pages />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/formateo-optimizacion" element={<FormateoOptimizacion />} />
        <Route path="/desarrollo-paginas-web" element={<DesarrolloPaginasWeb />} />
        <Route path="/desarrollo-aplicaciones" element={<DesarrolloAplicaciones />} />
        <Route path="/recuperacion-informacion" element={<RecuperacionInformacion />} />
        <Route path="/consultoria-ciberseguridad" element={<ConsultoriaCiberseguridad />} />
        <Route path="/soporte-tecnico" element={<SoporteTecnico />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
