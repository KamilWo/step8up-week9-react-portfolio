import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../data/projects.json';

const PortfolioCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Step8Up Projects Gallery</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <ProjectCard project={project}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
