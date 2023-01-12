import React from 'react';
import styled from 'styled-components';
import data from '../data';
import TargetBlankButton from './TargetBlankButton';
import {
  FaBehance,
  FaCodepen,
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Turkish' },
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 998px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(120%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 2rem;
    padding-top: 200px;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.resolvedLanguage);
  useEffect(() => {
    console.log('cc');
  }, [activeLang]);

  return (
    <Ul open={open}>
      {/* <li>Home</li> */}
      {/* <li>About</li> */}
      <li>
        <TargetBlankButton
          url={data.contact.GITHUB}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaGithub size="1.7em" className="icon" />
          Github
        </TargetBlankButton>
      </li>
      <li>
        <TargetBlankButton
          url={data.contact.LINKEDIN}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaLinkedin size="1.7em" className="icon" />
          Linkedin
        </TargetBlankButton>
      </li>
      <li>
        <TargetBlankButton
          url={data.contact.BEHANCE}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaBehance size="1.7em" className="icon" />
          Behance
        </TargetBlankButton>
      </li>

      <li>
        {' '}
        <TargetBlankButton
          url={data.contact.CODEPEN}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaCodepen size="1.7em" className="icon" />
          Codepen
        </TargetBlankButton>
      </li>
      <li>
        <TargetBlankButton
          url={data.contact.DRIBBBLE}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaDribbble size="1.7em" className="icon" />
          Dribbble
        </TargetBlankButton>
      </li>
      <li>
        <TargetBlankButton
          url={`mailto:${data.contact.EMAIL}`}
          className="social-icon d-flex align-items-center gap-2"
        >
          <FaEnvelope size="1.7em" className="icon" />
          Email
        </TargetBlankButton>
      </li>
      <li>
        <div className="lang-buttons">
          {Object.keys(lngs).map((lang) => (
            <button
              className={`${activeLang === lang ? 'active' : ''}`}
              type="button"
              key={lang}
              onClick={() => {
                setActiveLang(lang);
                i18n.changeLanguage(lang);
              }}
              disabled={i18n.resolvedLanguage === lang}
            >
              {lang}
            </button>
          ))}
        </div>
      </li>
    </Ul>
  );
};

export default RightNav;
