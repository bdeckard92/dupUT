import React, { useState } from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

const Portfolio = ({ category }) => {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <img
              src={require(`../../assets/projects/${project.name}.jpg`)}
              alt={removeHyphensAndCapitalize(project.name)}
              className="project-bg"
            />
            <div className="project-text">
              <h3>
                <a href={project.link}>{removeHyphensAndCapitalize(project.name)}</a>{' '}
                <a href={project.repo}>
                  <i className="fab fa-github"></i>
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
