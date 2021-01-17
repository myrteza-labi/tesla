import React from 'react'; 
import MainBackgroundImage from './MainBackgroundImage'; 
import Navbar from './Navbar'; 
import NavbarLogo from './NavbarLogo';
import NavbarItemsContainer from './NavbarItemsContainer'; 
import NavbarItem from './NavbarItem'; 
import SideMenuBtn from './SideMenuBtn'; 
import CarTitleName from './CarTitleName'; 
import CarConfigBtn from './CarConfigBtn'; 
import AsideMenu from './AsideMenu';  
import './App.css';


function App(){
    return (
        <div className='App'>
            <MainBackgroundImage>
                    <Navbar>
                        <NavbarLogo/>
                            <NavbarItem carName='MODEL 3'/>
                            <SideMenuBtn/>
                    </Navbar>        
                    <CarTitleName carTitle={'Model 3'}/>  
                    <CarConfigBtn btnText={'CONFIGURATION PERSONNALISEE'}/>      
            </MainBackgroundImage>
        </div>
        
    )
} 

export default App; 