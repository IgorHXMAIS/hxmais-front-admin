import React, { useCallback } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Wrapper, PopUpContainer } from './styles';

function PopUp({ children, state, setState }) {
  const closePopUp = useCallback(() => {
    setState(false);
  }, [setState]);

  return (
    <Wrapper currentDisplay={state}>
      <PopUpContainer>
        <button className="close-button" onClick={closePopUp}>
          <AiOutlineCloseCircle size={32} color="#b2d235" />
        </button>
        <div className="content">{children}</div>
      </PopUpContainer>
    </Wrapper>
  );
}

export default PopUp;
