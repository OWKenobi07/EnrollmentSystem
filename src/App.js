import './App.css';
import React from 'react';
import {withRouter} from 'react-router-dom';
import Routes from './components/Routes';
import NavigationBar from './components/NavigationBar';




const App =()=> {

  const handleMessage = ()=> {
    console.log("hey!")
  }




  return (
    <>  
        <div className='z-0'>
          <NavigationBar />
        </div>
      
        <div className='py-5'>
            <Routes />
        </div>
    </>
  );
}
export default withRouter(App);
