import React from 'react';
import { Table, Popconfirm, message, Modal } from 'antd';
import {
  FileTextOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { connect } from 'react-redux';
import { getList, deleteListItem } from '../../redux/actions/List';
import type { RootState } from '../../redux/reducers';
import type { ListItem } from '../../redux/actions/List';

const styles: Record<string, React.CSSProperties> = {
  container: { background: '#FFFFFF' },
  list: { padding: 10 },
};

interface ListContainerProps {
  results?: ListItem[];
  getList: (params?: Record<string, unknown>) => void;
  deleteListItem: (
    params: Record<string, unknown>,
    callback?: (result: string) => void
  ) => void;
}

class ListContainer extends React.PureComponent<ListContainerProps> {
  onDelete = (record: ListItem) => {
    this.props.deleteListItem({ name: record.name }, (result) => {
      console.log(result);
      message.success('Delete the item successfully!');
    });
  };

  onCancel = () => {
    message.warning('Cancel delete action!');
  };

  onEdit = (record: ListItem) => {
    console.log('edit', record);
  };

  constructColumns = (): ColumnsType<ListItem> => [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      filters: [
        { text: 'fmale', value: 'fmale' },
        { text: 'male', value: 'male' },
      ],
      onFilter: (value, record) => record.sex.indexOf(String(value)) === 0,
    },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      key: 'action',
      render: (_: unknown, record: ListItem) => (
        <div>
          <FileTextOutlined onClick={() => this.onEdit(record)} /> |
          <Popconfirm
            title="Are you sure delete this item?"
            onConfirm={() => this.onDelete(record)}
            onCancel={this.onCancel}
            okText="Yes"
            cancelText="No"
          >
            <span style={{ cursor: 'pointer' }}>
              <DeleteOutlined />
            </span>
          </Popconfirm>
        </div>
      ),
    },
  ];

  componentDidMount() {
    this.props.getList({});
  }

  render() {
    const { results = [] } = this.props;
    return (
      <div style={styles.container}>
        <Table
          style={styles.list}
          rowKey="name"
          columns={this.constructColumns()}
          dataSource={results}
        />
        <Modal open={false} />
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({ results: state.handleList.results }),
  { getList, deleteListItem }
)(ListContainer);
