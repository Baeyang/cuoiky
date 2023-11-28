import { Button, Col, Form, Input, InputNumber, Row, Upload,Modal } from 'antd';
import {EditOutlined} from '@ant-design/icons'
import { useState } from 'react';
import { editApartment } from '../../Services/api';
import Swal from 'sweetalert2';
const { TextArea } = Input;
function EditApartment({item, onReload}){
    console.log(item)
    const username = localStorage.getItem('username');
    const [isModalOpen,setIsModalOpen] = useState(false)
    const showModal = () =>{
        setIsModalOpen(true)
    }
    const handleCancel = () =>{
        setIsModalOpen(false)
    }

    const onFinish = async (values) => {
        values.id = item.id
        values.seller_name = username
        values.images = item.images
        console.log(values)
        const response = await editApartment(item.id, values);
        if (response) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                showConfirmButton: false,
                timer: 1500
              })
            setIsModalOpen(false)
            onReload();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    return(
        <>
        <Button className="ml-10"  onClick={showModal} icon={<EditOutlined />}></Button>
        <Modal title='Chỉnh sửa' open={isModalOpen} onCancel={handleCancel} footer={null} width={650}>
        <Form layout="vertical"
                onFinish={onFinish}
                initialValues={item}
                encType='multipart/form-data'

            >
                <Row>
                <Col span={18} offset={3} >
                        <Form.Item
                            label="Title:"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Title!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3} >
                        <Form.Item
                            label="Address:"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3}>
                        <Form.Item
                            label="Square:"
                            name="square"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Address!',
                                },
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3}>

                        <Form.Item
                            label="Direction:"
                            name="direction"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Direction!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3} >

                        <Form.Item
                            label="Description:"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Description!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>

                    <Col span={18} offset={3} >

                        <Form.Item

                            label="Price:"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Price!',
                                },
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3} >

                        <Form.Item
                            label="Number of bathroom:"
                            name="num_bath_room"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the Number of your bathroom!',
                                },
                            ]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3} >

                        <Form.Item
                            label="Number of bedroom:"
                            name="num_bed_room"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the Number of your bedroom!',
                                },
                            ]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3} >

                        <Form.Item
                            label="Number of livingroom:"
                            name="num_living_room"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the Number of livingroom!',
                                },
                            ]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={18} offset={3}>

                        <Form.Item                        >
                            <Button type="primary" htmlType="submit">
                                SEND
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
        </>
    )
}
export default EditApartment;