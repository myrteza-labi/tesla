import React from 'react'; 
import './CarConfigBtn.css'; 

function CarConfigBtn(props){
    const btnText = props.btnText; 
    return (
<       div className='CarConfigBtnContainer'>
            <button className='CarConfigBtn'>{btnText}</button>
        </div>        )
}

export default CarConfigBtn; 
