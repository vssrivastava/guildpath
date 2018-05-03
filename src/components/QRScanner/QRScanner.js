import React, { Component } from 'react';
import './QRScanner.css';

const Instascan = require('instascan');


class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.inputValueRef = React.createRef();
  }
  componentDidMount() {
    let scanner = new Instascan.Scanner({ video: document.getElementById('qr-scanner') });
    scanner.addListener('scan', content => {
      console.log(content);
    });
    Instascan.Camera.getCameras().then(cameras => {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(e => {
      console.error(e);
    });
  }
  scanComplete() {

  }
  render() {
    return (
      <video id='qr-scanner' />
    );
  }
}

export default QRScanner;
