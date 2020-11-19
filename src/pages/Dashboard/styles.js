import styled, { keyframes } from 'styled-components';

import { darken } from 'polished';

export const AdminInformation = styled.section`
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: 'Circular Std Medium';
  }
`;

export const Representatives = styled.div`
  width: 100%;
  padding: 0 32px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 32px 0;

    h1 {
      font-family: 'Circular Std Medium';
    }

    button {
      width: 200px;
      height: 56px;
      border-radius: 5px;
      background: #b2d235;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 16px;
        font-family: 'Circular Std Book';
        color: #fff;
        margin-right: 16px;
      }

      img {
        max-width: 24px;
      }

      &:hover {
        background: ${darken(0.05, '#b2d235')};
      }
    }
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

export const RepresentativesList = styled.div`
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
        font-size: 18px;
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

export const ViewRepresentativeSalePopUp = styled.div`
  padding: 0 16px;
  padding-bottom: 32px;

  h1 {
    font-size: 20px;
    margin: 24px 0;
    font-family: 'Circular Std Medium';
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

export const PopUpLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    animation: ${rotate} infinite 0.7s;
  }

  h1 {
    margin-top: 24px;
    font-size: 18px;
    color: #4d4d4d;
  }
`;

export const ViewCreateRepresentativePopUp = styled.div`
  padding-bottom: 32px;

  .input {
    padding: 0 24px;
    margin-top: 16px;
    padding-bottom: 32px;

    label {
      font-family: 'Circular Std Book';
    }

    button {
      font-family: 'Circular Std Book';
      width: 200px;
      height: 48px;
      border-radius: 8px;
      background: #b2d235;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      margin-top: 32px;
    }
  }
`;
