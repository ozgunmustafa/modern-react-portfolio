import React from "react";

export default function Works({ projects }) {
  return (
    <main className="container p-50">
      <div>
        <h1 className="section-title">It is my all works </h1>
        <small className="text-muted">You can preview my works</small>

        <div className="portfolio-list">
          {projects.map((project) => (
            <div>
              <img
                className="portfolio-image portfolio-img-border"
                src={project.images[0]}
                alt="portfolio"
              />
              <div className="portfolio-meta">
                <h3>Card Title</h3>
                <small className="text-muted">Design and Development</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
