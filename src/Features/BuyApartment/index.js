import { Button, Col, Form, Input, InputNumber, Row, Modal, Item } from 'antd';
import { addApartment, getSuggest } from '../../Services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const { TextArea } = Input;

function BuyApartment() {
    const [valueModal, setValueModal] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onFinish = async (values) => {
        const response = await getSuggest(values);
        if (response) {
            setValueModal(response);
            showModal();
        }
    }
    return (
        <>
            <Form layout="vertical"
                onFinish={onFinish}
            >
                <Row>
                    <Col span={12} offset={6} >
                        <Form.Item
                            label="Square:"
                            name="square"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Square!',
                                },
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>

                    <Col span={12} offset={6} >

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
                    <Col span={12} offset={6} >

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
                    <Col span={12} offset={6} >

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
                    <Col span={12} offset={6} >

                        <Form.Item
                            label="Number of kitchen:"
                            name="num_kitchen_room"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the Number of your Kitchen room!',
                                },
                            ]}
                        >
                            <InputNumber min={0} />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >

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

                    <Col span={12} offset={6} >

                        <Form.Item                        >
                            <Button type="primary" htmlType="submit">
                                SEND
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            {valueModal && 
            <Modal title='Chỉnh sửa' open={isModalOpen} onCancel={handleCancel} footer={null} width={650}>
                <Form layout="vertical"
                >
                    <Row>
                        <Col span={18} offset={3} >
                            <Form.Item
                                label="Title:"
                                name="title"
                                initialValue={valueModal.title}
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
                            initialValue={valueModal.address}
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
                               initialValue={valueModal.square}
                                label="Square:"
                                name="square"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Square!',
                                    },
                                ]}
                            >
                                <InputNumber min={1} />
                            </Form.Item>
                        </Col>
                        <Col span={18} offset={3}>

                            <Form.Item
                                initialValue={valueModal.direction}
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
                            initialValue={valueModal.description}
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
                                initialValue={valueModal.price}
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
                                initialValue={valueModal.num_bath_room}
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
                                initialValue={valueModal.num_bed_room}
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
                            initialValue={valueModal.num_living_room}
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
                        <Col span={18} offset={3} >

                            <Form.Item>
                                <Button type='primary'>
                                    <Link to = {`/DetailApartment/${valueModal.id}`}>
                                        VIEW DETAIL
                                    </Link>
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
                }
        </>
    )
}
export default BuyApartment;    