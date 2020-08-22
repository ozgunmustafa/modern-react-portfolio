import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import ImageBox from "../components/ImageBox";
import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { IoIosVideocam } from "react-icons/io";

export default function Landing({contact,projects}) {
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
          I can help you about <span className="empty-text">Design</span> and <b className="empty-text">Development</b>.
        </p>
        <div className="my-30">
        <Bounce top>
          <a href={`https://wa.me/${contact.PHONE}`} className="btn btn-dark mr-10">
            <FaWhatsapp size=".8em" /> Contact on Whatsapp
          </a>
        </Bounce>
        <a href="#" className="btn my-10 ">
          Resume
        </a>
        </div>
        
      </section>

      <div style={{ height: 300 }}></div>

      <ImageBox images={images}></ImageBox>

      <section className="">
        <h1 className="section-title">Featured Works</h1>
        <small className="text-muted">You can preview my work</small>

        <div className="portfolio-list">
          {projects.map((project) => (
            <a href={project.url}>
            <div class="portfolio-card">
            <span className="portfolio-icon">
              <IoIosVideocam size="1.5em" />
            </span>
            <img
              className="portfolio-image"
              src={project.images[0].url}
              alt="portfolio"
            />
            <h1>{project.title}</h1>
            <small className="text-muted">Design and Development</small>
          </div>
            </a>
            
          ))}

          
        </div>
      </section>

      <section className="">
        <h1 className="section-title">Nasıl Çalışırım? </h1>
        <small className="text-muted">You can preview my works plan...</small>

        <div className="portfolio-list">
          <div class="plan-card">
            <Fade>
              <h2>Planning</h2>

              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque ab provident? Maxime pariatur repudiandae reiciendis
                quasi voluptatem accusamus quisquam excepturi soluta veritatis
                animi, libero assumenda dolore, autem suscipit sed!
              </p>
              <BsFillCollectionFill size="3.5em" style={{ marginTop: 30 }} />
            </Fade>
          </div>
          <div class="plan-card">
            <Fade>
              <h2>Design</h2>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque ab provident? Maxime pariatur repudiandae reiciendis
                quasi voluptatem accusamus quisquam excepturi soluta veritatis
                animi, libero assumenda dolore, autem suscipit sed!
              </p>
              <AiOutlineAntDesign size="3.5em" style={{ marginTop: 30 }} />
            </Fade>
          </div>
          <div class="plan-card">
            <Fade>
              <h2>Development</h2>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque ab provident? Maxime pariatur repudiandae reiciendis
                quasi voluptatem accusamus quisquam excepturi soluta veritatis
                animi, libero assumenda dolore, autem suscipit sed!
              </p>
              <FaLaptopCode size="3.5em" style={{ marginTop: 30 }} />
            </Fade>
          </div>
          <div class="plan-card">
            <Fade>
              <h2>Feedbacks</h2>
              <p className="text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque ab provident? Maxime pariatur repudiandae reiciendis
                quasi voluptatem accusamus quisquam excepturi soluta veritatis
                animi, libero assumenda dolore, autem suscipit sed!
              </p>
              <VscFeedback size="3.5em" style={{ marginTop: 30 }} />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
