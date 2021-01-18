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
import AsideMenuItems from './AsideMenuItems'; 
import './App.css';


class App extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            asideNavbarDisplay : 'none',
        }
        this.handleClickMainBackgroundImg = this.handleClickMainBackgroundImg.bind(this);
        this.handleClickSideMenuBtn = this.handleClickSideMenuBtn.bind(this);

    }
    handleClickMainBackgroundImg(){
        if(this.state.asideNavbarDisplay=='block'){
            this.setState({asideNavbarDisplay: 'none'})
        }
    }
    handleClickSideMenuBtn(){
        if(this.state.asideNavbarDisplay=='none'){
            this.setState({asideNavbarDisplay: 'block'})
        }
    }
    render(){

        
        return (
            <div className='App'>
                <MainBackgroundImage onClick={() => {this.handleClickMainBackgroundImg()}}>
                        <Navbar>
                            <NavbarLogo/>
                            <NavbarItem carName='MODEL 3'/>
                            <SideMenuBtn onClick={()=> {this.handleClickSideMenuBtn()}}/>
                        </Navbar>        
                        <CarTitleName carTitle={'Model 3'}/>  
                        <CarConfigBtn btnText={'CONFIGURATION PERSONNALISEE'}/>      
                </MainBackgroundImage>
                <AsideMenu display={this.state.asideNavbarDisplay}>
                <AsideMenuItems carId='model-3' carName={'MODEL 3'}/>
                </AsideMenu>
            </div>
            
        )
    }
    
} 

export default App; 