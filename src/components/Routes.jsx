import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import EnrolleeList from './EnrolleeList';
import EnrollForm from './EnrollForm';


const Routes = () => {
   
    return (
        <>  
            <Switch>
                 <Route exact strict path = '/' component={Home} render = {() => <Home/>}/>
                 <Route exact strict path = '/EnrolleeList' component={EnrolleeList} render = {() => <EnrolleeList/>}/>
                 <Route exact strict path = '/EnrollForm' component={EnrollForm} render = {() => <EnrolleeList/>}/>
            </Switch>
        
        </>
    );
        
}
 
export default Routes;