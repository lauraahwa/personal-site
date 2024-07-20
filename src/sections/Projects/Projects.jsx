import React from 'react';
import ProjectItem from './ProjectCard';

const ProjectsPage = () => {
    const projects = [
      { emoji: '🛒', title: 'TigerCreatives', description: 'Description for Project 1' },
      { emoji: '📝', title: 'Resume Architech', description: 'Description for Project 2' },
      { emoji: '🧬', title: 'Command Line Hi-C Analysis', description: 'Description for Project 3' },
      { emoji: '👤', title: 'Personal Site', description: 'Description for Project 3' },
      { emoji: '🌌', title: 'Direct Detection of Dark Matter', description: 'Description for Project 3' },
      { emoji: '🃏', title: 'Blackjack', description: 'Description for Project 3' }
    ];
  
    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            emoji={project.emoji}
            title={project.title}
            description={project.description}
            index={index}
          />
        ))}
      </div>
    );
  };
  
  export default ProjectsPage;