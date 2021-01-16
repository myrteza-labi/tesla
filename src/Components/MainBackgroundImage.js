import React from 'react'; 
import './MainBackgroundImage.css'; 

function MainBackgroundImage(props){
    return (
        <div className='MainBackgroundImage'>
            {props.children}
        </div>
        
    )
}

export default MainBackgroundImage; 