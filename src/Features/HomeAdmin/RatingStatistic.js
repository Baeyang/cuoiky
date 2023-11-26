import Card from "antd/es/card/Card";
import { Row,Col } from "antd";
function RatingStatistic() {
    return (
        <>
        <Row>
            <Col span={6}>
            <Card title='Rating statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Total Rating : 10</strong>
                </div>
            </Card>
            </Col>
            <Col offset={3} span={6}>
            <Card title='Rating statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Total Rating : 10</strong>
                </div>
            </Card>
            </Col>
            <Col offset={3}  span={6}>
            <Card title='Rating statistic' hoverable={true} headStyle={{ background: 'blue', color: 'white' }}>
                <div>
                    <strong>Total Rating : 10</strong>
                </div>
            </Card>
            </Col>
            </Row>
        </>
    )
}
export default RatingStatistic;