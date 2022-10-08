import React, { useState } from 'react';
import ImageBox from './ImageBox';
import { IoMdImages } from 'react-icons/io';

export default function PortfolioCard({ project }) {
  return (
    <div class="portfolio-card" key={project.id}>
      <img
        className="portfolio-image portfolio-img-border "
        src={window.location.origin + '/img' + project.images[0]}
        alt="portfolio"
      />

      <div className="portfolio-meta">
        <div style={{ width: '50%' }}>
          <h3>{project.title}</h3>
          <small className="text-muted">{project.description}</small>
        </div>
        <div>
          {/* <ImageBox images={project.images} /> */}
          <a href={project.url} className=" action-button">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
