import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';
import TargetBlankButton from './TargetBlankButton';

export default function Footer({ contact }) {
  return (
    <footer className="container px-25">
      <div className="padding-box">
        <div className="padding-box">
          <div className="padding-box bottom-line">
            <div className="social-icons">
              <TargetBlankButton url={contact.GITHUB} className="social-icon">
                <FaGithub size="1.7em" className="icon" />
              </TargetBlankButton>
              <TargetBlankButton url={contact.LINKEDIN} className="social-icon">
                <FaLinkedin size="1.7em" className="icon" />
              </TargetBlankButton>
              <TargetBlankButton url={contact.BEHANCE} className="social-icon">
                <FaBehance size="1.7em" className="icon" />
              </TargetBlankButton>
              <TargetBlankButton url={contact.EMAIL} className="social-icon">
                <FaEnvelope size="1.7em" className="icon" />
              </TargetBlankButton>
              <TargetBlankButton url={contact.CODEPEN} className="social-icon">
                <FaCodepen size="1.7em" className="icon" />
              </TargetBlankButton>
              <TargetBlankButton url={contact.DRIBBBLE} className="social-icon">
                <FaDribbble size="1.7em" className="icon" />
              </TargetBlankButton>
            </div>
            ©2020 designed by - Mustafa Ozgun
          </div>
        </div>
      </div>
    </footer>
  );
}
