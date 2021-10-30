import React from 'react';
import Card from './Card';

const canines = [
  {
    name: 'Spot',
    description: 'The best boy',
    id: 1,
  },
  {
    name: 'Zero',
    description: 'A kind soul',
    id: 2,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 3,
  },
];

export default function Display() {
  return (
    <div>
      {canines.map((dog) => (
        <Card name={dog.name} description={dog.description} key={dog.id} />
      ))}
    </div>
  );
}
