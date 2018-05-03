import React, { Component } from 'react';
import * as widgets from "surveyjs-widgets";
import Modal from 'react-modal';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';

import * as Survey from 'survey-react';

import ParticipantId from './components/ParticipantId/ParticipantId';
import ParticipantName from './components/ParticipantName/ParticipantName';
import SurveyList from './components/SurveyList/SurveyList';
import MedicationHistory from './components/MedicationHistory/MedicationHistory';
import Notes from './components/Notes/Notes';

import {fetchParticipants, fetchSurveyId, postSurvey, postMeds} from './services/fetchService';

import logo from './static/images/guildlink-logo.png';
import closeIcon from './static/images/close-icon.png';

import 'survey-react/survey.css';
import 'nouislider/distribute/nouislider.css';
import 'jquery-ui/themes/base/all.css';
import './App.css';

widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);

Modal.setAppElement('#root');

class App extends Component {
  surveyModel = null;
  surveyComplete = false;
  initialState = {
    verified: false,
    selectedSurvey: null,
    participantCode: null,
    participantId: null,
    surveyComplete: false,
    notes: [],
    modalOpen: false
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.fetchParticipant = this.fetchParticipant.bind(this);
    this.verifyParticipant = this.verifyParticipant.bind(this);
    this.chooseSurvey = this.chooseSurvey.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendDataToServer = this.sendDataToServer.bind(this);
    this.addNotes = this.addNotes.bind(this);
    this.addMeds = this.addMeds.bind(this);
    this.beforeFetch = this.beforeFetch.bind(this);
    this.startOver = this.startOver.bind(this);
  }

  startOver() {
    this.setState(this.initialState);
  }
  beforeFetch() {
    this.setState({
      fetchError: null,
      participantCode: null,
      participantId: null,
      fetching: true
    });
  }
  fetchParticipant(id) {
    this.beforeFetch();
    fetchParticipants(id).then(res => {
      if (res.fetchError) {
        this.setState({
          ...res,
          fetching: false
        });
        return;
      }
      fetchSurveyId(res.serviceCode).then(survey => {
        this.setState({
          ...res,
          participantId: res.id,
          medications: res.fetchError ? [] : res.extraData.Medications,
          surveys: survey,
          fetching: false
        });
        this.openModal('pn');
      });
    });
  }
  verifyParticipant() {
    this.setState({
      verified: true,
      modalOpen: false
    });
  }
  chooseSurvey(id) {
    this.setState({
      selectedSurvey: id
    });
    this.surveyModel = new Survey.Model({ surveyId: id });
    this.surveyModel.setValue('participantId', this.state.participantId);
  }
  sendDataToServer(result) {
    if (this.surveyComplete) return;
    postSurvey(this.state.selectedSurvey, result.data);
    this.setState({surveyComplete: true});
    this.surveyComplete = true;
  }
  addNotes(allNotes) {
    this.setState({...allNotes});
  }
  addMeds(allMeds) {
    this.setState({...allMeds});
    postMeds(this.state.participantId, {
      surveyId: this.state.selectedSurvey,
      Medications: allMeds.medications
    });
  }
  openModal(id) {
    this.setState({
      modalOpen: true,
      modalType: id
    })
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  
  render() {
    const { modalType } = this.state;
    const findParticipant = (
      <div className="app">
        <header className="app-header" >
          <a href='/'><img className='header-logo' src={logo} alt='logo' /></a>
        </header>
        <div className='main'>
        {!this.state.verified &&
          <div className="participant-section">
            <ParticipantId onClick={this.fetchParticipant} fetching={this.state.fetching} errorMsg={this.state.fetchError}/>
          </div>
        }
        {this.state.verified && !this.state.selectedSurvey &&
          <div className="participant-section">
            <SurveyList list={this.state.surveys} surveyDesc={this.state.serviceName} onClick={this.chooseSurvey} onBack={this.startOver} />
          </div>
        }
        {this.state.selectedSurvey &&
          <div id='survey-container'>
            <Survey.Survey model={this.surveyModel} onComplete={this.sendDataToServer} />
            {!this.state.surveyComplete &&
              <div className='panel-buttons'>
                <button className="survey-panel-button icon-right" id='btn-medication-history' onClick={() => {this.openModal('mh')}}>
                  Medication History
                  <i className="fas fa-history"></i>
                </button>
                <button className="survey-panel-button icon-right" id='btn-notes' onClick={() => {this.openModal('nt')}}>
                  Notes
                  <i className="far fa-sticky-note"></i>
                </button>
              </div>
            }
            {this.state.surveyComplete &&
              <button className="icon-right btn-start-over" onClick={this.startOver}>
                Start Over
                <i className="fas fa-undo"></i>
              </button>
            }
          </div>
        }
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnEsc={modalType !== 'pn'}
          shouldCloseOnOverlayClick={modalType !== 'pn'}
          overlayClassName='overlay'
          className={`modal ${modalType}`}
        >
          {modalType !== 'pn' &&
            <button className='modal-close' onClick={this.closeModal}><img src={closeIcon} alt='close' /></button>
          }
          {modalType === 'pn' &&
            <ParticipantName
              onClick={this.verifyParticipant}
              onBack={this.startOver}
              fname={this.state.obfFirstName}
              lname={this.state.obfLastName}
            />
          }
          {modalType === 'mh' &&
            <MedicationHistory history={this.state.medications} survey={this.state.selectedSurvey} participant={this.state.participantId} onAdd={this.addMeds} />
          }
          {modalType === 'nt' &&
            <Notes notes={this.state.notes} survey={this.state.selectedSurvey} participant={this.state.participantId} onAdd={this.addNotes}  />
          }
        </Modal>
      </div>
    );
    return findParticipant;
  }
}

export default App;
