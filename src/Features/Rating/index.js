import { Button, Form, Input, Row, Col, Rate, notification } from 'antd';
import { addRating } from '../../Services/api';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Rating() {
    const token = localStorage.getItem('access_token');
    const navigate = useNavigate();
   
    const onFinish = async (values) => {
        const decoded = jwtDecode(token);
        values.username = decoded.sub;
        const response = await addRating(values);
        if (response) {
            Swal.fire({
                icon: 'success',
                title: 'Your submit has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error. Try again!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
        return (
            <>
                <div className="container">
                    <Form
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Row>
                            <Col span={16} offset={4}>
                                <Form.Item
                                    label="Description:"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your description',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={16} offset={4}>
                                <Form.Item
                                    label="Your rating:"
                                    name="star"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select rating',
                                        },
                                    ]}

                                >
                                    <Rate />
                                </Form.Item>
                            </Col>
                            <Col offset={4}>
                                <Form.Item                        >
                                    <Button type="primary" htmlType="submit">
                                        LOGIN
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </div>
            </>
        )
    }
    export default Rating;