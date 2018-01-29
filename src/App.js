import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { changeBreadCrumbData, getCurrentBreadCrumbData } from "./redux/actions/Common";
import { URL_POST_PLATFORM_LOGOUT } from './utils/ConstantUtil'

import './App.css';
import logo from './styles/imgs/logo.png';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    menus: [
      { key: 'list', value: 'List' },
      { key: 'role', value: 'Role', children: [{ key: 'data', value: 'Data' }, { key: 'menu', value: 'Menu' }] },
      { key: 'map', value: 'Map', children: [{ key: 'baidu', value: 'Baidu' }, { key: 'google', value: 'Google' }] },
      { key: 'echarts', value: 'Echarts', children: [{ key: 'samples', value: 'Samples' }] },
      { key: 'auth', value: 'Auth', children: [{ key: 'platform', value: 'Platform' }] },
      { key: 'setting', value: 'Setting' }
    ]
  }

  render() {
    const { collapsed, menus } = this.state;
    const { currentCrumb } = this.props;
    let obj = JSON.parse(sessionStorage.getItem("currentCrumb")) || currentCrumb;

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
            <Menu.Item key="dashboard">
              <Link to={'/'}><Icon type="dashboard" /><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to={'/list'}><Icon type="table" /><span>List</span></Link>
            </Menu.Item>
            <Menu.SubMenu key="map" title={<span><Icon type='global'/><span>Map</span></span>}>
              <Menu.Item key="baidu"><Link to={'/map/baidu'}>Baidu</Link></Menu.Item>
              <Menu.Item key="google"><Link to={'/map/google'}>Google</Link></Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="echarts" title={<span><Icon type='area-chart' /><span>Echarts</span></span>}>
              <Menu.Item key="samples"><Link to={'/echarts/samples'}>Samples</Link></Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="role" title={<span><Icon type='solution'/><span>Role</span></span>}>
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
            <Breadcrumb style={{ margin: '16px 0',color:'#000000' }} separator=">">
              <Breadcrumb.Item><Icon type="home"/></Breadcrumb.Item>
              {this.constructBreadCrumb(menus, (obj && obj.keyPath))}
            </Breadcrumb>
            <div style={{ padding: 0, background: '', minHeight: 280 }}>
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

  onClick = ({ item, key, keyPath }) => {
    keyPath = keyPath && keyPath.reverse();

    const crumb = {
      keyPath: keyPath,
      openKeys: keyPath.filter((item) => {
        return !(item === key)
      }),
      selectedKeys: [key]
    }

    this.props.changeBreadCrumbData(crumb);
  }

  logout = () => {
    console.log('logout');
  }

  constructBreadCrumb = (menus, keyPath, links = []) => {
    keyPath && keyPath.forEach((key, index) => {
      menus = menus.filter((menu) => {
        return menu.key === key
      });
      if (menus.length) {
        links.push(menus[0].value);
        if (menus[0].children) {
          this.constructBreadCrumb(menus[0].children, keyPath.slice(index + 1), links);
        }
      }
    })
    if (links.length) {
      return links.map((link, index) => {
        return (<Breadcrumb.Item key={index}> {link} </Breadcrumb.Item>)
      })
    }
  }
}

function mapStateToProps(state) {
  return {
    currentCrumb: state.handleBreadCrumb.currentCrumb,
    state: state
  }
}

export default connect(mapStateToProps, { changeBreadCrumbData, getCurrentBreadCrumbData })(App)
