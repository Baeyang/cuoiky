import '../Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function ItemApartment(prop){
    const {item} = prop
    return(
        <><Link to = {`/DetailApartment/${item.id}`}>
            <div className="ItemApartment mb-20">
                <div className="image">
                    <img src={item.images[0]}></img>
                </div>
                <div className='content'>
                <div className="title">
                {item.title}
                </div>

                <div className="square mb-10">
                    Square: {item.square} m2
                </div>
                <div className="price mb-10">
                    Price: {item.price} đ
                </div>
                <div className="address">
                <FontAwesomeIcon icon={faLocationDot} />
                    <span>{item.address}</span>
                </div>
                </div>
            </div>
            </Link>
        </>
    )
}
export default ItemApartment;