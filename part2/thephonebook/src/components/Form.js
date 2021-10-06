import React from 'react';

const Form = (props) => {
  const {
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
    handleFormSubmit,
  } = props;

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
