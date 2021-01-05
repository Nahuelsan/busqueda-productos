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
`FilterActive` usamos para saber si hay un filtro activado y renderizamos el componente Catalogo con el array ProductsFiltered. <br />


### Funciones

`paginaAnterior` En esta funcion verificamo que en la pagina que estemos posicionado sea la ultima si es el caso lanzamos un alert al cliente, o que hayamos hecho consultas a la api con la variable pedir si es el caso le restamos 50, que es lo que el offset de MeLi nos deja consultar 50 maximo, y hacemos llamado a `consultarApi`.<br />
`paginaSiguiente` Aquí hacemos una pregunta que si tenemos activados los filtros y si los products que recibimos de catalogo son menor a 10 para saber si hacer un consulta a la API o mostrar los productos restantes en caso contrario suma 10 a el estado pagina y llama a la funcion por defecto render. <br />
`consultarApi` Hacemos el pedido axios al server seteamos los productos recibidos en products y productsFiltered, seteamos pagina en 0, luego ejecutamos los filtros si estos estan activados. <br />
`filters` Esta funcion recibe parametros desde `Catalogo` que son los filtros que el usuario activo en ese componente, los seateamos en el estado del componente padre, activamos el `FilterActive` ejecutamos los filtros y luego la funcion render. <br />
`status` Ejecutamos un filtrado de los productos y los seteamos en `ProductsFiltered` segun el filtro que el usuario selecciono. <br />
`price` Creamos una constante  con los `ProductsFiltered` ya que estos se modifican con la funcion de ordenamiento de `sort` la cual aplicamos segun lo que el usuario desee descendente o ascendente. <br />
`datosBusqueda` Recibimos del `SearchBar`, la palabra clave para la busqueda la seteamos en el estado y llamamos a `consultarApi`. <br />


## Catalogo

En `Catalogo` importamos el componenten `Product Card` en el cual renderizamos los datos recibidos desde la API que nos manda el componente padre, utilizamos Material UI para dar estilo. <br />

Tenermos un estado que contiene: 
`price_asc` recibimos filterPrice si este es `price_asc` seteamos en true si no false (Usado para animar los botones de select).<br />
`price_desc` recibimos filterPrice si este es `price_desc` seteamos en true si no false (Usado para animar los botones de select).<br />
`new` recibimos conditionFilter si este es `new` seteamos en true si no false (Usado para animar los botones de select).<br />
`used` recibimos conditionFilter si este es `used` false seteamos en true si no false (Usado para animar los botones de select).<br />
`priceFilter`  Aquí guardaremos el filtro por precio que el usuario seleccione. <br />
`conditionFilter` Aquí guardaremos el filtro por condición del producto que el usuario seleccione. <br />

### Funciones
`submitFilter` Aquí hacemos llamado a la funcion `filters` que hemos declarado en el componente padre. <br />
`onCheck` Esta función hace el seteo de los estados `price_asc` `price_desc` `new` `used` y que cuando haga click en uno cambie el color y que deseleccione el otro boton.  <br />

### Extras

Utilizamos Material UI para Botones y Grid para centrar y espaciar los productsCard los botones siguientes y anterior hacen llamados a la funciones que recibe por parametros del componente padre `paginaAnterior` `paginaSiguiente`. <br />

## ProductCard

Aqui recibimos los datos de un producto y los mostramos en pantalla, utilizamos [Material-UI Card](https://material-ui.com/es/components/cards/).<br />

### Extras

Exportamos con los estilos y recibimos eso como parametros y los asignamos a los componentes `Card` `CardMedia`<br />

## SearchBar

Aqui poseemos un estado que guarda la palabra clave de busqueda y la manda al componenten padre. <br />

### Funciones
`onSubmit` hacemos llamado a `datosBusqueda` la cual recibimos como props y mandamos la palabra clave de busqueda. <br />
`onChange` Seteamos lo que el usuario escriba en el cuadro de texto. <br />
