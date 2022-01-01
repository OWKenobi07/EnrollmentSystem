import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import EnrolleList from './EnrolleList';


const Routes = () => {
   
    return (
        <>  
            <Switch>
                 <Route exact strict path = '/' component={Home} render = {() => <Home/>}/>
                 <Route exact strict path = '/EnrolleList' component={EnrolleList} render = {() => <EnrolleList/>}/>
            </Switch>
        
        </>
    );
        
}
 
export default Routes;