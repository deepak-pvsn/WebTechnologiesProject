import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PaperList from './components/PaperList';
import Navigation from './components/Navigation';
import SurveySummary from './components/SurveySummary';
import ClassificationView from './components/ClassificationView';
import TeamMember from './components/TeamMember';
import axios from 'axios';

const App = () => {
  const [currentView, setCurrentView] = useState('summary');
  const [selectedClassification, setSelectedClassification] = useState('all');
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get('/api/papers');
        setPapers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch papers');
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const filteredPapers = selectedClassification === 'all'
    ? papers
    : papers.filter(paper => paper.classification === selectedClassification);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <Navigation setCurrentView={setCurrentView} />
      {currentView === 'summary' && <SurveySummary />}
      {currentView === 'papers' && (
        <>
          <ClassificationView 
            setSelectedClassification={setSelectedClassification} 
            selectedClassification={selectedClassification}
          />
          <PaperList papers={filteredPapers} />
        </>
      )}
      {currentView === 'team' && <TeamMember />}
    </div>
  );
};

export default App;