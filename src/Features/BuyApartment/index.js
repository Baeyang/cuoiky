import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { getMatchingResult, getConsulting } from '../../Services/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './result.css';
import Swal from 'sweetalert2';
const { TextArea } = Input;
const { Meta } = Card;

function BuyApartment() {
    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const response = await getMatchingResult(values);
        const response2 = await getConsulting(values);
        if (response && response2) {
            console.log(response, response2);
            setResult(response);
            setResult2(response2);
            setLoading(false);
        } else {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Something wrong, try again!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <>
            <h2 className='title-page'>
                BUYING YOUR DREAM APARTMENT
            </h2>
            <Form layout="vertical"
                onFinish={onFinish}
            >
                <Row>
                    <Col span={6} offset={2}>
                        <Col span={12} offset={6} >
                            <Form.Item
                                label="Diện tích mong muốn:"
                                name="square"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập!',
                                    },
                                ]}
                            >
                                <InputNumber min={1} />
                            </Form.Item>
                        </Col>

                        <Col span={12} offset={6} >

                            <Form.Item

                                label="Giá mong muốn:"
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập!',
                                    },
                                ]}
                            >
                                <InputNumber min={1} />
                            </Form.Item>
                        </Col>
                        <Col span={12} offset={6} >

                            <Form.Item
                                label="Số phòng tắm:"
                                name="num_bath_room"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập!',
                                    },
                                ]}
                            >
                                <InputNumber min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12} offset={6} >

                            <Form.Item
                                label="Số phòng ngủ:"
                                name="num_bed_room"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số phòng!',
                                    },
                                ]}
                            >
                                <InputNumber min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12} offset={6} >

                            <Form.Item
                                label="Số phòng ăn:"
                                name="num_kitchen_room"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số phòng!',
                                    },
                                ]}
                            >
                                <InputNumber min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12} offset={6} >

                            <Form.Item
                                label="Số phòng khách:"
                                name="num_living_room"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số phòng!',
                                    },
                                ]}
                            >
                                <InputNumber min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12} offset={6} >
                            <Form.Item                        >
                                <Button type="primary" htmlType="submit">
                                    Gửi
                                </Button>
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        {isLoading ? (<Spin indicator={<LoadingOutlined style={{ fontSize: 24, marginLeft: 250, marginTop: 250 }} spin />} />) :
                            (result.length > 0 &&
                                <div className='result'>
                                    <div className='title'>
                                        TOP 3 NGƯỜI BÁN CÓ CĂN HỘ PHÙ HỢP VỚI BẠN ('CBR')
                                    </div>
                                    <div className='result-matching'>
                                        {result.map((item, index) => {
                                            return (
                                                // <div className='result-matching-item' key={index}>
                                                //         <span className='item item-1'>{item.seller_name}</span>
                                                //         <span className='item item-2'>phone: {item.seller_phone_number}</span>
                                                //         <Link target="_blank" to ={`/DetailApartment/${item.id}`}>
                                                //         <span className='item item-3'>Chi tiết căn hộ</span>
                                                //         </Link>
                                                // </div>
                                                <Link to = {`/DetailApartment/${item.id}`} key={index}  target='_blank'>
                                                <Card
                                                    style={{
                                                        width: 250,
                                                        marginRight: 55
                                                    }}
                                                    cover={
                                                        <div className='image1'>
                                                            <img
                                                                alt="example"
                                                                src={item.images[0]}
                                                                className='image1'
                                                            />
                                                        </div>
                                                    }
                                                >
                                                    <Meta
                                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                                        title={item.seller_name}
                                                        description={item.seller_phone_number}
                                                    />
                                                </Card>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                    <div className='title'>
                                        CĂN HỘ PHÙ HỢP NHẤT TÌM ĐƯỢC (GT DI TRUYỀN)
                                    </div>
                                    <div className='result-matching'>
                                    <Link to = {`/DetailApartment/${result2.id}`} target='_blank'>
                                        <Card
                                            style={{
                                                width: 250,
                                                marginRight: 55
                                            }}
                                            cover={
                                                <div className='image1'>
                                                    <img
                                                        alt="example"
                                                        src={result2.images[0]}
                                                        className='image1'
                                                    />
                                                </div>
                                            }
                                        >
                                            <Meta
                                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                                title={result2.seller_name}
                                                description={result2.seller_phone_number}
                                            />
                                        </Card>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </Col>
                </Row>

            </Form>

        </>
    )
}
export default BuyApartment;    