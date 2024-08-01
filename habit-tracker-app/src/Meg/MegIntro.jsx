import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function MegIntro() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Introduction</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Meghana (Meg)</h6>
          <p className="card-text">I am a Maths teacher. My hobbies are dancing and trekking.</p>
          <Link to="/" className="card-link">Read More</Link>
        </div>
      </div>
    </div>
  );
}

