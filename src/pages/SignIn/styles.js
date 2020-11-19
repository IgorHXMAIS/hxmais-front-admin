import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eef0ee;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);

  }
`;

export const Form = styled(Unform)`
  width: 400px;
  min-height: 300px;
  height: auto;
  background: #fff;
  border-radius: 5px;
  padding: 16px;

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 32px;
    color: #fff;
    border-radius: 5px;
    background: red;
  }

  h1 {
    font-size: 24px;
    font-family: 'Circular Std Medium';
    color: #b2d235;
  }

  p {
    font-size: 16px;
    font-family: 'Circular Std Book';
    margin-top: 8px;
  }

  .input {
    margin-top: 32px;

    label {
      font-size: 16px;
      font-family: 'Circular Std Book';
    }
  }

  button {
    margin-top: 48px;
    width: 160px;
    height: 48px;
    background: rgb(178, 210, 53);
    background: linear-gradient(
      180deg,
      rgba(178, 210, 53, 1) 49%,
      rgba(203, 225, 78, 1) 92%
    );
    color: #4d4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: 'Circular Std Book';

    &:hover {
      background: ${darken(0.05, '#b2d235')};
    }

    svg {
      animation: ${rotate} infinite 0.7s;
    }
  }
`;
