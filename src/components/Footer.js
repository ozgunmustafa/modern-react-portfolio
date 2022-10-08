import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';

export default function Footer({ contact }) {
  return (
    <footer className="container p-50">
      <div className="padding-box">
        <div className="padding-box">
          <div className="padding-box bottom-line">
            <div className="social-icons">
              <a target="_blank" href={contact.GITHUB} className="iconLink">
                <FaGithub size="1.7em" className="icon" />
              </a>
              <a target="_blank" href={contact.LINKEDIN} className="iconLink">
                <FaLinkedin size="1.7em" className="icon" />
              </a>
              <a target="_blank" href={contact.BEHANCE} className="iconLink">
                <FaBehance size="1.7em" className="icon" />
              </a>
              <a
                target="_blank"
                href={`mailto:${contact.EMAIL}`}
                className="iconLink"
              >
                <FaEnvelope size="1.7em" className="icon" />
              </a>

              <a target="_blank" href={contact.CODEPEN} className="iconLink">
                <FaCodepen size="1.7em" className="icon" />
              </a>
              <a target="_blank" href={contact.DRIBBBLE} className="iconLink">
                <FaDribbble size="1.7em" className="icon" />
              </a>
            </div>
            ©2020 designed by - Mustafa Ozgun
          </div>
        </div>
      </div>
    </footer>
  );
}
