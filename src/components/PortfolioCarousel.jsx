import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

const PortfolioCarousel = () => {
  return (
    <div className="py-12 bg-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Step8Up Projects Gallery</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          className="mySwiper pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="p-4 h-full">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
