import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import miFoto from './assets/unnamed.jpg';


const Evaluacion = () => {
  return (
    <div className="container-main">
      <header className="header-content">
        
        <img 
  src={miFoto} 
  alt="Avatar" 
  className="avatar-img" 
/>
        <h1 className="title">Evaluación parcial 1</h1>
        
        <div className="student-info">
          <h2>Alumno(a): <span>Sebastian Gonzalez de Leon</span></h2>
        </div>

        <nav className="links-container">
          <a href="https://www.linkedin.com/in/sebastian-gonzález-49050b34a" target="_blank" rel="noreferrer">
            LINKED IN DE MI PROFILE
          </a>
          <Link to="/documentacion" className="doc-link">
            DOCUMENTACION PARCIAL 1
          </Link>
        </nav>
      </header>
    </div>
  );
};

// --- COMPONENTE 2: CENTRO DE DESCARGAS ---
const DownloadCenter = () => {
  const documents = [
    { id: 1, label: "COMANDOS BÁSICOS DE REACT", color: "btn-blue", link: "/docs/comandos (2).pdf" },
    { id: 2, label: "ISO / ESTANDAR IEEE", color: "btn-green", link: "/docs/ieee.pdf" },
    { id: 3, label: "CODIGO CURP", color: "btn-dark", link: "/docs/codigo curp.py" },
    { id: 4, label: "CÓDIGO PYTHON ALGORITMO SHA-256", color: "btn-dark", link: "/docs/Codigo Sha-256.txt" },
  ];

  return (
    <div className="download-page">
      <div className="card">
        <h1 className="card-title">Centro de Descargas</h1>
        <p className="card-subtitle">Haz clic en los botones para obtener tus archivos PDF.</p>
        
        <div className="button-group">
          {documents.map((doc) => (
            <a key={doc.id} href={doc.link} className={`download-btn ${doc.color}`}
             download>
              {doc.label}

            </a>
          ))}
          {/* Botón para volver a la página principal */}
          <Link to="/" className="download-btn btn-dark-outline">
            REGRESAR AL PROYECTO PRINCIPAL
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL (RUTAS) ---
function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz: Página del avatar */}
        <Route path="/" element={<Evaluacion />} />
        
        {/* Ruta de documentación: Centro de descargas */}
        <Route path="/documentacion" element={<DownloadCenter />} />
      </Routes>
    </Router>
  );
}

export default App;