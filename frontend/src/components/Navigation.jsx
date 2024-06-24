import React from 'react';

const Navigation = ({ setCurrentView }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">DNS over HTTPS Survey</span>
        <div className="navbar-nav">
          <button className="nav-link btn btn-link" onClick={() => setCurrentView('summary')}>Summary</button>
          <button className="nav-link btn btn-link" onClick={() => setCurrentView('papers')}>Papers</button>
          <button className="nav-link btn btn-link" onClick={() => setCurrentView('team')}>Team</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;