import React, { useState } from 'react';
import style from './searchBar.module.css';

export default ({datosBusqueda}) =>{
    const [state, setState] = useState({
        search       : null,
        showCatalogo : false
    })



    const onSubmit = (e) =>{
        //Evitar que refresque la pagina
        e.preventDefault();
        datosBusqueda(state.search)

    }
    const onChange = (e) =>{
        //Guardamos lo que el usuario escriba para el posterior envio
        setState({
            ...state, 
            search: e.target.value
        })
    }
    return(
        <div>
            <div className={style.cabecera}>
                <form onSubmit={onSubmit}>
                <input 
                type="search"
                placeholder="Inserte producto" 
                onChange={onChange}>
                </input>
                </form>
            </div>

            
        </div>
    )
}

