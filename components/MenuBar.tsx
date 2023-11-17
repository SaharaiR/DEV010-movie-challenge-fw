// import React from 'react';
import logo from '../src/assets/palmolita.png';
import '../styles/menuBar.css';

const MenuBar = () => {
    return <section className = "menuBar">
        <img src = {logo}  alt = 'Logo de sitio'></img>
        <h1>Tu sitio de películas animadas</h1>
        <select id='menuGender'>
            <option value={''}>Género</option>
            <option value={'action'}>Acción</option>
            <option value={'adventure'}>Aventura</option>
            <option value={'warlike'}>Bélico</option>
            <option value={'science'}>Ciencia ficción</option>
            <option value={'doc'}>Documental</option>
            <option value={'drama'}>Drama</option>
            <option value={'family'}>Familia</option>
            <option value={'fantasy'}>Fantasía</option>
            <option value={'history'}>Historia</option>
            <option value={'mistery'}>Misterio</option>
            <option value={'movieTV'}>Película de TV</option>
            <option value={'romance'}>Romance</option>
            <option value={'suspense'}>Suspenso</option>
            <option value={'terror'}>Terror</option>
            <option value={'western'}>Western</option>
        </select>
        <select id='menuOrder'>
            <option value={'0'}>Ordenar</option>
            <option value={'a-z'}>Ascendiente (A-Z)</option>
            <option value={'z-a'}>Descendiente (Z-A)</option>
        </select>    
    </section>
};

export default MenuBar;