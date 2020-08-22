import React from "react";

export default function Works({projects}) {
  return (
    <div>
      {
      projects.map((project)=>(
        <main className="container p-50">
      <h1 className="section-title">It is my all works </h1>
      <small className="text-muted">You can preview my works</small>
      <div className="portfolio-list">
        <div>
          <img
            className="portfolio-image portfolio-img-border"
            src={project.images[0].url}
            alt="portfolio"
          />
          <div className="portfolio-meta">
            <h3>Card Title</h3>
            <small className="text-muted">Design and Development</small>
          </div>
        </div>
     
      </div>
    </main> 
      ))
    }
    
    </div>
    
  );
}
