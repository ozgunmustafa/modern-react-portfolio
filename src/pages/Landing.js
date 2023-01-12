/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { FaLaptopCode, FaWhatsapp, FaVuejs } from 'react-icons/fa';
import { BsFillCollectionFill } from 'react-icons/bs';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiTailwindcss, SiGulp, SiFigma, SiAdobexd } from 'react-icons/si';
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiMongodb,
  DiLaravel,
  DiPhp,
  DiGithubBadge,
  DiVisualstudio,
  DiCodepen,
  DiSass,
  DiPhotoshop,
} from 'react-icons/di';

import { VscFeedback } from 'react-icons/vsc';
import PlanCard from '../components/PlanCard';
import PortfolioCard from '../components/PortfolioCard';
import TargetBlankButton from '../components/TargetBlankButton';
import { useTranslation, Trans } from 'react-i18next';

export default function Landing({ contact, projects }) {
  const { t } = useTranslation();
  return (
    <div className="py-50">
      <section className="contact">
        <div className="px-25 container">
          <p className="landing-text w-lg-75">
            {t('introText')}
            {/* <Trans i18nKey="introText">
              <span className="d-block">I'm Mustafa.</span>I can help you about
              <span className="empty-text">Development</span> and
              <span className="empty-text">Design</span>.
            </Trans> */}
          </p>
          <div className="d-flex my-30">
            <TargetBlankButton
              url={`https://wa.me/${contact.PHONE}?text=🖐`}
              className="btn btn-dark mr-10 "
            >
              <FaWhatsapp size=".8em" /> Whatsapp
            </TargetBlankButton>
            <a
              href="https://cv.ozgunmustafa.com/files/MustafaOzgun-CV.pdf"
              className="btn"
              download
            >
              {t('resume')}
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="px-25 container">
          <h1 className="section-title">{t('section.stack.title')} 💻</h1>
          <small className="text-muted">{t('section.stack.description')}</small>
          <div className="tech-stack-list py-3">
            <span className="tech-stack-item" title="HTML">
              <DiHtml5 size="1.5em" />
            </span>
            <span className="tech-stack-item" title="CSS">
              <DiCss3Full size="1.5em" />
            </span>
            <span className="tech-stack-item" title="SCSS">
              <DiSass size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Javascript">
              <DiJavascript1 size="1.5em" />
            </span>
            <span className="tech-stack-item" title="React">
              <DiReact size="1.5em" />
            </span>
            <span className="tech-stack-item" title="VueJS">
              <FaVuejs size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Bootstrap">
              <DiBootstrap size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Ant Design">
              <AiOutlineAntDesign size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Github">
              <DiGithubBadge size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Codepen IO">
              <DiCodepen size="1.5em" />
            </span>
            <span className="tech-stack-item" title="VS Code">
              <DiVisualstudio size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Gulp">
              <SiGulp size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Tailwind">
              <SiTailwindcss size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Figma">
              <SiFigma size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Adobe XD">
              <SiAdobexd size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Photoshop">
              <DiPhotoshop size="1.5em" />
            </span>
            <span className="tech-stack-item" title="PHP">
              <DiPhp size="1.5em" />
            </span>
            <span className="tech-stack-item" title="Laravel">
              <DiLaravel size="1.5em" />
            </span>
            <span className="tech-stack-item" title="MongoDB">
              <DiMongodb size="1.5em" />
            </span>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-25 container">
          <h1 className="section-title">
            {t('section.featuredWorks.title')} 🧱
          </h1>
          <small className="text-muted">
            {t('section.featuredWorks.description')}
          </small>

          <div className="portfolio-list">
            {projects.map((project, index) => (
              <PortfolioCard
                project={project}
                className={`${index === 0 ? 'colum-span-lg-2' : ''}`}
                key={'project-' + index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="px-25 container">
          <h1 className="section-title">{t('section.roadmap.title')} 🗺️</h1>
          <small className="text-muted">
            {t('section.roadmap.description')}
          </small>

          <div className="portfolio-list">
            <PlanCard
              title={t('section.roadmap.step1.title')}
              text={t('section.roadmap.step1.text')}
              icon={
                <BsFillCollectionFill size="3.5em" style={{ marginTop: 40 }} />
              }
            />
            <PlanCard
              title={t('section.roadmap.step2.title')}
              text={t('section.roadmap.step2.text')}
              icon={
                <AiOutlineAntDesign size="3.5em" style={{ marginTop: 40 }} />
              }
            />
            <PlanCard
              title={t('section.roadmap.step3.title')}
              text={t('section.roadmap.step3.text')}
              icon={<FaLaptopCode size="3.5em" style={{ marginTop: 40 }} />}
            />
            <PlanCard
              title={t('section.roadmap.step4.title')}
              text={t('section.roadmap.step4.text')}
              icon={<VscFeedback size="3.5em" style={{ marginTop: 40 }} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
