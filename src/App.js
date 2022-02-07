import './App.css';
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Routes from './components/Routes';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';

import {Form, Input, Carousel} from 'antd';



const App =()=> {

  const [isLogin,setIsLogin] = useState(true) 
  const [error, setError] = useState("")

  const handleLogin = details => {
    //details field are coming from a prop on LoginForm.jsx

    if(details.userName != ""){
      setIsLogin(true)
    }
  }

  return (
    <>  
      
        {isLogin == true ? 
        (<div>
            <div>
            <NavigationBar />
          </div>
        
          <div className='py-5 z-0'>
              <Routes />
          </div>
        </div>) : (<div><LoginForm Login={handleLogin} error={error} /></div>)}

                     
    </>
  );
}
export default withRouter(App);
