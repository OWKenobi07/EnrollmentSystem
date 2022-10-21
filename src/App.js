import './App.css';
import React, {useState, useEffect, useMemo, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import Routes from './components/Routes';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import { UserContext } from './context/UserContext';
import axios from 'axios';

axios.defaults.withCredentials = false;

const App =()=> {

  
  const [isLogin,setIsLogin] = useState(true)
  const [sID, setSID] = useState(null) 
  const [error, setError] = useState("")
  const [addedEntry, setAddedEntry] = useState([]);
  const [username, setUsername] = useState(null);

  const [userFullname, setUserFullname] = useState(null);
  const providerValue = useMemo(() => ({userFullname, setUserFullname}), [userFullname, setUserFullname]);

  const handleLogin = details => {
    //details field are coming from a prop on LoginForm.jsx
    if(details.userName != ""){
      setIsLogin(true);
      setUserFullname(details.userFullname)
      setSID(localStorage.getItem("sID"))
      
    }
  }


  // const handleLoginState = async () => {
  //   var id = localStorage.getItem("sID")
  //   const response = await axios.get("api/loginuser", {params: { sID: id }})

  //   if (response){
  //     return true
  //     setUserFullname(response.data[0].fullname)
  //   }else{
  //     return false
  //   }
  // }


  

  useEffect(async () =>{
    
    var id = localStorage.getItem("sID")
    axios.get("api/loginuser", {params: { sID: id }}).then(res=>{
      
     setIsLogin(true)
     setUserFullname(res.data[0].fullname)

    })
   
   
 },[isLogin])

  return (
    <>  
            
              {isLogin === true ? 
              (
              <UserContext.Provider value={userFullname}>
              <div>
                  <div>
                  <NavigationBar />
                </div>
              
                <div className='py-5 z-0'>
                    <Routes />
                </div>
              </div>
              </UserContext.Provider>) : (<div><LoginForm Login={handleLogin} error={error} /></div>)}
           
                     
    </>
  );
}
export default withRouter(App);
