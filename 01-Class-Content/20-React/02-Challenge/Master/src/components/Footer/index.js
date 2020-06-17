import React from 'react';

function Footer(props) {

  const icons = [
    {
      name: "fab fa-github",
      link: "#"
    },
    {
      name: "fab fa-twitter",
      link: "#"
    },
    {
      name: "fab fa-stack-overflow",
      link: "#"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
