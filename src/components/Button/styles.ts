import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #312e38;
  font-weight: 500;
  border: 0;
  border-radius: 20px;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;
  width: 100%;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
