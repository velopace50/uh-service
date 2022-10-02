import React from 'react';

import Amex from '../img/Amex.png';
import Logo from '../img/logo.png';
import MC from '../img/MC.png';
import Social from '../img/Social.png';
import Visa from '../img/Visa.png';

const Footer = () => {
  return (
    <div className="bg-secondary pt-80 px-63 pb-13">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="text-14 font-medium flex flex-wrap justify-center mb-40 lg:flex-col">
          <div className="pr-50">
            <img src={Logo} alt="logo" />
          </div>
          <div className="ml-20 lg:ml-0">
            <p className="text-white  lg:pt-56">Need help?</p>
            <p className="text-warning">support@unitedhardscapes.com</p>
            <p className="text-warning">Call 800 742 9803</p>
          </div>
        </div>
        <div className="flex flex-row lg:flex-row lg:justify-between">
          <div className="text-white pr-40">
            <h5 className="text-18 font-medium pb-20">Services</h5>
            <h6 className="text-14 font-normal pb-10">Marketplace</h6>
            <h6 className="text-14 font-normal pb-10">Signature Kits</h6>
            <h6 className="text-14 font-normal pb-10">Custom designed kits</h6>
            <h6 className="text-14 font-normal pb-10">Contact us</h6>
          </div>
          <div className="text-white pr-40">
            <h5 className="text-18 font-medium pb-20">Company</h5>
            <h6 className="text-14 font-normal pb-10">Our Story</h6>
            <h6 className="text-14 font-normal pb-10">Why UH Kits</h6>
            <h6 className="text-14 font-normal pb-10">How it Works</h6>
            <h6 className="text-14 font-normal pb-10">Partners</h6>
          </div>
          <div className="text-white pr-40">
            <h5 className="text-18 font-medium pb-20">Resources</h5>
            <h6 className="text-14 font-normal pb-10">Log In</h6>
            <h6 className="text-14 font-normal pb-10">Blog</h6>
            <h6 className="text-14 font-normal pb-10">FAQs</h6>
          </div>
          <div className="text-white pr-40">
            <h5 className="text-18 font-medium pb-20">Follow Us</h5>
            <div>
              <img src={Social} alt="Social" />
            </div>
            <h6 className="text-14 font-normal pb-20 pt-40">We accept</h6>
            <div className="flex justify-between">
              <img src={Visa} alt="Visa" />
              <img src={MC} alt="Mc" />
              <img src={Amex} alt="Amex" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-14 text-white font-normal flex justify-between mt-75">
        <h6>© 2021 United Hardscapes. All rights reserved.</h6>
        <h6>Privacy Policy, Terms & Conditions, Refund Policy.</h6>
      </div>
    </div>
  );
};

export default Footer;
