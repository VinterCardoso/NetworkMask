import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="brand">Máscara de Rede</Link>

        <nav className="app-nav" aria-label="Main navigation">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Início</Link>
          <Link to="/simulator" className={`nav-link ${location.pathname === '/simulator' ? 'active' : ''}`}>Simulador</Link>
          <Link to="/quiz" className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`}>Quiz</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;