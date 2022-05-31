import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Table, Tag, Space, Modal, Form, Input, message} from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons';



const ApplicationResponse = ({visible, onCreate, onCancel, studentName, studentID, reason, actionApp}) =>{
    const [form] = Form.useForm();

    return(
            <Modal
                visible={visible}
                title={studentName}
                okText={actionApp === "Accept" ? "Accept" : "Deny" }
                cancelText="Close"
                onCancel={onCancel}
                onOk={() => {
                    form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();

                        var newValue = {...values, studentID, actionApp}

                        //actionApp === "Accept" ? handleSubmit("Accept", newValue) : handleSubmit("Deny", newValue)
                        onCreate(newValue);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
                }}
            >
              <Form form={form}> 
                        <br/>
                        <Form.Item
                        label="Reason"
                        name="reason"
                        rules={[
                            {
                                required: true,
                                message:"Please state the reason why!"
                            }
                        ]}
                        >

                            <Input />
                        </Form.Item>
                </Form>
           </Modal>
    )
};

const StudentApplicants = () => {

    const [studentApplicants, setStudentApplicants] = useState ([]);
    const [lastname, setLastname] =  useState("%");
    const [firstname, setFirstname] =  useState("%");
    const [middlename, setMiddlename] =  useState("%");
    const [studentName, setStudentName] = useState("")
    const [studentID, setStudentID] = useState("")
    


    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState("Accept")

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'iD',
            hidden: true,
        },
        {
            title: 'Last Name',
            dataIndex: 'Lastname',
            key: 'lastName',
            width: 200,
            align: 'center',
            fixed: 'left',
        },
        {
            title: 'First Name',
            dataIndex: 'Firstname',
            key: 'firstName',
            width: 200,
            align: 'center',
            fixed: 'left',
        },
        {
            title: 'Middle Name',
            dataIndex: 'Middlename',
            key: 'middleName',
            width: 200,
            align: 'center',
            fixed: 'left',
        },
        {
            title:'Suffix',
            dataIndex:'Suffix',
            key:'suffix',
            width: 75,
            align: 'center',
            fixed: 'left'
        },
        {
            title:'Gender',
            dataIndex:'Gender',
            key:'gender',
            width: 100,
            render: (gender) =>
                gender == "male" ? <Tag color='geekblue'>{gender}</Tag> 
                : gender == 'female' ? <Tag color='volcano'>{gender}</Tag> : <Tag color='green'>{gender}</Tag>,
        },
        {
            title:'Primary Education',
            dataIndex:'PrimaryEducation',
            key:'primaryEducation',
            width: 500
        },
        {
            title:'Secondary Education',
            dataIndex:'SecondaryEducation',
            key:'secondaryEducation',
            width: 500
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: (text, record) => 
            <Space>
            <a onClick={()=>handleApplication("Accept", record.ID)}>Accept</a> 
            <a onClick={()=>handleApplication("Deny", record.ID)}>Deny</a>
            </Space> 
        },


    ].filter(item => !item.hidden);

   
    const handleApplication = (action, value) =>{

        
        
        const item = studentApplicants.filter((f)=> f.ID === value)
        const addedItem = {
            ID: item[0].ID,
            Lastname: item[0].Lastname,
            Firstname: item[0].Firstname,
            Middlename: item[0].Middlename
        };

        var i = addedItem.Lastname + ", " + addedItem.Firstname + " " + addedItem.Middlename
        setStudentName(i)
        setShowModal(true)
        setStudentID(addedItem.ID)
        setModalAction(action)
        
    }


    const handleStudentList = async () => {

        const response = await axios.get("/api/searchStudentApplicant", {
          params: {
            Lastname: lastname,
            Firstname: firstname,
            Middlename: middlename,
          },
        });
        if (response) {
           
            setStudentApplicants(response.data);
        }
    }

    const onCreate = async (values) => {
       


       const item = studentApplicants.filter((f)=> f.ID === values.studentID)
       const addedItem = {
           ID: item[0].ID,
           Lastname: item[0].Lastname,
           Firstname: item[0].Firstname,
           Middlename: item[0].Middlename,
           Suffix: item[0].Suffix,
           Gender: item[0].Gender
       };

       const newValues = {...values, addedItem}

        try {
            const response = await axios.post("/api/enrollstudent", newValues);
            if (response.data.stat === 1) {
              message.success(response.data.message);
            } else {
              message.warning(response.data.message);
            }
          } catch (error) {
            console.log(error);
          }
    
    setShowModal(false)
    };

    useEffect(() =>{
        handleStudentList();
    },[])
        
    return ( 
    <>
       <div className='bg-purple-200 shadow-purple-300 shadow-md mx-5 rounded-md py-2 px-2'>
            <h1 className='text-lg font-black text-center'>List of Applicants</h1>

            <Table
             dataSource={studentApplicants} 
             columns={columns}
             size='small'
             bordered={true}
             scroll={{ x: 'calc(700px + 50%)', y: 800 }}
             />

            <ApplicationResponse
                visible={showModal}
                onCreate={onCreate}
                onCancel={() => {
                setShowModal(false);
                }}
                actionApp={modalAction}
                studentName={studentName}
                studentID = {studentID}
            />
            
          
        </div> 

      
        
    </>
     );
}
 
export default StudentApplicants;