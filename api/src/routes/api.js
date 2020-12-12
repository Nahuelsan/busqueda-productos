const server = require('express').Router();
const axios = require('axios');

var cache = {}

	
	
//Peticion a la api MeLi
server.get('/search/:products/:pagina', (req, res, next) => {
	const termino = req.params.products;
	const pagina = req.params.pagina;
	const url = `https://api.mercadolibre.com/sites/MLA/search?q=${termino}&nano&limit=50&offset=${pagina}`;
	//Pedimos los productos
	//Y los devolvemos
	axios(url)
		.then(r => res.send(r.data))
		.catch(next)
});


module.exports = server;