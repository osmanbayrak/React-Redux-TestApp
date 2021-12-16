import React from 'react';
import { Menu, Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    SettingOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';
import { selectState, toggle } from './MenuSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const SideMenu: any = (props: any) => {
    const collapsed = useSelector((state: RootState) => state.menu.collapsed)
    const dispatch = useAppDispatch();
    return (
        <div style={{ width: collapsed ? 80 : 200, float: 'left' }}>
            <Button type="primary" onClick={() => dispatch(toggle())} style={{ margin: '8px 16px 8px' }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                style={{height: '100vh'}}
            >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to={'/Dashboard'}> Dashboard </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<SettingOutlined />}>
                    <Link to={'/Settings'}> Settings </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<LogoutOutlined />}>
                    <Link to={'/Login'}> Logout </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}