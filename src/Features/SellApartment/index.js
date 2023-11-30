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
        <h2 className='title-page'>
            BÁN CĂN HỘ CỦA BẠN
        </h2>
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
                            label="Tiêu đề:"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tiêu đề!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >
                        <Form.Item
                            label="Địa chỉ:"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Địa chỉ!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >
                        <Form.Item
                            label="Diện tích:"
                            name="square"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập diện tích!',
                                },
                            ]}
                        >
                            <InputNumber min={1} />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >

                        <Form.Item
                            label="Hướng:"
                            name="direction"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập hướng!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} offset={6} >

                        <Form.Item
                            label="Vui lòng nhập mô tả:"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mô tả!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>

                    <Col span={12} offset={6} >

                        <Form.Item

                            label="Giá:"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập giá!',
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
                                    message: 'Vui lòng nhập số phòng!',
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
                                Gửi
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default SellApartment;