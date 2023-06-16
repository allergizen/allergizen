// AppWrapper.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import App from './App';

const AppWrapper = () => {
   const [userToken, setUserToken] = useState('');
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const checkUserToken = () => {
         // Recupera il token di autenticazione dall'archiviazione o da altro luogo
         const token = 'TOKEN_DI_AUTENTICAZIONE';

         // Imposta il token nell'applicazione
         setUserToken(token);

         // Indica che il caricamento è terminato
         setLoading(false);
      };

      // Simula un'operazione asincrona di recupero del token
      setTimeout(checkUserToken, 2000);
   }, []);

   if (loading) {
      return (
         <View style={{ flex: 1 }}>
            {/* Puoi personalizzare lo stile del componente di caricamento qui */}
            <Text>Loading...</Text>
         </View>
      );
   }

   return <App userToken={userToken} />;
};

export default AppWrapper;
