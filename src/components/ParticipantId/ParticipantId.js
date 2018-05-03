import React, { Component } from 'react';
import Modal from 'react-modal';
import QRScanner from '../QRScanner/QRScanner';

import './ParticipantId.css';

class ParticipantId extends Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};

    this.inputValueRef = React.createRef();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onQRScan = this.onQRScan.bind(this);
  }

  onQRScan(val) {
    this.inputValueRef.current.value = val;
  }
  openModal() {
    this.setState({modalOpen: true});
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  render() {
    const submitForm = e => {
      e.preventDefault();
      if (!this.inputValueRef.current.value) return;
      this.props.onClick(this.inputValueRef.current.value.toUpperCase());
    };
    const errorMsg = this.props.errorMsg;
    return (
      <div id='participant-id-section'>
        <h1>Welcome to GuildPath</h1>
        <p>Please enter the participant code below to continue.</p>
        <form id='participant-form' onSubmit={submitForm}>
          <input type='text' name='participantid' placeholder='Participant Code' className={errorMsg && 'has-error'} ref={this.inputValueRef} />
            <button className='btn-qrcode' onClick={this.openModal}>
              <i className='fas fa-qrcode'></i>
            </button>
          {errorMsg &&
            <div className='error-message'>{errorMsg}</div>
          }
          <div>
            <button className='icon-right' id='btn-verify-participant' disabled={this.props.fetching} onClick={submitForm}>
              {this.props.fetching
                ? <i className='content-icon fas fa-spinner fa-pulse'></i>
                : 'Continue'
              }
              <i className='fas fa-chevron-right'></i>
            </button>
          </div>
        </form>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          overlayClassName='overlay'
          className='modal'
        >
          <QRScanner onScanCmplete={this.onQRScan} />
        </Modal>
      </div>
    );
  }
}

export default ParticipantId;
