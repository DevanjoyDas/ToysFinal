/**
 *
 * Footer
 *
 */

import React from 'react';
import { FaGithub, FaHeart, FaLinkedin } from 'react-icons/fa';

const Footer = () => {


  return (

    <div className='p-5' style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
      <div>Made With <FaHeart style={{ color: 'gold' }} /> By Devanjoy Das</div>
      <div style={{ color: 'gold' }}>Grateful to Open Source Projects for the Valuable Resources.</div>
      <div style={{ display: "flex", gap: '3px', justifyContent: 'center', alignItems: "center" }}>
        <a target='_blank' href="https://www.linkedin.com/in/devanjoy-das/"><FaLinkedin size={40} color="white" /></a>
        <a target='_blank' href="https://github.com/DevanjoyDas"><FaGithub size={40} color="white" /></a>
      </div>
    </div>
  );
};

export default Footer;
