import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.currentDisplay ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PopUpContainer = styled.div`
  width: 600px;
  height: 400px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  cursor: default;

  .close-button {
    width: 48px;
    height: 48px;
    background: #fff;
    position: absolute;
    right: -16px;
    top: -16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 5;
  }

  .content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`;
