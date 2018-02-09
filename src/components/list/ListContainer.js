import React from 'react';
import { Table, Icon, Divider, Popconfirm, message, Modal } from 'antd';
import { connect } from 'react-redux';
import { getList, deleteListItem } from '../../redux/actions/List';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
}, {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
    filters: [
        { text: 'fmale', value: 'fmale' },
        { text: 'male', value: 'male' },
    ],
    onFilter: (value, record) => record.sex.indexOf(value) === 0,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
}, {
    title: 'Action',
    key: 'action',
    render: () => {
        return (
            <div>
                <Icon type="file-text" /> | <Icon type="delete" />
            </div>
        )
    }
}];

class ListContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: SVGFEComponentTransferElement
        }
    }

    onDelete = () => {
        this.props.deleteListItem({ name: 'Atom' }, (result) => {
            console.log(result);
            message.success('Delete the item successully!');
        });
    }

    onCancel = () => {
        message.warning('Cancel delete action!');
    }

    onEdit = () => {
        console.log('edit');
    }

    constructColumns = (onDelete, onEdit) => {
        return [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
        }, {
            title: 'Sex',
            dataIndex: 'sex',
            key: 'sex',
            filters: [
                { text: 'fmale', value: 'fmale' },
                { text: 'male', value: 'male' },
            ],
            onFilter: (value, record) => record.sex.indexOf(value) === 0,
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return (
                    <div>
                        <Icon type="file-text" onClick={() => this.onEdit(record)} /> |
                        <Popconfirm title='Are you sure delete this item?'
                            onConfirm={() => this.onDelete(record)} onCancel={this.onCacel}
                            okText="Yes" cancelText="No">
                            <Icon type="delete" />
                        </Popconfirm>
                    </div>
                )
            }
        }]
    }

    render() {
        const { results } = this.props;
        console.log(results);

        return (
            <div style={styles.container}>
                <Table style={styles.list} rowKey={'name'} columns={this.constructColumns()} dataSource={results} />
                <Modal />
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
}, { getList, deleteListItem })(ListContainer);

const styles = {
    container: {
        background: '#FFFFFF'
    },
    list: {
        padding: 10
    }
}