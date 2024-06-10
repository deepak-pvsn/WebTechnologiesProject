import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PaperList from './components/PaperList';
import PaperData from './components/PaperData';

function App() {
  const problemDefinitionPapers = PaperData.filter((paper) => paper.classification === 'problemDefinition');
  const solutionPapers = PaperData.filter((paper) => paper.classification === 'solutions');
  const methodologyPapers = PaperData.filter((paper) => paper.classification === 'methodology');

  return (
    <div className="App">
      <header className="bg-dark py-3">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <a className="navbar-brand" href="#home">
            DNS over HTTPS Survey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#problem-definition">
                  Problem Definition
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#solutions">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#methodology">
                  Methodology
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        <section id="home" className="mb-5">
          <h1 className="text-center mb-4">DNS over HTTPS: Scientific Survey</h1>
          <p className="lead text-center mb-4">
            Welcome to our website dedicated to exploring the current status, challenges, use cases, and open issues
            surrounding DNS over HTTPS (DoH).
          </p>
          <p className="text-center mb-4">We have classified at least 50 research papers based on the following criteria:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Problem Definition</li>
            <li className="list-group-item">Solutions</li>
            <li className="list-group-item">Methodology</li>
          </ul>
        </section>

        <section id="problem-definition" className="mb-5">
          <h2 className="text-center mb-4">Problem Definition</h2>
          <p className="lead text-center mb-4">
            This section covers papers that solve the same (or a similar) problem related to DNS over HTTPS.
          </p>
          <PaperList papers={problemDefinitionPapers} criterion="Problem Definition" />
        </section>

        <section id="solutions" className="mb-5">
          <h2 className="text-center mb-4">Solutions</h2>
          <p className="lead text-center mb-4">
            This section covers papers that propose using similar solutions, such as optimization theory, control theory,
            reinforcement learning, etc.
          </p>
          <PaperList papers={solutionPapers} criterion="Solutions" />
        </section>

        <section id="methodology" className="mb-5">
          <h2 className="text-center mb-4">Methodology</h2>
          <p className="lead text-center mb-4">
            This section covers papers that apply the same approach to solve the solution, such as system implementation,
            theoretical analysis, measurement study, simulations vs emulation vs real prototype, etc.
          </p>
          <PaperList papers={methodologyPapers} criterion="Methodology" />
        </section>
      </main>

      <footer className="bg-dark py-3">
        <div className="container text-center text-white">
          <p>&copy; 2023 DNS over HTTPS Survey</p>
        </div>
      </footer>
    </div>
  );
}

export default App;