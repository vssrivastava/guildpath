import React from 'react';
import './ParticipantName.css';

const ParticipantName = ({onClick, onBack, lname, fname}) => (
  <div className="participant-name">
    <h2>Verify Participant</h2>
    <p>Please verify the participant's name.</p>
    <div className='patient-name'>{`${fname}### ${lname}###`}</div>
    <div className='verify-btn-wrapper'>
      <button className='icon-left' id='btn-go-back' onClick={onBack}>
        <i className="fas fa-chevron-left"></i>
        Back
      </button>
      <button className='icon-right' id='btn-verify' onClick={onClick}>
        Verify
        <i className="fas fa-check"></i>
      </button>
    </div>
  </div>
);

export default ParticipantName;
