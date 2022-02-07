import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import EnrolleeList from './EnrolleeList';
import EnrollForm from './EnrollForm';
import UserRegistration from './UserRegistration';
import StudentApplicants from './StudentApplicants';


const Routes = () => {
   
    return (
        <>  
            <Switch>
                 <Route exact strict path = '/' component={Home} render = {() => <Home/>}/>
                 <Route exact strict path = '/EnrolleeList' component={EnrolleeList} render = {() => <EnrolleeList/>}/>
                 <Route exact strict path = '/EnrollForm' component={EnrollForm} render = {() => <EnrolleeList/>}/>
                 <Route exact strict path = '/UserRegistration' component={UserRegistration} render = {()=> <UserRegistration />} />
                 <Route exact strict path = '/StudentApplicants' component={StudentApplicants} render = {()=> <StudentApplicants/>} />
            </Switch>
        
        </>
    );
        
}
 
export default Routes;