import React, { Component } from 'react';

// config

// components
import {
  Jumbotron,
  Button } from 'reactstrap';

// styles

// images
import Logo from '../images/prc-icon.svg'

class Adlib extends Component {

  render() {
    return (
      <div className='adlib-container container'>
        <Jumbotron>
          <h1>A multi-disciplinary firm of consultants with expertise in <span>Packaging Development</span>, <span>Quality Management</span>, <span className="display-3">SON Certification</span> on Quality Management (QMS), Enivornmental Management System (EMS), Organisation & <span>Process Development</span> as well as Capacity Building </h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Adlib;
