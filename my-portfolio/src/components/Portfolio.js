import React from 'react';
import Project from './Project';

function Portfolio() {
  // Define your projects here
  const projects = [
    {
      image: 'project1.png',
      title: 'Project 1',
      appLink: 'https://ryangolder.github.io/weather-forecast/',
      repoLink: 'https://github.com/RyanGolder/weather-forecast',
    },
    {
      image: 'project2.png',
      title: 'Project 2',
      appLink: 'https://elibrer.github.io/weather-fashion-app/',
      repoLink: 'https://github.com/Elibrer/weather-fashion-app',
    },
    {
      image: 'project3.png',
      title: 'Project 3',
      appLink: 'https://pwa-text-editor-rwg-8f9b6c51a974.herokuapp.com/',
      repoLink: 'https://github.com/RyanGolder/pwa-text-editor',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            appLink={project.appLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
