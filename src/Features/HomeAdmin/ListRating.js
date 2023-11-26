import { useEffect } from "react";
import { useState } from "react";
import { getListRating } from "../../Services/api";
import { Table } from "antd";

function ListRating(){
    const[listRating, setListRating] = useState();
    useEffect(()=>{
        const fetchListRating = async () => {
            const response = await getListRating();
            if(response){
                setListRating(response)
                console.log(response)
            }
        }

        fetchListRating()
    },[])

    const columns = [
        {
            title: 'Full Name:',
            dataIndex: 'fullName',
            key: 'fullName'
        },
        {
            title: 'Phone Number:',
            dataIndex: 'phone_number',
            key: 'phone_number'
        },
        {
            title: 'Star rating',
            dataIndex: 'star',
            key: 'star',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        }

    ]
    return(
        <>{listRating && 
            <Table dataSource={listRating} columns={columns} rowKey='id'></Table>}
        </>
    )
}
export default ListRating;