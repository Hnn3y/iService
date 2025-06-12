import React from 'react';

const SlideButtons = ({ length, active, onNext }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex space-x-2">
        {[...Array(length)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === active ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-6 py-2 rounded-full"
      >
        {active === length - 1 ? 'NEXT' : 'Continue'}
      </button>
    </div>
  );
};

export default SlideButtons;
