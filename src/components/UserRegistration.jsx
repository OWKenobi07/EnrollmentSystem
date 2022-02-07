import React from 'react';
import {Form, Input, message} from 'antd';
import axios from 'axios'; 


const UserRegistration = () => {
    
    const handleSubmit = async (values) =>{
           
        try {
        const response = await axios.post("/api/saveuser", values);
        if (response.data.stat === 1) {
          message.success(response.data.message);
        } else {
          message.warning(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }

        
    }

    return ( 
    <>
              <div className='bg-gray-50 grid place-items-center rounded-md p-5  w-56 h-96'>
                        <Form onFinish={handleSubmit}>

                            <Form.Item
                            name="userFullname"
                            style={{color:"white"}}

                            rules={[
                                {
                                    required: true,
                                    message: "Full name required!"
                                }
                            ]}>
                                <Input placeholder = "Full Name"/>

                            </Form.Item>

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


                            <Form.Item
                            name="emailAddress"

                            rules={[
                                {
                                    required: true,
                                    message: "Email address required!"
                                }
                            ]}>
                                <Input placeholder = "Email Address"/>

                            </Form.Item>

                            <Form.Item
                            name="mobileNo"

                            rules={[
                                {
                                    required: true,
                                    message: "Mobile No. required!"
                                }
                            ]}>
                                <Input placeholder = "Mobile No."/>

                            </Form.Item>

                                <div className='grid place-items-center'>
                                <button className='btn-agree'>Register</button>
                                </div>
                        </Form>
                    </div>
    </>
     );
}
 
export default UserRegistration;