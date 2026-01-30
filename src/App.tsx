import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DashboardOutlined,
  TableOutlined,
  GlobalOutlined,
  AreaChartOutlined,
  SettingOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { changeBreadCrumbData, getCurrentBreadCrumbData } from './redux/actions/Common';
import { URL_POST_PLATFORM_LOGOUT } from './utils/ConstantUtil';
import type { RootState } from './redux/reducers';
import type { BreadCrumbState } from './redux/actions/Common';

import './App.css';
import logo from './styles/imgs/logo.png';

const { Header, Footer, Sider, Content } = Layout;

interface AppProps {
  currentCrumb: BreadCrumbState | null;
  changeBreadCrumbData: typeof changeBreadCrumbData;
  getCurrentBreadCrumbData: typeof getCurrentBreadCrumbData;
}

interface AppState {
  collapsed: boolean;
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    collapsed: true,
  };

  toggle = () => {
    this.setState((prev) => ({ collapsed: !prev.collapsed }));
  };

  onClick: MenuProps['onClick'] = ({ keyPath }) => {
    const reversed = keyPath ? [...keyPath].reverse() : [];
    const crumb: BreadCrumbState = {
      keyPath: reversed,
      openKeys: reversed.filter((item) => item !== keyPath?.[0]),
      selectedKeys: keyPath ? [keyPath[0]] : [],
    };
    this.props.changeBreadCrumbData(crumb);
  };

  logout = () => {
    console.log('logout');
  };

  getBreadCrumbItems = (
    menus: { key: string; value: string; children?: { key: string; value: string }[] }[],
    keyPath: string[] | undefined
  ): { title: React.ReactNode }[] => {
    const links: string[] = [];
    const collect = (
      m: typeof menus,
      path: string[] | undefined
    ): void => {
      if (!path?.length) return;
      const [key, ...rest] = path;
      const found = m.find((menu) => menu.key === key);
      if (found) {
        links.push(found.value);
        if (found.children?.length && rest.length) collect(found.children, rest);
      }
    };
    collect(menus, keyPath ?? []);
    return links.map((link, index) => ({ title: <span key={index}>{link}</span> }));
  };

  render() {
    const { collapsed } = this.state;
    const { currentCrumb } = this.props;
    const obj: BreadCrumbState | null =
      (typeof sessionStorage !== 'undefined' &&
        (JSON.parse(sessionStorage.getItem('currentCrumb') || 'null') as BreadCrumbState | null)) ||
      currentCrumb;

    const menus = [
      { key: 'list', value: 'List' },
      {
        key: 'map',
        value: 'Map',
        children: [
          { key: 'baidu', value: 'Baidu' },
          { key: 'google', value: 'Google' },
        ],
      },
      {
        key: 'echarts',
        value: 'Echarts',
        children: [{ key: 'samples', value: 'Samples' }],
      },
      { key: 'setting', value: 'Setting' },
    ];

    const menuItems: MenuProps['items'] = [
      {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: <Link to="/">Dashboard</Link>,
      },
      {
        key: 'list',
        icon: <TableOutlined />,
        label: <Link to="/list">List</Link>,
      },
      {
        key: 'map',
        icon: <GlobalOutlined />,
        label: 'Map',
        children: [
          { key: 'baidu', label: <Link to="/map/baidu">Baidu</Link> },
          { key: 'google', label: <Link to="/map/google">Google</Link> },
        ],
      },
      {
        key: 'echarts',
        icon: <AreaChartOutlined />,
        label: 'Echarts',
        children: [
          { key: 'samples', label: <Link to="/echarts/samples">Samples</Link> },
        ],
      },
      {
        key: 'setting',
        icon: <SettingOutlined />,
        label: <Link to="/setting">Setting</Link>,
      },
    ];

    return (
      <Layout className="ant-layout-has-sider container">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img alt="logo" src={logo} />
            <span className={'title' + (collapsed ? ' logo_collapsed' : '')}>ADMIN</span>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={obj?.openKeys ?? []}
            selectedKeys={obj?.selectedKeys ?? []}
            onClick={this.onClick}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

            <div
              style={{
                float: 'right',
                marginRight: 16,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  lineHeight: '50px',
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#FFFFFF',
                  float: 'left',
                  borderRadius: '50%',
                  background: 'silver',
                }}
              >
                CS
              </div>

              <span style={{ width: 16, display: 'inline-block' }}></span>

              <form
                action={URL_POST_PLATFORM_LOGOUT}
                name="logform"
                style={{ display: 'inline-block' }}
              >
                <LogoutOutlined onClick={this.logout} />
              </form>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb
              style={{ margin: '16px 0', color: '#000000' }}
              separator=">"
              items={[
                { title: <HomeOutlined /> },
                ...this.getBreadCrumbItems(menus, obj?.keyPath),
              ]}
            />
            <div style={{ padding: 0, background: '', minHeight: 280 }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@fachilles</Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    currentCrumb: state.handleBreadCrumb.currentCrumb,
  };
}

export default connect(mapStateToProps, {
  changeBreadCrumbData,
  getCurrentBreadCrumbData,
})(App);
