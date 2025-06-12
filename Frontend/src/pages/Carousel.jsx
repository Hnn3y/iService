import React, { useState } from 'react';
import SlideButtons from './SlideButtons';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: 'Welcome to iService!',
      desc: 'Your one-stop platform to find trusted professionals for any job — big or small.',
      image: '/Frontend/src/assets/electrician (1).jpg',
    },
    {
      title: 'Book at your convenience',
      desc: 'Let’s make your life easier — one service at a time.',
      image: '../assets/electrician (1).jpg',
    },
    {
      title: 'Welcome to iService!',
      desc: 'Get instant access to skilled experts, book services effortlessly, and get your work done hassle-free.',
      image: '/assets/slide3.png',
    },
  ];

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      navigate('/final'); // Replace with your route
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <img
        src={slides[index].image}
        alt={`Slide ${index + 1}`}
        className="w-60 h-60 mb-6 object-contain"
      />
      <h2 className="text-2xl font-bold mb-2">{slides[index].title}</h2>
      <p className="text-gray-600 mb-6">{slides[index].desc}</p>

      <SlideButtons length={slides.length} active={index} onNext={handleNext} />
    </div>
  );
};

export default Carousel;
