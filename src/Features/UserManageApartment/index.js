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
            title: 'Title:',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Address:',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Direction',
            dataIndex: 'direction',
            key: 'direction',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'BathRoom',
            dataIndex: 'num_bath_room',
            key: 'num_bath_room'
        },
        {
            title: 'BedRoom',
            dataIndex: 'num_bed_room',
            key: 'num_bed_room'
        },
        {
            title: 'LivingRoom',
            dataIndex: 'num_living_room',
            key: 'num_living_room'
        },
        {
            title: 'Square',
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