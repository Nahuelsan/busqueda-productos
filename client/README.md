This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Desde el Front End tenemos 3 + 1 componentes

### 1 Componente Padre

Encargado de renderizar los componentes `SearchBar y Catalogo`

Esta compuesta por un estado que contiene:<br />
`Termino:` la palabra clave para la busqueda del producto en cuestion.<br />
`Pagina` para conctrolar la paginación los productos.<br />
`Pedir` controlar el offset de la request api.<br />
`Products` usado para almacenar los productos recibido desde la API.<br />
`ProductsFiltered` usado para almacenar los productos con filtros(precio y/o estado).<br />
`FilterPrice` usamos para saber si el usuario necesita usar filtros por precio.<br />
`Conditionfilter` usamos para saber si el usuario necesita usar filtros por estado.<br />
`FilterActive` usamos para saber si hay un filtro activado y renderizamos el componente Catalogo con el array ProductsFiltered<br />


### Funciones

`paginaAnterior` En esta funcion verificamo que en la pagina que estemos posicionado sea la ultima si es el caso lanzamos un alert al cliente, o que hayamos hecho consultas a la api con la variable pedir si es el caso le restamos 50, que es lo que el offset de MeLi nos deja consultar 50 maximo, y hacemos llamado a `consultarApi`.<br />
`paginaSiguiente` Aquí hacemos una pregunta que si tenemos activados los filtros y si los products que recibimos de catalogo son menor a 10 para saber si hacer un consulta a la API o mostrar los productos restantes en caso contrario suma 10 a el estado pagina y llama a la funcion por defecto render <br />
`consultarApi` Hacemos el pedido axios al server seteamos los productos recibidos en products y productsFiltered, seteamos pagina en 0, luego ejecutamos los filtros si estos estan activados <br />
`filters` Esta funcion recibe parametros desde `Catalogo` que son los filtros que el usuario activo en ese componente, los seateamos en el estado del componente padre, activamos el `FilterActive` ejecutamos los filtros y luego la funcion render <br />
`status` Ejecutamos un filtrado de los productos y los seteamos en `ProductsFiltered` segun el filtro que el usuario selecciono<br />
`price` Creamos una constante  con los `ProductsFiltered` ya que estos se modifican con la funcion de ordenamiento de `sort` la cual aplicamos segun lo que el usuario desee descendente o ascendente <br />
`datosBusqueda` Recibimos del `SearchBar`, la palabra clave para la busqueda la seteamos en el estado y llamamos a `consultarApi` <br />

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
