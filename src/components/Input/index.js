import React from 'react';

import { Container } from './styles';

const Input = ({ label, placeholder, handleOnChange, value }) => {
  return (
    <Container>
      <span id="text">{label}</span>
      <input 
        id="input" 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value}></input>
    </Container>
  )
};

export default Input;
