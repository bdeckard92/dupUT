import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project(props) {

  const { project } = props;

  return (
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
  );
}

export default Project;
