import { Button, Form, Input, Row, Col, Radio, DatePicker } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';
import dayjs from 'dayjs';
import { RegisterAPI } from '../../Services/api';
import { jwtDecode } from "jwt-decode";
import '../Login/login.css'
function Register() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        values.dob = dayjs(values.dob).format('YYYY-MM-DD');
        const response = await RegisterAPI(values);
        if(response){
            const decoded = jwtDecode(response.access_token);
            localStorage.setItem('username',decoded.sub);
            localStorage.setItem('access_token', response.access_token);
            navigate("/")
        } 
    }
    return (
        <>
<div className='login'>
            <div className='login__form'>
                <Form
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username:"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password:"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Name:"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Address:"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email:"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number:"
                        name="phone_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Radio.Group>
                            <Radio value="MALE"> Male </Radio>
                            <Radio value="FEMALE"> Female </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="DatePicker" name="dob">
                        <DatePicker />
                    </Form.Item>

                    <Form.Item                        >
                        <Button type="primary" htmlType="submit">
                            REGISTER
                        </Button>
                    </Form.Item>

                </Form>

            </div>
            </div>
        </>
    )
}
export default Register;