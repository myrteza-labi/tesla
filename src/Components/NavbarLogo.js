import React from 'react'; 
import './NavbarLogo.css'; 
import NavbarLogoImage from '../image/navbar-tesla-logo.svg'



function NavbarLogo(){
    return (
                <a href='#' className='NavbarLogoContainer'>
                    <img src={NavbarLogoImage} className='NavbarLogo'/>
                </a>
    )
}

export default NavbarLogo; 

/*<div className=' d-inline-block NavbarLogoContainer'>
                <a className=''>
                    <img src={NavbarLogoImage} className='NavbarLogo'/>
                </a>
        </div>*/ 

