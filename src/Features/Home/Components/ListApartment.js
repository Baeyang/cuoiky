import { useEffect, useState } from "react";
import { getApartments } from "../../../Services/api";
import ItemApartment from "./ItemApartment";
import { Row, Col, List } from "antd";

function ListApartment(){
    const [ListApartments, setListApartments] = useState([]);
    useEffect(()=>{
        const fetchApartments = async () => {
            const response = await getApartments();
            if(response){
                setListApartments(response);
            }
        }

        fetchApartments();
    }, [])
    console.log(ListApartments);
    return(
        <>
            
                <Row gutter={16} >
                {ListApartments.map((item,index)=>{
                    return(
                        <Col span={6} key={index}>
                            <ItemApartment item={item}></ItemApartment>
                        </Col>
                    )
                })}
                </Row>
        </>
    )
}
export default ListApartment;