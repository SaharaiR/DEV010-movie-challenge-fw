//import '../styles/navBar.css';
import '../styles/barStyle.css';

interface MenuNavProps {
       onFirstPage: () => void;
       onPrevPage: () => void; 
       onNextPage: () => void;
       onLastPage: () => void;
     }
     
     const MenuNav = ({
       onFirstPage, 
       onPrevPage,
       onNextPage,
       onLastPage
     }: MenuNavProps) => {
         return <section className="menuNav">
                   <button onClick={onFirstPage} className='buttons'>Primero</button>
                   <button onClick={onPrevPage} className='buttons'>Anterior</button>
                   <button onClick={onNextPage} className='buttons'>Siguiente</button>
                   <button onClick={onLastPage} className='buttons'>Último</button>
            </section>;
     }

     export default MenuNav;


/*const MenuNav = () => {
  return <section className='menuNav'>
       <button id='btnFirst'>Primero</button>
       <button id='btnBefore'>Anterior</button>
       <button id='btnNext'>Siguiente</button>
       <button id='btnLast'>Último</button>
    </section>
}

export default MenuNav;*/