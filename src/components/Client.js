import React, { Component } from 'react';

// config

// components

// styles

// images
import EPC from '../images/epc.svg'
import AEA from '../images/aea.svg'
import PROPAK from '../images/propak.svg'
import Nestle from '../images/nestle.svg'
import FIRO from '../images/firo.svg'
import NAFFAD from '../images/naffad.svg'
import InterPak from '../images/interpak.svg'
import WOWE from '../images/wowe.svg'
import SON from '../images/son.svg'
import Vitafoam from '../images/vitafoam.svg'
import Temp from '../images/temp.svg'

class Client extends Component {

  render() {
    return (
      <div className='client-container container-fluid text-center'>
        <h1>Clients</h1>
        <div className='client-content'>
          <div className="row client-content-row">
            <div className="col-sm client-content-col">
              <img src={EPC}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className="col-sm client-content-col">
              <img src={AEA}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
          </div>
          <div className="row client-content-row">
            <div className="col-sm client-content-col">
              <img src={PROPAK}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className="col-sm client-content-col">
              <img src={Nestle}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
          </div>
          <div className="row client-content-row">
            <div className="col-sm client-content-col">
              <img src={FIRO}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className="col-sm client-content-col">
              <img src={NAFFAD}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
          </div>
          <div className="row client-content-row">
            <div className="col-sm client-content-col">
              <img src={InterPak}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className="col-sm client-content-col">
              <img src={WOWE}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
          </div>
          <div className="row client-content-row">
            <div className="col-sm client-content-col">
              <img src={SON}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className="col-sm client-content-col">
              <img src={Vitafoam}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
          </div>
        </div>
        <h2>Our wide experience working for private and public enterprises has ensured we have a vast network of clients and partners that enables us create greater value for the benefits of humanity.</h2>
      </div>
    );
  }
}

export default Client;
