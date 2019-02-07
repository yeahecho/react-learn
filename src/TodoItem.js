import React, { Component } from 'react';

class TodoItem extends Component {
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接收父组件传递来的数据
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //子组件如果想和父组件通信，子组件要调用父组件传递过来的参数
  handleDelete() {
    this.props.delete(this.props.index);
  }
  render() {
    const { content } = this.props;
    return (
      //   <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
      <div onClick={this.handleDelete}>{content}</div>
    );
  }
}

export default TodoItem;
