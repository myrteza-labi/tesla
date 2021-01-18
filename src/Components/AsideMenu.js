
import React from 'react'; 
import './AsideMenu.css'; 

function AsideMenu(props){
    const display = props.display; 
    return (
        <div id='AsideMenuContainer' style={{display:display}}className='AsideMenuContainer'>
            {props.children}
        </div>
        
    )
}

export default AsideMenu; 