import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription type="info">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro :(</strong>
          <p>Não foi possível fazer login.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription={false} type="success">
        <FiAlertCircle size={20} />
        <div>
          <strong>Tudo certo! õ/</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription type="error">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro :(</strong>
          <p>Não foi possível fazer login.</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
