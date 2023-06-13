export default api = {
   API_ENDPOINT: 'https://it.openfoodfacts.org/',

   from_barcode: (code) => {
      return new Promise((resolve, reject) => {
         fetch(api.API_ENDPOINT + 'api/v2/product/' + code)
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
      });
   },

   from_name: (name, page = 1) => {
      return new Promise((resolve, reject) => {
         fetch(
            api.API_ENDPOINT +
               `cgi/search.pl?action=process&json=true&page=${page}&search_terms=${name}`,
         )
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
      });
   },
};

/*
    Ricerca per codice a barre:
    https://it.openfoodfacts.org/api/v2/product/${barcode}

    Ricerca per nome:
    https://it.openfoodfacts.org/cgi/search.pl?action=process&json=true&page={page}&search_terms={ricerca}
*/
