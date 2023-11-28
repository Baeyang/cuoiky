import './layoutadmin.css'
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Button, Layout, Menu } from "antd"
import { UserOutlined, ContainerOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Sider, Content } = Layout

function LayoutAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <Layout>
                <div className="Layout-Admin__header">
                    <div className="Layout-Admin__header-inner">
                        <div className="Layout-Admin__logo">
                            <Link to='/'>
                                BATDONGSAN.COM
                            </Link>
                        </div>
                        <div className="Layout-Admin__icon">
                            <Link to='/'>
                                <Button onClick={handleLogout}>  Đăng xuất </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Layout className="Layout-Admin__main">
                    <Sider
                        collapsed={collapsed}
                        breakpoint='lg'
                        collapsible
                        className='Layout-Admin__sider'
                        theme='light'
                        width={232}
                        onBreakpoint={(e) => setCollapsed(e)}
                    >
                        <Menu items={[
                            {
                                key: "/dashboard",
                                icon: <ContainerOutlined />,
                                label: <Link to='/Admin' > Dashboard  </Link>,
                            },
                            {
                                key: "/company",
                                icon: <UserOutlined />,
                                label: <Link to='/ManageUser' >Manage Customers</Link>,
                            }
                        ]} mode="inline" defaultOpenKeys={["/Admin"]} defaultSelectedKeys={[location.pathname]}>
                        </Menu>
                    </Sider>
                    <Content className="Layout-Admin__content">
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>

        </>
    )
}
export default LayoutAdmin;