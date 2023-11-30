import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './layoutdefault.css';
import { useState } from 'react';
function Header() {
    const username = localStorage.getItem('username');
    const [userName, setUserName] = useState(username);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }
    useEffect(()=>{
        setUserName(username);
    },[username,() => handleLogout]);
    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src='https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg'></img>
                        </div>
                        <div className="header__menu">
                            <ul>

                                <li>
                                    <NavLink to='/'>
                                        Trang chủ
                                    </NavLink>
                                </li>

                                <li>
                                <NavLink to='BuyApartment'>
                                    Tìm Căn Hộ
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to='SellingApartment'>
                                    Bán Căn Hộ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='Rating'>
                                    Đánh giá
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='ManageApartment'>
                                    Căn hộ đã đăng
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__user">
                        <div className="">
                          {userName  ? `Welcome ${userName},` : <Link to = 'register'>Đăng ký</Link> } 
                        </div>
                        <div className="">
                        {userName ? <div onClick={handleLogout}>Đăng xuất</div> : <Link to = 'login'>Đăng nhập</Link> } 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;