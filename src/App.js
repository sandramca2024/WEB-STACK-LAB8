import React from 'react';
import Card from './Card';
import Image1 from './images/art.jpg';
import Image2 from './images/music.jpg';
import Image3 from './images/texh.jpg';

function App() {
  const events = [
    {
      title: 'Music Concert',
      features: ['Live Bands', 'DJ Performance', 'Food Stalls'],
      image: Image2, 
    },
    {
      title: 'Art Exhibition',
      features: ['Painting', 'Sculpture', 'Photography'],
      image: Image1, 
    },
    {
      title: 'Tech Conference',
      features: ['Keynote Speakers', 'Workshops', 'Networking'],
      image: Image3, 
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">EUPHORIA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;
