import Card from "antd/es/card/Card";
import { Row,Col } from "antd";
import { useEffect, useState } from "react";
import { getAvgStar, getCountServey, getCountUser } from "../../Services/api";
function RatingStatistic() {
    const [avgStar, setAvgStar] = useState();
    const [totalServey, setTotalServey] = useState();
    const [totalUser, setTotalUser] = useState();
    const fetchRate = async () => {
        const response = await getAvgStar();
        if(response){
            setAvgStar(response);
        }
    }
    const fetTotalServey = async () => {
        const response = await getCountServey();
        if(response){
            setTotalServey(response);
        }
    }
    const fetchTotalUser = async () => {
        const response = await getCountUser();
        if(response){
            setTotalUser(response);
        }
    }
    useEffect(()=>{
        fetTotalServey();
        fetchTotalUser();
        fetchRate();
    }, [])
    return (
        <>
        {totalServey && totalUser && avgStar &&
        <Row>
            <Col span={6}>
            <Card title='Users statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Total Users : {totalUser}</strong>
                </div>
            </Card>
            </Col>
            <Col offset={3} span={6}>
            <Card title='Rating statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Average Rating : {avgStar}/5</strong>
                </div>
            </Card>
            </Col>
            <Col offset={3}  span={6}>
            <Card title='Survey statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Total Surveys : {totalServey}</strong>
                </div>
            </Card>
            </Col>
            </Row>
            }
        </>
    )
}
export default RatingStatistic;