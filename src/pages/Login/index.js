import React from 'react';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Input label="Usuário" placeholder="Digite seu usuário"></Input>
      <Input label="Senha" placeholder="Digite sua senha"></Input>
      <Button label="Entrar"></Button>
    </Container>
  );
};

export default Login;
