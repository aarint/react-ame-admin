import React from 'react';
import { Table, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import { getList } from '../../redux/actions/List';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
}, {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex'
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
},{
    title:'Operation',
    key:'operation'
}], data = [];

class ListContainer extends React.PureComponent {
    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }

    componentDidMount() {
        const params = {};
        this.props.getList(params);
    }
}

export default connect(state => {
    return {
        results: state.handleList.results
    }
}, { getList })(ListContainer);