import React from 'react';
import {withRouter} from 'react-router-dom';

const NavigationBar = (props) => {
    
    const handleNavigatePage = (path) =>{
        props.history.push(path)
    }
    
    return (
        <>
            <nav className=' bg-purple-800 shadow-md shadow-purple-900 text-center space-x-5 p-3'>
                <button className ='btn-nav' onClick={()=>handleNavigatePage("/")}>Home</button>
               

                <div class="dropdown inline-block relative z-50">
                <button class="btn-nav">
                <span class="mr-1">Student Services</span>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-3 w-40">
                <div class="bg-violet-50 flex flex-col justify-center rounded-b px-2 space-y-1 p-2 rounded-sm">
                  
                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrolleeList")}>Student List</button>
                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrollForm")}>Enroll Now!</button>
                   
                </div>


                </ul>       
                </div>
            </nav>
        </>
    );
};

export default withRouter(NavigationBar);