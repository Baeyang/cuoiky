import { Table } from "antd";
import { getAllUsers } from "../../Services/api";
import { useState, useEffect } from "react";
import DeleteUser from "./DeleteUser";
function ManageUser(){
    const [listUser, setListUser] = useState();
    const getListUser = async () => {
        const response = await getAllUsers();
        if(response){
            setListUser(response);
        }
    };
    useEffect(()=>{
        getListUser();
    }, [])
    const handleReload = () => {
        getListUser();
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Full Name:',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Phone Number:',
            dataIndex: 'phone_number',
            key: 'phone_number'
        },
        {
            title: 'User name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
                <>
                    <DeleteUser onReload={handleReload} item={record}></DeleteUser>
                </>
            )
        }

    ]
    console.log(listUser);
    return(
        <>
            {listUser &&
            <Table dataSource={listUser} columns={columns} rowKey='id'></Table>
            }
        </>
    )
}
export default ManageUser