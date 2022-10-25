import React, {useState} from 'react';
import {Form, Input, Select, message} from 'antd';


import axios from 'axios';

const layout = {
    labelCol: {
        xs: { span: 10,
            
            
             },
      },
      wrapperCol: {
        xs: {span: 20, 
            push:1
          
              }, 
      },
  };
  const tailLayout = {
    wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
  };



const { Option } = Select;

const EnrollForm = () => {
    
    const [studentName, setStudentName] = useState({lastName: "", firstName: "", middleName: "", suffix: ""})
   

    const handleSubmitForm = async(values) =>{
        
        try {
            const response = await axios.post("/api/savestudentapplicant", values);
            if (response.data.stat === 1) {
              message.success(response.data.message);
            } else {
              message.warning(response.data.message);
            }
          } catch (error) {
            console.log(error);
          }
   
    }

    const handleOnFinishFailed = () =>{

    }

    return (
        <>
          
            <div className='bg-purple-200 shadow-purple-300 shadow-md  mx-5 rounded-md py-2 px-2'>
            <h1 className='text-2xl pl-2 font-bold pb-5'>Registration Form</h1>
                <Form  onFinish={handleSubmitForm}
                    onFinishFailed={handleOnFinishFailed} {...layout}> 
                    <h1 className='text-xl pl-2 font-bold pb-2'>Basic Information</h1>
                    <div className='grid grid-cols-4 px-3 gap-x-3'>
                        <Form.Item
                        label="Last Name"
                        name="lastName"

                        rules={[
                            {
                                required: true,
                                message: "Last Name required!"
                            }
                        ]}
                        >
                            <Input placeholder='Please enter your Last name' value={studentName.lastName} />
                        </Form.Item>

                        <Form.Item
                        label="First Name"
                        name="firstName"

                        rules={[
                            {
                                required: true,
                                message: "First Name required!"
                            }
                        ]}
                        >
                            <Input placeholder='Please enter your First name' value={studentName.firstName} />
                        </Form.Item>

                        <Form.Item
                        label="Middle Name"
                        name="middleName"

                        rules={[
                            {
                                required: true,
                                message: "Middle Name required!"
                            }
                        ]}
                        >
                            <Input placeholder='Please enter your Middle name' value={studentName.middleName}/>
                        </Form.Item>

                        <Form.Item
                        label="Suffix"
                        name="suffix"

                        rules={[
                            {
                              
                            }
                        ]}
                        >
                            <Input placeholder='if applicable' />
                        </Form.Item>

                        <Form.Item
                        label="Gender"
                        name="gender"

                        rules={[
                            {
                                required: true,
                                message: "Gender required!"
                            }
                        ]}
                        >
                            <Select placeholder='Select Gender'>
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>

                            </Select>
                        </Form.Item>
                    </div>

                    <h1 className='text-xl pl-2 font-bold pb-2'>Educational Background</h1>
                    <div className='grid grid-cols-4 px-4 gap-x-3'>
                   
                   <div className='col-span-2'>
                   <Form.Item
                   label="Primary Education"
                   name="primaryEducation"
                  
                   rules={[
                       {
                           required: true,
                           message: "Enter Primary Education/School!"
                       }
                   ]}
                   labelCol={{...layout.layout, pull: 0.5, span:6}}
                   wrapperCol={{...layout.tailLayout, pull: 0.5, push:0.5}}
                   >
                       <Input placeholder='Primary Education' />

                   </Form.Item>
                   </div>
              
                   
                   <Form.Item
                   label="Year Started"
                   name="primaryStartYear"

                   rules={[
                       {
                           required: true,
                           message: "Enter Year!"
                       }
                   ]}
                   labelCol={{...layout.layout, pull: 0.5, offset: 4}}
                   wrapperCol={{ ...layout.tailLayout, span: 7 }}
                   >
                       <Input placeholder='From' />
                   </Form.Item>
                   

                   <Form.Item
                   label="Year Graduated"
                   name="primaryGradYear"

                   rules={[
                       {
                           required: true,
                           message: "Enter Year!"
                       }
                   ]}
                   labelCol={{...layout.layout, pull: 5}}
                   wrapperCol={{ ...layout.tailLayout, span: 7, pull: 5,  }}
                   >
                       <Input placeholder='To' />
                   </Form.Item>
                   
               </div>
                    
                    
                    <div className='grid grid-cols-4 px-4 gap-x-3'>
                   
                        <div className='col-span-2'>
                        <Form.Item
                        label="Secondary Education"
                        name="secondaryEducation"
                       
                        rules={[
                            {
                                required: true,
                                message: "Enter Secondary Education!"
                            }
                        ]}
                        labelCol={{...layout.layout, pull: 0.5, span:6}}
                        wrapperCol={{...layout.tailLayout, pull: 0.5}}
                        >
                            <Input placeholder='Secondary Education' />

                        </Form.Item>
                        </div>
                   
                        
                        <Form.Item
                        label="Year Started"
                        name="secondaryStartYear"

                        rules={[
                            {
                                required: true,
                                message: "Enter Year!"
                            }
                        ]}
                        labelCol={{...layout.layout, pull: 0.5, offset: 4}}
                        wrapperCol={{ ...layout.tailLayout, span: 7 }}
                        >
                            <Input placeholder='From' />
                        </Form.Item>
                        

                        <Form.Item
                        label="Year Graduated"
                        name="secondaryGradYear"

                        rules={[
                            {
                                required: true,
                                message: "Enter Year!"
                            }
                        ]}
                        labelCol={{...layout.layout, pull: 5}}
                        wrapperCol={{ ...layout.tailLayout, span: 7, pull: 5 }}
                        >
                            <Input placeholder='To' />
                        </Form.Item>
                        
                    </div>
                     

                    <button className='btn-agree'>Submit</button>
                    <button className='btn-disagree'>Cancel</button>
                </Form>


            </div>
                
        </>
    );

}

export default EnrollForm;