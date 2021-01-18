
import React from 'react'; 
import './AsideMenu.css'; 

function AsideMenu(props){
    return (
        <div className='AsideMenuContainer'>
            {props.children}
        </div>
        
    )
}

export default AsideMenu; 