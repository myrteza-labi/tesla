import React from 'react'; 
import './CarTitleName.css'; 

function CarTitleName(props){
    const carTitle = props.carTitle; 
    return (
        <div className='CarTitleNameContainer'>
            <h1 className='CarTitleName'>
                {carTitle}
            </h1>
        </div>
    )
}

export default CarTitleName; 