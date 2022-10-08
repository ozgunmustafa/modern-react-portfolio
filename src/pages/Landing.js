import React from 'react';
import Bounce from 'react-reveal/Bounce';
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

export default function Landing({ contact, projects }) {
  return (
    <div className="px-25 py-50 container">
      <section className="contact">
        <p className="landing-text">
          <span className="d-block">I'm Mustafa.</span>I can help you about{' '}
          <b className="empty-text">Development</b> and{' '}
          <span className="empty-text">Design</span>.
        </p>

        <div className="my-30">
          <Bounce top>
            <a
              href={`https://wa.me/${contact.PHONE}?text=Bir%20tasarımım%20olsun%20istiyorum`}
              className="btn btn-dark mr-10"
              target="_blank"
            >
              <FaWhatsapp size=".8em" /> Contact on Whatsapp
            </a>
          </Bounce>
          <a
            href="https://cv.ozgunmustafa.com/files/MustafaOzgun-CV.pdf"
            className="btn my-10"
            download
          >
            Resume
          </a>
        </div>
      </section>

      <section className="">
        <h1 className="section-title">Featured Works 🧱</h1>
        <small className="text-muted">You can preview my works</small>

        <div className="portfolio-list">
          {projects.map((project, index) => (
            <PortfolioCard project={project} key={'portfolio-' + index} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="section-title">Stack 💻</h1>
        <small className="text-muted">Here is my stack</small>
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
      </section>

      <section className="">
        <h1 className="section-title">How do I complete a project? 🗺️</h1>
        <small className="text-muted">You can preview my works plan...</small>

        <div className="portfolio-list">
          <PlanCard
            title="Planning"
            text="In line with your wishes, I make a plan of what should be done and how. Then I rank them in order of priority."
            icon={
              <BsFillCollectionFill size="3.5em" style={{ marginTop: 40 }} />
            }
          />
          <PlanCard
            title="Design"
            text="I make a rough prototype of your planned project and implement the design of your idea accordingly."
            icon={<AiOutlineAntDesign size="3.5em" style={{ marginTop: 40 }} />}
          />
          <PlanCard
            title="Developming, Coding"
            text="I am preparing and developing the necessary tools for the realization of your designed project."
            icon={<FaLaptopCode size="3.5em" style={{ marginTop: 40 }} />}
          />
          <PlanCard
            title="Feedbacks"
            text="I show the development status of your project in 2 stages and make changes in line with your feedback."
            icon={<VscFeedback size="3.5em" style={{ marginTop: 40 }} />}
          />
        </div>
      </section>
    </div>
  );
}
