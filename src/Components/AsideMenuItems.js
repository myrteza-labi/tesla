import React from 'react'; 
import './AsideMenuItems.css'; 

function AsideMenuItems(props){
    const carName = props.carName; 
    const carId = props.carId; 

    return (
        <h3 id={carId}  carName={carName} className='AsideMenuItems'><a id='testA' href='#'>{carName}</a></h3>
    )
}

export default AsideMenuItems; 