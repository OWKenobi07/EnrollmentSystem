import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavigationBar = (props) => {
    const userFullname = useContext(UserContext);
  

    const handleNavigatePage = (path) =>{
        props.history.push(path)
        //path.stopImmediatePropagation()
    }

    const handleLogout = (path) =>{
        localStorage.removeItem("sID");
        props.history.push(path)
        window.location.reload();
    }
    
    return (
        <>

        <nav className='bg-purple-800 shadow-md shadow-purple-900 h-12'>
                
        <div className="max-w-6xl mx-auto px-4">
			<div className="flex justify-between">
			    <div className="flex space-x-7">

                    

                    <div className="hidden md:flex items-center space-x-1">
                        <a className ='btn-nav' onFocus={(e)=>e.preventDefault()} onClick={()=>handleNavigatePage("/")}>Home</a>
                     
                        <a className="btn-nav dropdown z-50">Student Services
                    
                                <ul className="dropdown-menu absolute hidden text-gray-700 py-3 w-40">
                                <div className="bg-violet-50 flex flex-col justify-center rounded-b px-2 space-y-1 p-2 rounded-sm">
                                
                                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrolleeList")}>Students List</button>
                                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrollForm")}>Enroll Now!</button>
                                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/StudentApplicants")}>Applicants List</button>
                                
                                </div>

                                </ul>       
                         </a>

                        <button className ='btn-nav' onClick={()=>handleNavigatePage("/UserRegistration")}>Register User</button>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-3">
                        <div className='inline-block text-white font-semibold h-3'>Hi, {userFullname}</div>
                        <button className='btn-nav' onClick={()=>handleLogout("/")}>Logout</button>
                </div>

                
                <div className="md:hidden flex items-center py-3 px-2">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-white hover:text-purple-900 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>


                
            </div>
        </div>
            </nav>
            


            {/* <nav className='bg-purple-800 shadow-md shadow-purple-900 text-center space-x-5 p-3'>
                <button className ='btn-nav' onClick={()=>handleNavigatePage("/")}>Home</button>
               

                <div className="dropdown inline-block relative z-50">
                <button className="btn-nav">
                <span className="mr-1">Student Services</span>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-3 w-40">
                <div className="bg-violet-50 flex flex-col justify-center rounded-b px-2 space-y-1 p-2 rounded-sm">
                  
                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrolleeList")}>Students List</button>
                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/EnrollForm")}>Enroll Now!</button>
                    <button className ='btn-nav-secondary' onClick={()=>handleNavigatePage("/StudentApplicants")}>Applicants List</button>
                   
                </div>

                </ul>       
                </div>

                <button className ='btn-nav' onClick={()=>handleNavigatePage("/UserRegistration")}>Register User</button>
                <div className='inline-block text-white'>Hi, {userFullname}</div>

                <button className='btn-nav' onClick={()=>handleLogout("/")}>Logout</button>

            </nav>
             */}
        </>
    );
};

export default withRouter(NavigationBar);