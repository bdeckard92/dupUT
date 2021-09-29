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
        // TODO: Write logic that will render a Card component for each dog
        // TODO: Pass `name` and `description` to the card as props
        // TODO: Add a `key` property that is set to the ID for each dog
      ))}
    </div>
  );
}
