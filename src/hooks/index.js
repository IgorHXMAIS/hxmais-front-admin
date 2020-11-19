import React from 'react';

import { AuthProvider } from './auth';
import { PopUpProvider } from './popUp';

function hooks({ children }) {
  return (
    <AuthProvider>
      <PopUpProvider>{children}</PopUpProvider>
    </AuthProvider>
  );
}

export default hooks;
