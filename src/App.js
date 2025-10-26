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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
