import React from 'react';

const TargetBlankButton = ({ children, className, url }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <button className={className} onClick={() => openInNewTab(url)}>
      {children}
    </button>
  );
};

export default TargetBlankButton;
