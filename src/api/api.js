import { AsyncStorage } from '@react-native-async-storage/async-storage';

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

   translate_allergens: (allergens) => {
      allergens = allergens.split(',');

      const allergenTable = {
         'en:lupin': 'Lupini',
         'en:peanuts': 'Arachidi',
         'en:sulphur-dioxide-and-sulphites': 'Anidride solforosa e solfiti',
         'en:milk': 'Latte',
         'en:crustaceans': 'Crostacei',
         'en:molluscs': 'Molluschi',
         'en:eggs': 'Uova',
         'en:gluten': 'Glutine',
         'en:soybeans': 'Soia',
         'en:fish': 'Pesce',
         'en:mustard': 'Senape',
         'en:sesame-seeds': 'Semi di sesamo',
         'en:celery': 'Sedano',
         'en:nuts': 'Frutta a guscio',
      };

      const res = [];

      for (let allergen of allergens)
         if (allergenTable.hasOwnProperty(allergen)) res.push(allergenTable[allergen]);

      return res;
   },

   get_allergens: (allergens) => {
      allergens = allergens.split(',');

      var userAllergens = [];
      
      return api.translate_allergens(
         allergens.filter((el) => userAllergens.includes(el)).join(','),
      );
   },

   normalize_data: (data) => {
      return {
         product_name: data.product_name?? data.product_name_en?? data.product_name_fr?? '?',
         img: data.image_front_url,
         code: data.code,
         brand: data.brands,
         allergens: data.allergens,
         traces: data.traces,
      };
   }
};

/*
    Ricerca per codice a barre:
    https://it.openfoodfacts.org/api/v2/product/${barcode}

    Ricerca per nome:
    https://it.openfoodfacts.org/cgi/search.pl?action=process&json=true&page={page}&search_terms={ricerca}
*/
