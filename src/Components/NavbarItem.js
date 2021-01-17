import React from 'react'; 
import './NavbarItem.css'; 

function NavbarItem(props){

    const carName = props.carName; 

    return (
            <a href='#' className='NavbarItem'>{carName}</a>
    )
}

export default NavbarItem; 

/*
<div className='d-inline-block NavbarItem'>
            <a>{carName}</a>
        </div>
*/ 