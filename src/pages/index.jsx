import React from "react";
import Link from "next/link";
import Button from "../components/Button.jsx";
import PortfolioCarousel from "../components/PortfolioCarousel.jsx";

const HomePage = () => (
  <>
    <section className="bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Kamil Wozniak - Full-Stack Developer</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          I build innovative and scalable web applications. Explore my work and get in touch to collaborate.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/projects" passHref>
            <Button variant="primary">View My Work</Button>
          </Link>
          <Button variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/kamil-wozniak-b7429a113/', '_blank')}>
            Visit Linkedin
          </Button>
        </div>
      </div>
    </section>

    <PortfolioCarousel/>
  </>
);

export default HomePage;
