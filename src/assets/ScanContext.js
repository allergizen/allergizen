import React, { createContext, useState } from 'react';

export const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
   const [scanned, setScanned] = useState(false);

   return <ScanContext.Provider value={{ scanned, setScanned }}>{children}</ScanContext.Provider>;
};
