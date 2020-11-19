import React, { createContext, useContext, useCallback, useState } from 'react';

import PopUp from '../components/PopUp';

const PopUpContext = createContext({});

function PopUpProvider({ children }) {
  const [content, setContent] = useState(<div />);
  const [state, setState] = useState(false);

  const createPopUp = useCallback((data) => {
    setContent(data);
    setState(true);
  }, []);

  return (
    <PopUpContext.Provider value={{ createPopUp }}>
      {children}
      <PopUp state={state} setState={setState}>
        {content}
      </PopUp>
    </PopUpContext.Provider>
  );
}

function usePopUp() {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error('PopUp must be used within an PopUpProvider');
  }

  return context;
}

export { usePopUp, PopUpProvider };
