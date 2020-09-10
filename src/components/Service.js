import React, { Component } from 'react';

// config

// components
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// styles

// images
import Consult from '../images/general-consult-icon.svg'
import Dev from '../images/packaging-dev-icon.svg'
import Source from '../images/source-print-icon.svg'
import Train from '../images/extensive-training-icon.svg'
import Certify from '../images/iso-certificate-icon.svg'

class Services extends Component {
  render() {
    return (
      <div className='service-container container-fluid text-center'>
        <h1>Services</h1>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Card>
              <CardImg top width="180" height="180" src={Dev}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Packaging Development</CardTitle>
                <CardText>
                  <ul className='text-left'>
                    <li>Material & machinery development</li>
                    <li>Local & overseas sourcing of suppliers</li>
                    <li>Packaging design & printing of materials</li>
                    <li>Product specification and testing methods</li>
                    <li>Guideline on registration with NAFDAC</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Card>
              <CardImg top width="180" height="180" src={Source}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Quality Management</CardTitle>
                <CardText>
                  <ul className='text-left'>
                    <li>Quality assurance & improvement process</li>
                    <li>Packaging material specification validation</li>
                    <li>Packaging supplier qualification & audit</li>
                    <li>Packaging material testing & validation</li>
                    <li>Packaging equipment validation & optimisation</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Card>
              <CardImg top width="286" height="180" src={Consult}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Organisation Process Improvement</CardTitle>
                <CardText>
                  <ul className='text-left'>
                    <li>Organisation restructuring</li>
                    <li>Process audit</li>
                    <li>Operations research & process improvement</li>
                    <li>Cost analysis & production cost optimisation</li>
                    <li>Documentation (Standard Operating Procedure & Quality Manual)</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Card>
              <CardImg top width="180" height="180" src={Certify}  alt="Card image cap" />
              <CardBody>
                <CardTitle>ISO Certification</CardTitle>
                <CardText>
                  <ul className='text-left'>
                    <li>Quality management principles</li>
                    <li>Context of the organisation</li>
                    <li>Leadership, support, operational planning & control</li>
                    <li>Performance evaluation and improvement</li>
                    <li>Relationship with other management system standards</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Card>
              <CardImg top width="286" height="180" src={Train}  alt="Card image cap" />
              <CardBody>
                <CardTitle>Extensive Training</CardTitle>
                <CardText>
                  <ul className='text-left'>
                    <li>Organise customised Packaging & Quality management courses on demand</li>
                    <li>Consult for Government and no-Government organisations in the areas of Packaging value chain</li>
                    <li>Train and prepare students for Packaging Technology Diploma & Certificates</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
