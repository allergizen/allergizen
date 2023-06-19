import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
   const [scanned, setScanned] = useState(false);
   const [UID, setUID] = useState('');
   return (
      <ScanContext.Provider value={{ scanned, setScanned, UID, setUID }}>
         {children}
      </ScanContext.Provider>
   );
};
