import React, {useState} from 'react';
import {Form, Input, Carousel, message} from 'antd';
import axios from 'axios';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../context/UserContext';

function LoginForm({Login, error}) {
  

    const handleSubmit = async(values) =>{
    
            const response = await axios.post("api/loginuser", values);

            if(response.data.stat === 1){
             Login(response.data);
             localStorage.setItem("sID", response.data.sID)  
             message.success(response.data.message);
            }else{
             message.warning(response.data.message);
            }      
        
    }
    
    const contentStyle = {
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
      };

    

    return ( 
        <>
        <div className='bg-gray-50 h-screen grid place-items-center'>
            <div className='bg-purple-800 rounded-xl grid grid-cols-2 place-items-center w-8/12 h-4/6'>
                    <div className='object-contain w-96 h-3/4'>
                        <Carousel autoplay dotPosition='bottom'>
                            <div>
                                <h3 style={contentStyle}>Innovate</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>Create</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>Inspire</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>Establish</h3>
                            </div>
                        </Carousel>
                    </div>
                    <div className='bg-gray-50 grid place-items-center rounded-md p-5  w-56 h-96'>
                        <Form onFinish={handleSubmit}>

                            <Form.Item
                            name="username"
                            style={{color:"white"}}

                            rules={[
                                {
                                    required: true,
                                    message: "Username required!"
                                }
                            ]}>
                                <Input placeholder = "Username"/>

                            </Form.Item>

                            <Form.Item
                            name="password"

                            rules={[
                                {
                                    required: true,
                                    message: "Password required!"
                                }
                            ]}>
                                <Input.Password placeholder = "Password"/>

                            </Form.Item>

                                <div className='grid place-items-center'>
                                <button className='btn-agree'>Sign-In</button>
                                </div>
                        </Form>
                    </div>
            </div>      
        </div>
        
        </>
     );
}

export default LoginForm;