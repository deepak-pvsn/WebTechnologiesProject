import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PaperList from './components/PaperList';
import PaperData from './components/PaperData';
 

function App() {
  const problemDefinitionPapers_1 = PaperData.filter((paper) => paper.problemDefinition.includes('DoH_MD'));
  const problemDefinitionPapers_2 = PaperData.filter((paper) => paper.problemDefinition.includes('ML_AI'));
  const solutionPapers_1 = PaperData.filter(paper => paper.solutions.includes('ML_BD'));
  const solutionPapers_2 = PaperData.filter(paper => paper.solutions.includes('Theoretical'));
  const methodologyPapers_1 = PaperData.filter((paper) => paper.methodology.includes('System_Imp'));
  const methodologyPapers_2 = PaperData.filter((paper) => paper.methodology.includes('Th_Analysis'));

  const [selectedPaperId, setSelectedPaperId] = useState(null);

  const handleSelectPaper = (id) => {
    setSelectedPaperId(id);
    window.scrollTo(0, 0);
  };

  const handleCloseDetails = () => {
    setSelectedPaperId(null);
    window.scrollTo(0, 0);
  };

  const selectedPaper = PaperData.find(paper => paper.id === selectedPaperId);

  // Refs for sections
  const problemDefinitionRef = useRef(null);
  const solutionsRef = useRef(null);
  const methodologyRef = useRef(null);
  const aboutUsRef = useRef(null);

  return (
    <div className="App">
      <header className="bg-dark py-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
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
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="content-wrapper">
        <main className="container my-5">
          {selectedPaper ? (
            <div className="selected-paper-details">
              <button className="btn btn-secondary mb-3" onClick={handleCloseDetails}>Back</button>
              <h3>{selectedPaper.title}</h3>
              <p><strong>Authors:</strong> {selectedPaper.authors}</p>
              <p><strong>Source Link:</strong> <a href={selectedPaper.url} target="_blank" rel="noopener noreferrer">{selectedPaper.url}</a></p>
              <p className="text-justify text-justify-right"><strong>Problem Definition:</strong> {selectedPaper.problemContent}</p>
              <p className="text-justify text-justify-right"><strong>Solution Proposed:</strong> {selectedPaper.solutionContent}</p>
              <p className="text-justify text-justify-right"><strong>Methodology Discussed:</strong> {selectedPaper.methodologyContent}</p>
            </div>
          ) : (
            <>
              <section id="home" className="mb-5">
                <h1 className="text-center mb-4">DNS over HTTPS: Scientific Survey</h1>
                <p className="lead text-center mb-4">
                  Welcome to our website dedicated to exploring the current status, challenges, use cases, and open issues
                  surrounding DNS over HTTPS (DoH).
                </p>
                <p className="text-center mb-4">We have classified 50 research papers based on the following criteria:</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Problem Definition</li>
                  <li className="list-group-item">Solutions</li>
                  <li className="list-group-item">Methodology</li>
                </ul>
              </section>
              <section className="mb-5" ref={problemDefinitionRef} id="problem-definition">
                <h2 className="text-center mb-4">Problem Definition</h2>
                <p className="lead text-center mb-4">
                  This section covers papers that solve the same (or a similar) problem related to DNS over HTTPS.
                  Two Problem Definitions are identified below:
                </p>
                <h3 className="text-center mb-4">1. DNS over HTTPS (DoH) Misuse and Detection</h3>
                <p className="lead text-center mb-4">This section contain research papers addressing misuse and detection of DoH traffic for malicious activities.</p>
                <PaperList papers={problemDefinitionPapers_1} onSelectPaper={handleSelectPaper} />
                <h3 className="text-center mb-4">2. Machine Learning and AI for Security</h3>
                <p className="lead text-center mb-4"> This section contain research papers that involves application of machine learning and AI techniques for cybersecurity threat detection and mitigation.</p>
                <PaperList papers={problemDefinitionPapers_2} onSelectPaper={handleSelectPaper} />
              </section>

              <section id="solutions" className="mb-5" ref={solutionsRef}>
                <h2 className="text-center mb-4">Solutions</h2>
                <p className="lead text-center mb-4">
                  This section covers papers that propose using similar solutions, such as optimization theory, control theory,
                  reinforcement learning, etc.
                  Two Solutions are identified below:
                </p>
                <h3 className="text-center mb-4">1. Machine Learning-Based Detection</h3>
                <p className="lead text-center mb-4">This section contain research papers proposing machine learning techniques for detecting malicious activities, particularly in DoH traffic.</p>
                <PaperList papers={solutionPapers_1} onSelectPaper={handleSelectPaper} />
                <h3 className="text-center mb-4">2. Theoretical Analysis and Algorithm Development</h3>
                <p className="lead text-center mb-4">This section contain research papers developing and analyzing theoretical models and algorithms for network security and threat detection.</p>
                <PaperList papers={solutionPapers_2} onSelectPaper={handleSelectPaper} />
              </section>

              <section id="methodology" className="mb-5" ref={methodologyRef}>
                <h2 className="text-center mb-4">Methodology</h2>
                <p className="lead text-center mb-4">
                  This section covers papers that apply the same approach to solve the solution, such as system implementation,
                  theoretical analysis, measurement study, simulations vs emulation vs real prototype, etc.
                  Two Methodologies are identified below:
                </p>
                <h3 className="text-center mb-4">1. System Implementation</h3>
                <p className="lead text-center mb-4">This section contain research papers that involves practical deployment and implementation of proposed solutions for detecting and mitigating cybersecurity threats.</p>
                <PaperList papers={methodologyPapers_1} onSelectPaper={handleSelectPaper} />
                <h3 className="text-center mb-4">2. Theoretical Analysis</h3>
                <p className="lead text-center mb-4">This section contain research papers providing detailed theoretical foundations and analyses of techniques and methodologies for cybersecurity.</p>
                <PaperList papers={methodologyPapers_2} onSelectPaper={handleSelectPaper} />
              </section>

            
            </>
          )}
        </main>
      </div>
      <footer className="bg-dark py-3">
        <div className="container text-center text-white">
          <p>&copy; 2024 DNS over HTTPS Survey</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
