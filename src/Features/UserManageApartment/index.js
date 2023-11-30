import { useEffect, useState } from "react";
import { getApartmentsbyUserID } from "../../Services/api";
import { jwtDecode } from "jwt-decode";
import { Table } from "antd";
import DeleteApartment from "./DeleteApartment";
import EditApartment from "./EditApartment";

function UserManageApartment(){
    const [listApartment, setListApartment] = useState();
    const userName = localStorage.getItem('username');
    const fetchListApartment = async () => {
        const response = await getApartmentsbyUserID(userName);
        if(response){
            setListApartment(response)
        }
    }
    useEffect(()=>{
        fetchListApartment();
    },[])

    const handleReload = () => {
        fetchListApartment();
    }
    console.log(listApartment)

    const columns = [
        {
            title: 'Tiêu đề:',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Địa chỉ:',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Hướng',
            dataIndex: 'direction',
            key: 'direction',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Số phòng tắm',
            dataIndex: 'num_bath_room',
            key: 'num_bath_room'
        },
        {
            title: 'Số phòng ngủ',
            dataIndex: 'num_bed_room',
            key: 'num_bed_room'
        },
        {
            title: 'Số phòng khách',
            dataIndex: 'num_living_room',
            key: 'num_living_room'
        },
        {
            title: 'Diện tích',
            dataIndex: 'square',
            key: 'square'
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
                <>
                <div className="action">
                <div>
                <EditApartment onReload={handleReload} item={record}></EditApartment>
                </div>
                <div>
                <DeleteApartment onReload={handleReload} item={record}></DeleteApartment>
                </div>

                </div>
                </>
            )
        }
    ]
    return(
        <>
        <div className="container">
            <Table columns={columns} dataSource={listApartment} rowKey='id'></Table>
        </div>
        </>
    )
}
export default UserManageApartment;