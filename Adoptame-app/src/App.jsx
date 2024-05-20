import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Protectoras from './pages/Protectoras';
import Registro from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Protectoras" element={<Protectoras />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
