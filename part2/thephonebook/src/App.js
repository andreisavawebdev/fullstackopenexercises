import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import personServices from './services/persons';
import AddPersonMessage from './components/AddPersonMessage';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [addPersonMessage, setAddPersonMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personServices
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      persons.find(
        (person) =>
          person.name.toLowerCase() === newName.toLowerCase() &&
          person.number === newNumber
      )
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    if (persons.find((p) => p.name.toLowerCase() === newName.toLowerCase())) {
      const userInput = window.confirm(
        `You are updating this person's number. Are you sure?`
      );
      if (!userInput) {
        return;
      }
      const person = persons.find(
        (p) => p.name.toLowerCase() === newName.toLowerCase()
      );
      const { id } = person;
      const changedPerson = { ...person, number: newNumber };

      personServices
        .updateNumber(id, changedPerson)
        .then((returnedPerson) =>
          setPersons(
            persons.map((person) => (person.id !== id ? person : changedPerson))
          )
        )
        .catch((error) => {
          setErrorMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((person) => person.id !== id));
        });
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    personServices.createPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      setAddPersonMessage(`Added ${returnedPerson.name}`);
      setTimeout(() => {
        setAddPersonMessage(null);
      }, 5000);
    });
  };

  const deletePerson = (id) => {
    const userInput = window.confirm(
      'Are you sure you want to delete this person?'
    );
    if (!userInput) {
      return;
    }
    personServices.deletePerson(id).then(() => {
      personServices
        .getAll()
        .then((returnedPersons) => setPersons(returnedPersons));
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorMessage message={errorMessage} />
      <AddPersonMessage message={addPersonMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add new contact</h3>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFormSubmit={handleFormSubmit}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} onDeletePerson={deletePerson} />
    </div>
  );
};

export default App;
