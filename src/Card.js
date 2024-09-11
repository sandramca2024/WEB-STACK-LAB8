import React, { useState } from 'react';

const Card = ({ event }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={event.image} alt={event.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <ul className="text-gray-700 text-base">
          {event.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleLike}
           className={`text-red-500 focus:outline-none transition-transform duration-300 ${
             liked ? 'transform scale-150' : ''
           }`}
          
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default Card;
