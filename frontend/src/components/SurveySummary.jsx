import React from 'react';

const SurveySummary = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">DNS over HTTPS: A Comprehensive Survey</h1>
      <p className="lead">
        This survey explores the current state, challenges, and future directions of DNS over HTTPS (DoH) technology.
        We analyze 50 recent papers to provide insights into problem definitions, proposed solutions, and methodologies used in this field.
      </p>
      <hr className="my-4" />
      <p>Click on 'Papers' to explore our findings or 'Team' to learn about the researchers behind this survey.</p>
    </div>
  );
};

export default SurveySummary;