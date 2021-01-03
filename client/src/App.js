import React, {Component} from 'react';
import './App.css';
//Importamos los componentes a mostrar
import SearchBar from './components/searchBar/searchBar.js';
import Catalogo from './components/catalogo/catalogo.js';
//Importamos Axios para hacer las peticiones la servidor
import axios from 'axios';

class App extends Component {

  state = {
    termino: '',
    pagina: 0,
    pedir: 0,
    products: [],
    productsFiltered: [],
    filterPrice: false,
    conditionFilter: false,
    filterActive: false,
  }
  
  paginaAnterior = () =>{
    
    let pagina = this.state.pagina - 10;
    // leer si la pagina es 0, ya no ir hacia atras
    if(this.state.pagina === 0 && this.state.pedir === 0){ return alert("Esta es la primera pagina")};
    //leer state de la pagina actual
    if(this.state.pedir >= 50 && this.state.pagina === 0){
      this.setState({
        pedir: this.state.pedir - 50
      }, () => {
        this.consultarApi();
      });
    }

    this.setState({
      pagina
    },() => {
      this.render();
    });
    window.scroll(0,0)
  }

  paginaSiguiente = (products) =>{
    window.scroll(0,0)
    //Si esta activado el filtro 
    if(this.state.filterActive === true){
      let pagina = this.state.pagina + 10;
      if(products.length < 10){
        this.setState({
          pedir: this.state.pedir + 50
        }, () => {
          this.consultarApi();
        });
      }
      this.setState({
        pagina
      },() => {
        this.render();
      }); 
    }
    let pagina = this.state.pagina + 10;
    //agregar el cambio al state
    if(pagina === 50) {
      this.setState({
        pedir: this.state.pedir + 50
      }, () => {
        this.consultarApi();
      });
    }
    this.setState({
      pagina
    },() => {
      this.render();
    }); 
  }
  //
  consultarApi = () => {
    const termino = this.state.termino;
      axios(`http://localhost:3001/api/search/${termino}/${this.state.pedir}`)
      .then(({data}) =>{
        this.setState({
          termino: termino,
          products: data.results,
          productsFiltered: data.results,
          pagina: 0
        },() => {
          this.status()
          this.price()
        })}
      );

  } 
  //Seteamos estados en el caso que tuvieran 
  filters = (conditionFilter, priceFilter) => {
    this.setState({
      conditionFilter: conditionFilter,
      filterPrice: priceFilter,
      filterActive: (conditionFilter === null && priceFilter === null) ? false : true 
    },() => {
      this.status()
      this.price()
      this.render()
    }) 
  }

  status = () => {
    if(this.state.conditionFilter === 'new'){
      console.log('new')
      this.setState({
        productsFiltered: this.state.products.filter(p => p.condition === 'new')
      })
    }
    if(this.state.conditionFilter === 'used'){
      console.log('used')
      this.setState({
        productsFiltered: this.state.products.filter(p => p.condition === 'used')
      })
    }
  }

  price = () => {
    const product = [...this.state.productsFiltered];
    if(this.state.filterPrice === 'price_asc'){
      this.setState({
        productsFiltered: product.sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))
      })
    }
    if(this.state.filterPrice === 'price_desc'){
      this.setState({
        productsFiltered: product.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
      })
    }
  }
  
  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 0
    },() => {
       this.consultarApi();
    })
  }
  render() {
    return (
      <div className="App">
          <SearchBar datosBusqueda={this.datosBusqueda}/>
          {
          this.state.filterActive === false &&
            <Catalogo 
              filters = {this.filters}
              products={this.state.products.slice(this.state.pagina * 1, this.state.pagina + 10)} 
              filterPrice={this.state.filterPrice}
              condition={this.state.conditionFilter}
              paginaAnterior = {this.paginaAnterior}
              paginaSiguiente = {this.paginaSiguiente}
            />
          }
          {
            this.state.filterActive === true &&
            <Catalogo 
              filters = {this.filters}
              products={this.state.productsFiltered.slice(this.state.pagina * 1, this.state.pagina + 10)} 
              filterPrice={this.state.filterPrice}
              conditionFilter={this.state.conditionFilter}
              paginaAnterior = {this.paginaAnterior}
              paginaSiguiente = {this.paginaSiguiente}
              pagina = {this.state.pagina}
            />
          }
      </div>
    );
  }
}

export default App;
