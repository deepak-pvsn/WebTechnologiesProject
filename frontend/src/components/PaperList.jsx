import React from 'react';
import '../css/PaperList.css';

const PaperList = ({ papers, criterion }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {papers.map((paper) => (
          <div className="col" key={paper.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{paper.title}</h5>
                <p className="card-text">{paper.abstract}</p>
                <p className="card-text">
                  <small className="text-muted">{paper.authors}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperList;