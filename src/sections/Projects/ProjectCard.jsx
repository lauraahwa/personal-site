import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ emoji, title, description }) => {
  return (
    <div className="project-item">
      <div className="emoji-container">
        <a href="#" className="emoji-link">
          {emoji}
        </a>
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;