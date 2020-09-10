import React, { Component } from 'react';

// config

// components
import {
  Button } from 'reactstrap';
// styles

// images

class About extends Component {

  render() {
    return (
      <div className='about-container container text-center'>
        <div class="row text-center">
          <div class="col-md">Packaging Development</div>
          <div class="col-md">Quality Management</div>
          <div class="col-md">ISO Certification</div>
          <div class="col-md">Process Improvement</div>
        </div>
        <Button outline color="secondary" size="lg md sm xs">Contact us</Button>
      </div>
    );
  }
}

export default About;
