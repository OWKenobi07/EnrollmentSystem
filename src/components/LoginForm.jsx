import React, {useState} from 'react';
import {Form, Input, Select} from 'antd';


function LoginForm({Login, error}) {
    
    const[details, setDetails] = useState({userName:"", password:""})

    const handleSubmit = e =>{
        
        
        Login(details);
    }
    
    return ( 
        <>
            <Form onFinish={handleSubmit}>

                <Form.Item
                label="Username"
                name="username"

                rules={[
                    {
                        required: true,
                        message: "Username"
                    }
                ]}>
                    <Input placeholder = "Username" onChange={(e)=>setDetails({...details, userName:e.target.value })} />

                </Form.Item>

                <Form.Item
                label="Password"
                name="password"

                rules={[
                    {
                        required: true,
                        message: "Password"
                    }
                ]}>
                    <Input placeholder = "password" onChange={(e)=>setDetails({...details, password:e.target.value })} />

                </Form.Item>

                <button className='btn-agree'>Submit</button>
            </Form>
        </>
     );
}

export default LoginForm;