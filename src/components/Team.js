import React, { Component } from 'react';

// config

// components

// styles

// images
import Kofo from '../images/kofo-ajelabi.svg'
import Tunji from '../images/tunji-adegboye.svg'
import Joseph from '../images/joseph-arogundade.svg'

class Team extends Component {

  render() {
    return (
      <div className='team-container container text-center'>
        <h1>Our Team</h1>
        <div className='team-content'>
          <div className='row team-people'>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right'>
              <img src={Kofo}  className="d-inline-block align-top client-icon img-responsive" alt=""/>
            </div>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left'>
              <h2>Kofoworola Ajelabi</h2>
              <p className='lead'>Managing Director</p>
              <p className='lead-sec'>B.Sc. (Hons) Food science & Tech., DIP Packaging Technology FIMMM, Cenv (UK) FNIFST, MNIM MIOPN</p>
              <p>Kofo is a Diploma member of the Institute of Packaging, UK, a Fellow of the Institute and a UK Accredited Packaging Professional. Also, she is a Fellow of the Nigerian Institute of Food Science and Technology. She has over 39 years working experience in Pharmaceutical and Food industries (Glaxo & Cadbury Nig. plcs)
              in the area of Organisation Process Improvement, Quality management, Packaging  development , Production,
              Productivity services, Project management, Supplier development and Technical training</p>
            </div>
          </div>
          <div className='row team-people'>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right'>
              <img src={Tunji}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left'>
              <h2>Tunji Adegboye</h2>
              <p className='lead'>Facilitator</p>
              <p className='lead-sec'>Bsc (Hons) Chemical Engineering, MSc Operations Research and Statistics</p>
              <p>Tunji  was a diploma member of the Institute of Packaging, UK, now a Fellow of the Institute and a UK Accredited Packaging Professional.
              He is a co-author of two packaging books, viz “111 Questions and Answers in Packaging Technology” and “Packaging Appreciation for MSMEs”.
              He is the co-founder of Superior Packaging Consultants Ltd – a firm of packaging consultants and trainers based in Lagos, Nigeria.</p>
            </div>
          </div>
          <div className='row team-people'>
            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right'>
              <img src={Joseph}  className="d-inline-block align-top client-icon" alt=""/>
            </div>
            <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left'>
              <h2>Joseph Arogundade</h2>
              <p className='lead'>Facilitator</p>
              <p className='lead-sec'>DIP Biological Sciences, PGD Research and Planning, MSc Business Administration, MIFST, MIOPN</p>
              <p>Joseph was once a production Manager with Vego Products Ota - a Cosmetics manufacturing company before he joined Nestle Nig Plc in 1994.
              He became a Packaging Specialist in 2008 and handled many packaging projects while leading his team in this role. He retired from Nestle Nig  Plc in January 2017 after over 23 years of work experience in Nestle.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
