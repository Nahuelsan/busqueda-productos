## Desde el Back-End 

### Middleware
`Morgan` Nos pinta en la consola las peticiones al servidor. <br />
`Express` Proporciona el ajuste para indicar en que puerto conectar y funcion de enrutamiento peticiones GET, POST, PUT, DELETE. <br />
`Axios` Peticiones https al [end point de MeLi](https://api.mercadolibre.com/sites/MLA/search?q=iphone). <br />


### index.js

Requerimos el archivo app y por consola mostramos que el server esta activado. <br />


### app.js

Requerimos `Morgan` y `Express` y las rutas que ocuparemos. <br />
Asignamos las funciones de express a la constaten server para hacer uso de las mismas, y morgan para mostrar por pantalla los peticiones al server. <br />


### routes/index.js

En index utilizamos el Middleware `express` para requerir la funcion `Router()` y cuando el usuario utilice la ruta `/api` se utilice el archivo api.js. <br />


### routes/api.js
Requerimos `Axios` y `Express` con la funcion `Router()` <br />

Solicitamos las peticiones que el usuario necesita recibimos como parametro palabra clave y un offset que nos delimita los si quiere los productos del [0-50] [50-100] ... [n-n+50] <br />
Al recibir lo devolvemos al usuario un JSON con 50 productos relacionados a la palabra clave que necesita
```
server.get('/search/:products/:pagina', (req, res, next) => {
	const termino = req.params.products;
	const pagina = req.params.pagina;
	
	//Pedimos los productos
	const url = `https://api.mercadolibre.com/sites/MLA/search?q=${termino}&nano&limit=50&offset=${pagina}`;
	
	//Y los devolvemos
	axios(url)
		.then(r => res.send(r.data))
		.catch(next)
});
```


