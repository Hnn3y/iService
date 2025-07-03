import React, { useState } from 'react';
import OnboardingSlide from './OnboardingSlide';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: '/assets/onboarding1.png',
    title: 'Welcome to iService!',
    description: 'Your one-stop platform to find trusted professionals for any job — big or small.',
  },
  {
    image: '/assets/onboarding2.png',
    title: 'Book at your convenience',
    description: 'Let’s make your life easier — one service at a time.',
  },
  {
    image: '/assets/onboarding3.png',
    title: 'Welcome to iService!',
    description: 'Get instant access to skilled experts, book services effortlessly, and get your work done hassle-free.',
  },
];

const OnboardingSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate('/auth/authhome'); // Change to actual start page
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <OnboardingSlide {...slides[current]} />

      <div className="flex items-center justify-between w-full p-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === current ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
          ))}
        </div>
        <button onClick={nextSlide} className="text-blue-600 font-semibold">
          {current === slides.length - 1 ? 'NEXT' : '→'}
        </button>
      </div>
    </div>
  );
};

export default OnboardingSlider;
