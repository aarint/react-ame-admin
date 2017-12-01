import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

import { URL_POST_PLATFORM_LOGOUT } from './utils/ConstantUtil'

import './App.css';
import logo from './styles/imgs/logo.png';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    menus: [
      { key: 'user', value: '员工' },
      { key: 'role', value: '角色', children: [{ key: 'data', value: '数据' }, { key: 'menu', value: '菜单' }] },
      { key: 'auth', value: '权限', children: [{ key: 'platform', value: '空间平台' }] },
      { key: 'setting', value: '设置' }
    ]
  }

  render() {
    const { collapsed, menus } = this.state;
    let obj = null;

    return (
      <Layout className="ant-layout-has-sider container">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img alt="logo" src={logo} />
            <span className={'title' + (collapsed ? ' logo_collapsed' : '')}>ADMIN</span>
          </div>
          <Menu theme="dark" mode="inline"
            defaultOpenKeys={(obj && obj.openKeys) || []}
            selectedKeys={(obj && obj.selectedKeys) || []}
            onClick={this.onClick}>
            <Menu.Item key="user">
              <Link to={'/user'}>
                <Icon type="user" />
                <span>Employees</span>
              </Link>
            </Menu.Item>
            <Menu.SubMenu key="role" title={<span><Icon type='solution' /><span>Role</span></span>}>
              <Menu.Item key='data'><Link to={'/role/data'}>Data</Link></Menu.Item>
              <Menu.Item key='menu'><Link to={'/role/menu'}>Menu</Link></Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="setting">
              <Link to={'/setting'}>
                <Icon type="setting" />
                <span>Setting</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            <div style={{ float: 'right', marginRight: 16 }}>
              {
                //this.initUserInfo(this.props.state.requestUserInfo.data)
              }
              <span style={{ width: 16, display: 'inline-block' }}></span>

              <form action={URL_POST_PLATFORM_LOGOUT} name="logform" style={{ display: 'inline-block' }}>
                <Icon type='logout' onClick={this.logout.bind(this)} />
              </form>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} separator=">">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              {this.constructBreadCrumb(menus, (obj && obj.keyPath))}
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 280 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@fachilles</Footer>
        </Layout>
      </Layout>
    )
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  logout = () => {
    console.log('logout');
  }

  constructBreadCrumb = () => {

  }
}

export default App;
