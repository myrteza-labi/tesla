import React from 'react'; 
import './SideMenuBtn.css'; 
import SideMenuBtnIcon from '../image/side-menu-button-icon.png'; 

function SideMenuBtn(props){
    return (
            <img src={SideMenuBtnIcon} className=' SideMenuBtnIcon'/>
    )
}

export default SideMenuBtn; 