import React, { useEffect } from 'react';
import './login.css';
import { Button, Form, Input, Row, Col } from 'antd';
import { LoginAPI } from '../../Services/api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
function Login() {
    const navigate = useNavigate();
    const token = localStorage.getItem('access_token');
    const username = localStorage.getItem('username');
    const onFinish = async (values) => {
        console.log(values);
        const response = await LoginAPI(values);
        if(response){
            const decoded = jwtDecode(response.access_token);
            console.log(decoded.role[0].authority)
            localStorage.setItem('username',decoded.sub);
            localStorage.setItem('access_token', response.access_token);
            if(decoded.sub === 'admin'){
                navigate('/admin');
            } else {
            navigate('/');
            }
        }
        else {
            alert('Wrong username or password!');
            localStorage.clear();
        }
    };

    useEffect(()=>{
        if(token){
            navigate('/');
        } 
    }, [token])

    return (
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

                        <Form.Item                        >
                            <Button type="primary" htmlType="submit">
                                LOGIN   
                            </Button>
                        </Form.Item>
                    </Form>
                                            
                    </div>
        </div>
    )
}
export default Login;
