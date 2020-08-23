import React from "react";
import Bounce from "react-reveal/Bounce";
import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import PlanCard from "../components/PlanCard";
import PortfolioCard from "../components/PortfolioCard";


export default function Landing({ contact, projects }) {

  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];

  return (
    <div className="px-50 py-50 container">
      <section className="contact">
        <p className="landing-text">
          I can help you about <span className="empty-text">Design</span> and{" "}
          <b className="empty-text">Development</b>.
        </p>
        <div className="my-30">
          <Bounce top>
            <a
              href={`https://wa.me/${contact.PHONE}`}
              className="btn btn-dark mr-10"
            >
              <FaWhatsapp size=".8em" /> Contact on Whatsapp
            </a>
          </Bounce>
          <a href="#" className="btn my-10 ">
            Resume
          </a>
        </div>
      </section>

      <section className="">
        <h1 className="section-title">Featured Works</h1>
        <small className="text-muted">You can preview my work</small>

        <div className="portfolio-list">
          {projects.map((project) => (
           <PortfolioCard project={project}/>
          ))}
        </div>
      </section>

      <section className="">
        <h1 className="section-title">Nasıl Çalışırım? </h1>
        <small className="text-muted">You can preview my works plan...</small>

        <div className="portfolio-list">
          <PlanCard
            title="Planning"
            text="İstekleriniz doğrultusunda, neyin nasıl yapılması gerektiğinin planını çıkarıyorum. Daha sonrasında ise bunları öncelik derecesine göre sıralıyorum."
            icon={
              <BsFillCollectionFill size="3.5em" style={{ marginTop: 40 }} />
            }
          />
              <PlanCard
            title="Designing"
            text="Planı yapılmış projenizin kabaca bir prototip çıkarıyor ve bu doğrultuda fikrinizin tasarımını hayata geçiriyorum."
            icon={
              <AiOutlineAntDesign  size="3.5em" style={{ marginTop: 40 }} />
            }
          />
              <PlanCard
            title="Development"
            text="Tasarımı oluşturulmuş projenizin hayata geçirilmesi için gerekli araçları hazırlıyor ve geliştirmeye başlıyorum."
            icon={
              <FaLaptopCode size="3.5em" style={{ marginTop: 40 }} />
            }
          />
              <PlanCard
            title="FeedBacks"
            text="Projenizin gelişim durumunu 2 aşamalı olarak gösteriyor ve geri bildirimleriniz doğrultusunda değişiklik yapıyorum."
            icon={
              <VscFeedback size="3.5em" style={{ marginTop: 40 }} />
            }
          />
        </div>
      </section>
    </div>
  );
}
