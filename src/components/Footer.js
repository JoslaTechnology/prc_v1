import React, { Component } from 'react';

// config

// components

// styles

// images
import Logo from '../images/prc-icon.svg'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'

class Footer extends Component {
  render() {
    return (
      <div className='footer-container container-fluid text-center'>
        <div className='row'>
          <div className='col-sm'>
            <img src={Logo}  className="d-inline-block align-top josla-logo" alt=""/>
            <br/>
            <div className='row footer-social'>
              <div className='col-sm'>
                <a href='https://www.facebook.com/kofo.ajelabi'><img src={Facebook}  className="d-inline-block align-top josla-logo" alt=""/></a>
              </div>
              <div className='col-sm'>
                <a href='https://ng.linkedin.com/in/kofoworola-ajelabi-b9441137?trk=public_profile_samename_mini-profile_title'><img src={LinkedIn}  className="d-inline-block align-top josla-logo" alt=""/></a>
              </div>
            </div>
          </div>
          <div className='col-sm text-left'>
            <h5>Sitemap</h5>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>Client</p>
          </div>
          <div className='col-sm text-right'>
            <h5>25 Abayomi Owulade Avenue</h5>
            <p>Magodo GRA 2</p>
            <p>Ikosi-Ketu</p>
            <p>Lagos state, Nigeria</p>
            <br/>
            <p className='footer-lead'>+234 (0) 803 323 2007</p>
            <p className='footer-lead'>kofoajelabi@yahoo.ca</p>
          </div>
        </div>
        <h6>© 2019 Packaging Resource Consult Ltd. All Rights Reserved.</h6>
      </div>
    );
  }
}

export default Footer;
