import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Menu from './components/menu';
import Servicios from './components/services';
import Contacto from './components/contacts';
import CursoPentesting from './components/curses/cursopentesting';
import Cursos from './components/cursos';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
