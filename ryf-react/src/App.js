import React, { Component } from 'react';
import './App.css';
//对react ui阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
  columns = [
    {
      dataIndex: 'username',
      title: '用户'
    },
    {
      dataIndex: 'age',
      title: '年龄'
    },
    {
      dataIndex: 'address',
      title: '地址'
    },
    {
      dataIndex: 'action',
      title: '操作',
      width: 200,
      render: (text, row) => {
        return (
          <div>
            <Button type="primary" onClick={() => {this.modal('edit', row)}}>编辑</Button>
            <Button type="danger" style={{marginLeft:10}}
            onClick={() => this.remove(row)}>删除</Button>
          </div>
        );
      }
    }
  ]
  state = {
    visible: false,
    title: '',
    users: [
      {
        username: 'Joe',
        age: 18,
        address: '杭州',
        id: 1
      }
    ]
  }
  render() {
    const { getFieldDecorator } = this.props.form;  //把字段装饰下再输出
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16}
      }
    }    
    return (
      <div className="App">
        <Row>
          <Search style={{width:300}}/>
          <Button type="primary" style={{marginLeft:20}}
          onClick={() => this.modal('add')}>添加用户
          </Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={this.state.users} columns={this.columns} rowKey={row => row.id} bordered 
          pagination={false}/>
        </Row>
        <Modal title={this.state.title} visible={this.state.visible}
        onOk={() => this.handleOk()}
        onClick={() => this.handleAdd()}
        onCancel={() => this.setState({visible: false})}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]
                })(<Input placeholder="UserName"/>)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your age!'
                    }
                  ]
                })(
                  <Input placeholder="age"/>
                )
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your address!'
                    }
                  ]
                })(
                  <Input placeholder="address"/>
                )
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
  handleOk() {
    // console.log('ok');
    // this.setState({
    //   visible: false
    // });
    this.props.form.validateFieldsAndScroll((err, values) => {
      // console.log(err);
      if (!err) {
        let {username, age, address} = values;
        // console.log(username, age, address, this.state.users[this.state.users.length-1].id); 
        const newUsers = this.state.users;
        let id = this.state.users[this.state.users.length-1].id;
        id ++;
        newUsers.push({
          username,
          age,
          address,
          id
        });
        console.log(newUsers);
        this.setState({
          users: newUsers
        });
        this.setState({
          visible: false
        });
      }
    })
  }
  modal(type, row) {
    this.setState({
      visible: true
    }, () => {
      this.props.form.resetFields();
      if (type === 'add') {
        this.setState({
          title: '添加用户'
        });
        // return;
      }else{
      this.setState({
        title: '编辑用户'
      });
      this.props.form.setFieldsValue({
        username: row.username,
        age: row.age,
        address: row.address
      });
      let {username, age, address, id} = row;
      console.log(username, age, address, id);
    }
    });
    console.log(row);
  }
  remove(row) {
    const that = this;
    confirm({
      title: '是否要删除该用户？',
      okText: '是',
      cancelText: '否',
      onOk() {
        const _users = that.state.users.filter(data => {
          return data.id !== row.id
        });
        that.setState({
          users: _users
        });
      }
    })
  }
}

export default Form.create()(App);
