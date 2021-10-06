import React from 'react';

const Persons = ({ persons, onDeletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={() => onDeletePerson(person.id)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
