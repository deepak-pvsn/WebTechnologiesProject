import React from 'react';

const ClassificationView = ({ setSelectedClassification, selectedClassification }) => {
  const classifications = ['all', 'problemDefinition', 'solutions', 'methodology'];

  return (
    <div className="btn-group mb-3" role="group" aria-label="Classification filter">
      {classifications.map((classification) => (
        <button
          key={classification}
          type="button"
          className={`btn ${selectedClassification === classification ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setSelectedClassification(classification)}
        >
          {classification === 'all' ? 'All' : classification.charAt(0).toUpperCase() + classification.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ClassificationView;