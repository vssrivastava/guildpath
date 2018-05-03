import React from 'react';
import './SurveyList.css';

const SurveyList = ({list =[], surveyDesc, onClick, onBack}) => {
  const chooseSurvey = (e, id) => {
    e.preventDefault();
    onClick(id);
  };
  return (
    <div className='suvery-list'>
      {list.length > 0
        ? (<React.Fragment>
            <div>Choose one of the surveys below to continue, or <button className='link' onClick={onBack}>go back</button></div>
            {list.map((survey, i) => (
              <button
                key={survey.id}
                className='survey-button'
                id={`survey-${survey.id}`}
                onClick={e => {chooseSurvey(e, survey.id)}}
              >
                <div className='name'>{survey.surveyName}</div>
                <div className='desc'>{surveyDesc}</div>
              </button>
            ))}
          </React.Fragment>)
        : (<React.Fragment>
            <h2>We're Sorry</h2>
            <div>There is no program available for the participant at the moment. Please <button className='link' onClick={onBack}>choose another participant</button>.</div>
          </React.Fragment>)
      }
    </div>
  );
};

export default SurveyList;
