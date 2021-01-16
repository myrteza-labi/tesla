import React from 'react'
import './NavbarItemsContainer.css'

function NavbarItemsContainer(props){
    return (
        <div className='d-inline NavbarItemsContainer'>
            {props.children}
        </div>
    )
}
export default NavbarItemsContainer; 