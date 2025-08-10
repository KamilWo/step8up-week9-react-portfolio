import React from 'react';
import {Icon} from '@iconify/react';
import githubIcon from '@iconify/icons-ion/logo-github';
import linkedinIcon from '@iconify/icons-ion/logo-linkedin';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/KamilWo" target="_blank" rel="noopener noreferrer"
             className="hover:text-cyan-400 transition-colors duration-300">
            <Icon icon={githubIcon} width="24" height="24"/>
          </a>
          <a href="https://www.linkedin.com/in/kamil-wozniak-b7429a113/" target="_blank" rel="noopener noreferrer"
             className="hover:text-cyan-400 transition-colors duration-300">
            <Icon icon={linkedinIcon} width="24" height="24"/>
          </a>
        </div>
        <p className="text-sm">&copy; {currentYear} Kamil Wozniak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
