import React from 'react';

const AddPersonMessage = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className='success'>{message}</div>;
};

export default AddPersonMessage;
