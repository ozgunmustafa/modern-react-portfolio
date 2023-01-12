import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import TargetBlankButton from './TargetBlankButton';
import {
  FaBehance,
  FaCodepen,
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Header({ contact }) {
  return (
    <nav className="container px-50">
      <div>
        <h3 className="site-name ">Mustafa Özgün</h3>
        <h4 className="slogan text-muted">
          <Fade bottom cascade>
            Developer + Designer
          </Fade>
        </h4>
      </div>
      <ul>
        {/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li> */}
        <Bounce top>
          <li>
            <a href={`mailto:${contact.EMAIL}`} className="active">
              Sent Mail
            </a>
          </li>
        </Bounce>
      </ul>
    </nav>
  );
}
