import React from 'react'; 
import MainBackgroundImage from './MainBackgroundImage'; 
import Navbar from './Navbar'; 
import NavbarLogo from './NavbarLogo';
import NavbarItemsContainer from './NavbarItemsContainer'; 
import NavbarItem from './NavbarItem'; 
import SideMenuBtn from './SideMenuBtn'; 


function App(){
    return (
        <div className='App'>
            <MainBackgroundImage>
                    <Navbar>
                        <NavbarLogo/>
                            <NavbarItem carName='MODEL 3'/>
                            <SideMenuBtn/>
                    </Navbar>                
            </MainBackgroundImage>
        </div>
        
    )
} 

export default App; 