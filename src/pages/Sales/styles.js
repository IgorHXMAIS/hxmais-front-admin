import styled, { keyframes } from 'styled-components';

export const Sales = styled.div`
  width: 100%;
  padding: 24px 32px;

  h1 {
    font-family: 'Circular Std Medium';
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);

  }
`;

export const SalesList = styled.div`
  width: 100%;
  padding: 24px 0;

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      animation: ${rotate} infinite 0.7s;
    }
  }

  table {
    width: 100%;
    border: 0;
    border-collapse: collapse;

    thead,
    tbody {
      td {
        &:first-child {
          padding-left: 16px;
        }

        &:last-child {
          padding-right: 16px;
        }
      }
    }

    thead {
      td {
        font-family: 'Circular Std Medium';
        font-size: 14px;
        padding: 12px 0;
        background: #b2d235;
        color: #fff;

        &:first-child {
          border-radius: 5px 0 0 0;
        }

        &:last-child {
          border-radius: 0 5px 0 0;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #4d4d4d;
        background: #fff;

        &:last-child {
          border: 0;
        }

        td {
          font-size: 16px;
          font-family: 'Circular Std Book';
          padding: 16px 0;

          .more {
            padding-left: 20%;

            button {
              background: transparent;
            }
          }
        }
      }
    }
  }
`;

export const ViewSalePopUp = styled.div`
  padding: 32px 0;

  h1 {
    font-family: 'Circular Std Medium';
    margin: 0 24px;
  }

  .input {
    margin: 16px 0;
    padding: 0 24px;

    label {
      font-family: 'Circular Std Book';
    }
  }
`;
