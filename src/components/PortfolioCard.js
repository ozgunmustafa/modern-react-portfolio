import React, { useState } from "react";
import ImageBox from "./ImageBox";

export default function PortfolioCard({ project }) {

  return (
    <div class="portfolio-card" key={project.id}>
      <span className="portfolio-icon">
        <ImageBox images={project.images}></ImageBox>
      </span>
      <img
        className="portfolio-image portfolio-img-border "
        src={project.images[0]}
        alt="portfolio"
      />

      <div className="portfolio-meta">
        <div>
          <h3>{project.title}</h3>
          <small className="text-muted">{project.description}</small>
        </div>
        <a href={project.url} className=" visit-button">
          Git
        </a>
      </div>
    </div>
  );
}
