import React from 'react';

import { Container } from './styles';

const Button = ({ label, handleOnClick }) => {
  return (
    <Container onClick={handleOnClick}>
      {label}
    </Container>
  )
};

export default Button;
