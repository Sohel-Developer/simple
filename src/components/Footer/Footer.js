import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">

        <p className="mb-0 text-center mh-mt-50">
          Copyright <FontAwesomeIcon icon={faCopyright} /> <span id="year">2021</span> All rights reserved | This template is made with
          
          by
          <a className="text-primary ml-2" href="#">
            Sohel-Rana
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
