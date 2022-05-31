import React from 'react';
import {Table} from 'antd'

const Enrollee = () => {
  
  const columns = [
    {
      title: 'Student Number',
      dataIndex: 'studentNumber',
      key: 'studentNumber',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 50,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
  ];

  const dataSource = [
    {
      key: 1,
      studentNumber: '2022001001',
      name: 'Larrie I. Adriano',
      age: '30',
      address:'1028 Antipolo St. Sampaloc Manila'
    },
    {
      key: 2,
      studentNumber: '2022001002',
      name: 'Maria Sheena B. Malana',
      age: '28',
      address:'Blk 1 lot 54 Phase 1M Kasiglahan Village San Jose Rodriguez Rizal'
    },
  ];



    return (
        <>
          <div className='w-screen px-20 py-3 bg-green-200'>
            <Table dataSource={dataSource} columns={columns} bordered={true}/>
          </div>
           
        </>
      );
}
 
export default Enrollee;
