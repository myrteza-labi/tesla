/*

J'ai réussis à créer ma navbar avec le logo à droite et les items au centre. 
je dois maintenant supprimer l'effet over sur le lien MODEL 3
Puis ajouter le titre puis le bouton configuration personaliser et la phrase caption 
a recut la meilleur not 5 etoiles

*/ 


import React from 'react'; 
import './Navbar.css'; 

function Navbar(props){
    return (
        <div className='NavbarContainer'>
            <nav className=' Navbar'>
               {props.children}
            </nav>
        </div>
        
    )
}

export default Navbar; 

