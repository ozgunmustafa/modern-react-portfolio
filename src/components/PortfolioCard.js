import React, { useState } from "react";
import ImageBox from "./ImageBox";
import { IoMdImages } from "react-icons/io";

export default function PortfolioCard({ project }) {
  return (
    <div class="portfolio-card" key={project.id}>
      <img
        className="portfolio-image portfolio-img-border "
        src={project.images[0]}
        alt="portfolio"
      />

      <div className="portfolio-meta">
        <div style={{ width: "50%" }}>
          <h3>{project.title}</h3>
          <small className="text-muted">{project.description}</small>
        </div>
        <div>
          <i className=" action-button">
            <ImageBox images={project.images}></ImageBox>
          </i>
          <a href={project.url} className=" action-button">
            Git
          </a>
        </div>
      </div>
    </div>
  );
}
