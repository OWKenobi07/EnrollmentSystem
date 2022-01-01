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
        <NavigationBar />
        <div>
            <Routes />
        </div>
    </>
  );
}
export default withRouter(App);
