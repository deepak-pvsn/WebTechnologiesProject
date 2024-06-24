import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('/api/team');
        setTeamMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch team members');
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {teamMembers.map((member) => (
        <div className="col" key={member._id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
              <p className="card-text">{member.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;