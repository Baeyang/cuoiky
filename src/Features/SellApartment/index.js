import { Button, Col, Form, Input, InputNumber, Row, Upload } from 'antd';
import { jwtDecode } from "jwt-decode";
import { addApartment } from '../../Services/api';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
function SellApartment() {
    const decoded = jwtDecode(localStorage.getItem('access_token'));
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const formData = new FormData()
    if (images) {
        images.forEach(element => {
            formData.append('image[]', element)
        });
    }
    // const handleUpload = (e) => {
    //     const image = e.target.files[0];
    //     setImages((prevImages) => [...prevImages, image]);
    //   };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const beforeUpload = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const imageBase64 = e.target.result;
                // Thêm trường 'base64' vào file để lưu giá trị ảnh dưới dạng base64
                file.base64 = imageBase64;
                setImages((prevImages) => [...prevImages, file.base64]);
                resolve();
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onPreview = (file) => {
        const imageBase64 = file.base64;
        window.open(imageBase64, '_blank');
    };
    console.log(images)
    const onFinish = async (values) => {
        values.seller_name = decoded.sub;
        values.images = images;
        console.log(values);
        const response = await addApartment(values);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/');

    }
    const handleRemove = (removedImage) => {
        setImages((prevImages) =>
          prevImages.filter((image) => image !== removedImage)
        ); // Xóa ảnh khỏi state images
      };

    return (
        <>
            <Form layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    remember: true,
                }}
                encType='multipart/form-data'

            >
                <Row>
                <Col span={12} offset={6} >
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
                    <Col span={12} offset={6} >
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
                    <Col span={12} offset={6} >
                        <Form.Item
                            label="Square:"
                            name="square"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input square!',
                                },
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >

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
                    <Col span={12} offset={6} >

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
                        <Form.Item
                            label="Upload"
                            name="images"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload
                                listType="picture-card"
                                beforeUpload={beforeUpload}
                                onPreview={onPreview}
                                multiple
                                onRemove={handleRemove}
                                fileList={images.map((image, index) => ({
                                    uid: index.toString(),
                                    name: index.toString(),
                                    status: 'done',
                                    url: image,
                                    thumbUrl: image,
                                  }))}
                            >
                                <div>
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
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
        </>
    )
}
export default SellApartment;