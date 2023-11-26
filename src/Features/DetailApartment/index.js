import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailApartment } from "../../Services/api";
import { Row, Col } from 'antd';
import './Detail.css';
import { Image, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
function DetailApartment() {
    const param = useParams();
    const [detail, setDetail] = useState();
    useEffect(() => {
        const fetchDetail = async () => {
            const response = await getDetailApartment(param.id)
            if (response) {
                setDetail(response);
            }
        }

        fetchDetail();
    }, [])
    const newDescription = detail?.description.split('-');
    console.log(newDescription)
    console.log(detail)
    return (detail &&
        < div className="DetailApartment" >
            <div className="container">
                <Row>
                    <Col span={18}>
                        <div className="image__detail">
                            <img src={detail.images[0]}></img>
                        </div>
                        <div className="image__sub">
                            <Image width={150} src={detail.images[1]}></Image>
                        </div>
                        <div className="title">
                            <p>
                                {detail.title}
                            </p>
                        </div>

                        <div className="info">
                            <div className="price">
                                <div className="info__title">
                                    Giá:
                                </div>
                                <div className="info__content">
                                    {detail.price} đ
                                </div>
                            </div>
                            <div className="square">
                                <div className="info__title">
                                    Diện tích:
                                </div>
                                <div className="info__content">
                                    {detail.square} m2
                                </div>
                            </div>
                            <div className="bedroom">
                                <div className="info__title">
                                    Phòng ngủ:
                                </div>
                                <div className="info__content">
                                    {detail.num_bed_room} phòng
                                </div>
                            </div>
                            <div className="livingroom">
                                <div className="info__title">
                                    Phòng khách
                                </div>
                                <div className="info__content">
                                    {detail.num_living_room} phòng
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <div className="info__content">
                                Thông tin mô tả
                            </div>
                            <div className="description__text">
                                {/* {detail.description} */}
                                {newDescription.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>

                    <Col span={6}>
                        <div className="Seller">
                            <div className="Seller__name">
                                Được đăng bởi:
                                <br>
                                </br>
                                <p>{detail.seller_name}</p>
                            </div>

                            <div className="Seller__phone">
                                <Button type="primary" size="large">
                                    Liên hệ: {detail.seller_phone_number}
                                </Button>
                            </div>
                        </div>
                        <div className="Alert">
                            <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#c32c2c", fontSize: '30px' }} />
                            <div className="Alert__text">
                                <p>
                                    Không nên đặt cọc, giao dịch trước khi xem nhà và xác minh thông tin của người cho thuê
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
export default DetailApartment;