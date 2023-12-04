import logo from '../assets/palmolita.png';
import '../styles/barStyle.css';
import { Dispatch, SetStateAction } from 'react';

interface MenuBarProps {
    changeGenre: Dispatch<SetStateAction<number>>;
    changeOrder: Dispatch<SetStateAction<string>>;
}

const MenuBar = ({ changeGenre, changeOrder }: MenuBarProps) => {
    return <section className = "menuBar">
        <img src = {logo}  alt = 'Logo de sitio'></img>
        <h1>Tu sitio de películas animadas</h1>
        <select id='menuGender' onChange={(e) => changeGenre(Number(e.target.value))}>
            <option value={16}>Género</option>
            <option value={28}>Acción</option>
            <option value={12}>Aventura</option>
            <option value={10752}>Bélico</option>
            <option value={878}>Ciencia ficción</option>
            <option value={99}>Documental</option>
            <option value={18}>Drama</option>
            <option value={10751}>Familia</option>
            <option value={14}>Fantasía</option>
            <option value={36}>Historia</option>
            <option value={9648}>Misterio</option>
            <option value={10770}>Película de TV</option>
            <option value={10749}>Romance</option>
            <option value={53}>Suspenso</option>
            <option value={27}>Terror</option>
            <option value={37}>Western</option>
        </select>
        <select id='menuOrder' onChange = {(e) => changeOrder(e.target.value)}>
            <option value={''}>Ordenar</option>
            <option value={'asc'}>Ascendiente (A-Z)</option>
            <option value={'desc'}>Descendiente (Z-A)</option>
        </select>    
    </section>
};

export default MenuBar;

