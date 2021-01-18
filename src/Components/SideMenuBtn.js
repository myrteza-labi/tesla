import React from 'react'; 
import './SideMenuBtn.css'; 
import SideMenuBtnIcon from '../image/side-menu-button-icon.png'; 

function SideMenuBtn(props){
    return (
        <a onClick={props.onClick} href='#'>
            <img src={SideMenuBtnIcon} className=' SideMenuBtnIcon'/>
        </a>
    )
}

export default SideMenuBtn; 