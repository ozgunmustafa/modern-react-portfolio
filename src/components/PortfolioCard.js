import React from 'react';
import TargetBlankButton from './TargetBlankButton';
import { useTranslation } from 'react-i18next';

export default function PortfolioCard({ project, className }) {
  const { t } = useTranslation();

  return (
    <div
      className={`${className && className} portfolio-card`}
      key={project.id}
    >
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
        <TargetBlankButton url={project.url} className="action-button">
          {t('view')}
        </TargetBlankButton>
      </div>
    </div>
  );
}
