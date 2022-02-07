import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Table} from 'antd';



const StudentApplicants = () => {

    const [studentApplicants, setStudentApplicants] = useState ([]);
    const [lastname, setLastname] =  useState("M");
    const [firstname, setFirstname] =  useState("M");
    const [middlename, setMiddlename] =  useState("B");

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'iD',
            hidden: true
        },
        {
          title: 'Last Name',
          dataIndex: 'Lastname',
          key: 'lastName',
          width: 100,
        },
        {
            title: 'First Name',
            dataIndex: 'Firstname',
            key: 'firstName',
            width: 100,
        },
        {
            title: 'Middle Name',
            dataIndex: 'Middlename',
            key: 'middleName',
            width: 100,
        },
    ].filter(item => !item.hidden);

   

    const handleStudentList = async () => {

        const response = await axios.get("/api/searchStudentApplicant", {
          params: {
            Lastname: lastname,
            Firstname: firstname,
            Middlename: middlename,
          },
        });
        if (response) {
           
            console.log(response.data);
            setStudentApplicants(response.data);
        }
    }

        useEffect(() =>{
        handleStudentList();
        },[])   


    return ( 
    <>
       <div class='bg-purple-200 shadow-purple-300 shadow-md  mx-5 rounded-md py-2 px-2'>
            <Table dataSource={studentApplicants} columns={columns} bordered={true}/>

          
        </div> 
    </>
     );
}
 
export default StudentApplicants;