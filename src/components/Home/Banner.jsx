import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';

const images = [
  {
    src: Img1,
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.',
  },
  {
    src: Img2,
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.',
  },
  {
    src: Img3,
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.',
  },
  {
    src: Img4,
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalImages = images.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      ></div>

      {/* Overlay for Darkening the Background */}
      <div className="absolute inset-0 "></div>

      {/* Left Section - Fixed Text */}
      <div className="absolute inset-y-0 left-0 flex items-center w-1/2 p-8 text-left z-10">
        <div className="text-white">
          <h3 className="font-bold text-4xl">{images[currentIndex].title}</h3>
          <h4 className="text-2xl text-orange-500">{images[currentIndex].topic}</h4>
          <p className="mt-4">{images[currentIndex].description}</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-gray-300 py-2 px-4 rounded">SEE MORE</button>
            <button className="border border-white text-white py-2 px-4 rounded">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Thumbnails at Right Bottom */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
  {images.map((image, index) => (
    <motion.div
      key={index}
      className={`flex-shrink-0 w-24 h-32 transition-transform duration-500 ${currentIndex === index ? 'scale-110' : ''}`} // Changed h-24 to h-32 for a rectangular shape
      onClick={() => handleThumbnailClick(index)}
    >
      <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg" />
    </motion.div>
  ))}
</div>

      {/* Arrow Navigation in the Third Quadrant */}
      <div className="absolute bottom-12 left-1/2 z-20 flex gap-4 transform -translate-x-1/2">
  <button
    id="prev"
    onClick={prevSlide}
    className="bg-white bg-opacity-30 backdrop-blur-md text-white rounded-full p-4 w-12 h-12 flex items-center justify-center hover:scale-105"
  >
    &lt; {/* This represents "<" */}
  </button>
  <button
    id="next"
    onClick={nextSlide}
    className="bg-white bg-opacity-30 backdrop-blur-md text-white rounded-full p-4 w-12 h-12 flex items-center justify-center hover:scale-105"
  >
    &gt; {/* This represents ">" */}
  </button>
</div>
    </div>
  );
};

export default Banner;
