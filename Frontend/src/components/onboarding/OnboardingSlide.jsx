import React from 'react';

const OnboardingSlide = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh] p-6">
      <div className="mb-6">
        <img src={image} alt="illustration" className="w-72 h-72 object-contain" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 max-w-md">{description}</p>
    </div>
  );
};

export default OnboardingSlide;
