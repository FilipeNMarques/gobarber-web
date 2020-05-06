import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="user" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="create">
          <FiArrowLeft size={20} />
          Voltar para logon
        </a>
      </Content>
    </Container>
  </>
);

export default SignUp;
