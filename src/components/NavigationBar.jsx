import React from 'react';
import {withRouter} from 'react-router-dom';

const NavigationBar = (props) => {
    
    const handleNavigatePage = (path) =>{
        props.history.push(path)
    }
    
    return (
        <>
            <div className='bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 space-x-5 p-1'>
                <button className ='btn' onClick={()=>handleNavigatePage("/")}>Home</button>
                <button className ='btn' onClick={()=>handleNavigatePage("/EnrolleList")}>Student List</button>
            </div>
        </>
    );
};

export default withRouter(NavigationBar);