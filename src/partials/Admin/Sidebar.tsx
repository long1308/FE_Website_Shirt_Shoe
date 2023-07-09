import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineComment, AiOutlineShoppingCart } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  {
    key: '1',
    label: (
      <Link to={"/admin/dashBoard"} className="flex items-center">
        <PieChartOutlined />
        <span>DashBoard</span>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={"/admin/users"} className="flex items-center">
        <DesktopOutlined />
        <span>Users</span>
      </Link>
    ),
  },
  {
    key: 'sub1',
    label: (
      <Link to={"/admin/products"} className="flex items-center">
        <UserOutlined />
        <span>Products</span>
      </Link>
    ),
    children: [
      {
        key: '3',
        label: (
          <Link to={"/admin/products/colors"} className="flex items-center">
            <span>Color</span>
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to={"/admin/products/sizes"} className="flex items-center">
            <span>Size</span>
          </Link>
        ),
      }
    ]
  },
  {
    key: '5',
    label: (
      <Link to={"/admin/categorys"} className="flex items-center">
        <TeamOutlined />
        <span>Categorys</span>
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link to={"/admin/carts"} className="flex items-center">
        <AiOutlineShoppingCart className="mr-3" />
        <span>Cart</span>
      </Link>
    ),
  },
  {
    key: '7',
    label: (
      <Link to={"/admin/orders"} className="flex items-center">
        <UserOutlined />
        <span>Orders</span>
      </Link>
    ),
  },
  {
    key: '8',
    label: (
      <Link to={"/admin/comments"} className="flex items-center">
        <AiOutlineComment className="mr-2" />
        <span>Comments</span>
      </Link>
    ),
  },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
