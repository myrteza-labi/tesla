import React from 'react'; 
import './AsideMenuItems.css'; 

function AsideMenuItems(props){
    const carName = props.carName; 
    return (
    <h3 carName={carName} className='AsideMenuItems'><a href='#'>{carName}</a></h3>
    )
}

export default AsideMenuItems; 