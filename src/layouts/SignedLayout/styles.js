import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const Menu = styled.section`
  width: 80px;
  height: 100vh;
  background: rgb(178, 210, 53);
  background: linear-gradient(
    180deg,
    rgba(178, 210, 53, 1) 49%,
    rgba(203, 225, 78, 1) 92%
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;

  .logo {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    img {
      max-width: 90%;
      border-radius: 5px;
    }
  }

  .links {
    width: 100%;
    min-height: 80px;
    height: auto;
  }

  .logout {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: transparent;
      text-align: center;

      img {
        max-width: 24px;
      }

      p {
        font-family: 'Circular Std Book';
        margin-top: 8px;
        color: #f8faf8;
      }
    }
  }
`;

export const Link = styled(LinkRouter)`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    props.to === props.route ? 'rgba(0,0,0,0.1)' : 'transparent'};
`;

export const Content = styled.section`
  width: calc(100% - 80px);
  height: 100vh;
  background: #eef0ee;
`;
