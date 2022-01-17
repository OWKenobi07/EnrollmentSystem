import React, {useState} from 'react';
import {Form, Input, Select} from 'antd';

const layout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 5,
      span: 19,
    },
  };



const { Option } = Select;

const EnrollForm = () => {
    
    const [studentName, setStudentName] = useState({lastName: "", firstName: "", middleName: "", suffix: ""})
   

    const handleSubmitForm = () =>{
        console.log(studentName)
    }

    const handleOnFinishFailed = () =>{

    }

    return (
        <>
          
            <div className='bg-purple-200 shadow-purple-300 shadow-md  mx-5 rounded-md py-2 px-2'>
            <h1 className='text-2xl pl-2 font-bold'>Registration Form</h1>
                <Form  onFinish={handleSubmitForm}
                    onFinishFailed={handleOnFinishFailed} {...layout}> 
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
                            <Input placeholder='Please enter your Last name' onChange={(e)=>setStudentName({...studentName, lastName: e.target.value})} value={studentName.lastName} />
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
                            <Input placeholder='Please enter your First name' onChange={(e)=>setStudentName({...studentName, firstName: e.target.value})} value={studentName.firstName} />
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
                            <Input placeholder='Please enter your Middle name' onChange={(e)=>setStudentName({...studentName, middleName: e.target.value})} value={studentName.middleName}/>
                        </Form.Item>

                        <Form.Item
                        label="Suffix"
                        name="suffix"

                        rules={[
                            {
                              
                            }
                        ]}
                        >
                            <Input placeholder='if applicable' onChange={(e)=>setStudentName({...studentName, suffix: e.target.value})} />
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

                     

                    <button className='btn-agree'>Submit</button>
                    <button className='btn-disagree'>Cancel</button>
                </Form>


            </div>
                
        </>
    );

}

export default EnrollForm;