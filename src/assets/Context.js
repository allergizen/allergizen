import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
   const [scanned, setScanned] = useState(false);
   const [UID, setUID] = useState('hgnsghsekrgnserkjgjnserkjgnserkjgnsekrjgherkgbaerkgbaerogbaekrgbbhkugiefbjlkdqwbvswifvegw');
   return (
      <Context.Provider value={{ scanned, setScanned, UID, setUID }}>{children}</Context.Provider>
   );
};
