import React, { useEffect, useRef } from 'react';
import projectData from '../data/workfolio.json';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export const Section1 = () => {
  const headerRef = useRef(null);
  const workfolioRef1 = useRef(null);
  const workfolioRef2 = useRef(null);

  const handleIntersection = (element) => {
    element.classList.add('visible');
  };

  const observerOptions = {
    threshold: 0.1, 
  };

  useIntersectionObserver(headerRef, observerOptions, handleIntersection);
  useIntersectionObserver(workfolioRef1, observerOptions, handleIntersection);
  useIntersectionObserver(workfolioRef2, observerOptions, handleIntersection);

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div className='workfolio1' key={index}>
        <img src={project.imgSrc} alt="section Image" />
        <div className='workfolio_title'>
          <img src={project.vectorSrc} alt="section Image" />
          <h3 className='vector_text'>{project.title}</h3>
        </div>
        <div className='project_tags'>
          {project.tags.map((tag, idx) => (
            <p className='project_tags-p' key={idx}>{tag}</p>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className='container'>
      <div className='section1_wrapper'>
        
        <div className='section1_header' ref={headerRef}>
          <div className='section1_left'>Work</div>
          <div className='section1_center'>
            <span className='section1_h2'><h2>DISCOVER</h2></span>
            <span className='section1_h2'><h2>OUR PROJECTS</h2></span>
          </div>
          <div className='section1_right'>
            <button type='button'>CONTACT US</button>
          </div>
        </div>

        <div className='section1_workfolio' ref={workfolioRef1}>
          {renderProjects(projectData.folio1)}
        </div>
        <div className='section1_workfolio' ref={workfolioRef2}>
          {renderProjects(projectData.folio2)}
        </div>
      </div>
    </div>
  );
};

export default Section1;
