api = {
    API_ENDPOINT: 'https://it.openfoodfacts.org/',

    from_barcode: (code) => {
        return new Promise((resolve, reject) => {
            fetch(api.API_ENDPOINT + 'api/v2/product/' + code)
                .then(res => res.json())
                .then(resolve)
                .catch(reject)
        })
    },

    from_name: (name, page = 1) => {
        return new Promise((resolve, reject) => {
            fetch(api.API_ENDPOINT + `cgi/search.pl?action=process&json=true&page=${page}&search_terms=${name}`)
                .then(res => res.json())
                .then(resolve)
                .catch(reject)
        })
    },

    simili: (categorie, allergeni) => {
        const req = {}

        for (let i = 0; i < categorie.length; i++) {
            req['tagtype_' + String(i)] = 'categories'
            req['tag_contains_' + String(i)] = 'contains'
            req['tag_' + String(i)] = categorie[i]
        }

        for (let i = categorie.length; i < allergeni.length + categorie.length; i++) {
            req['tagtype_' + String(i)] = 'allergens'
            req['tag_contains_' + String(i)] = 'does_not_contain'
            req['tag_' + String(i)] = allergeni[i - categorie.length]
        }

        req.action = 'process'
        req.json = true

        return new Promise((resolve, reject) => {
            fetch(api.API_ENDPOINT + 'cgi/search.pl?' + new URLSearchParams(req).toString())
                .then(res => res.json())
                .then(resolve)
                .catch(reject)
        })
    }
}

/*
    Ricerca per codice a barre:
    https://it.openfoodfacts.org/api/v2/product/${barcode}

    Ricerca per nome:
    https://it.openfoodfacts.org/cgi/search.pl?action=process&json=true&page={page}&search_terms={ricerca}

    Simili:
    https://it.openfoodfacts.org/cgi/search.pl?
    tagtype_0=categories&tag_contains_0=contains&tag_0=colazioni&
    tagtype_1=allergens&tag_contains_1=does_not_contain&action=process&tag_1=glutine
*/