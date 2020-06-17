import React, { useState } from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'MERN Stack',
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
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
                <a href="#">{removeHyphensAndCapitalize(project.name)}</a>{' '}
                <a href="#">
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

export default PhotoList;
