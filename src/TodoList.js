import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import PropTypes from 'prop-types';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      // list: [...this.state.list, 'hello world']
      list: [...this.state.list, this.state.inputValue],
      inputValue: '' //添加后输入框清空
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleDelete(index) {
    //复制一个副本，尽量不要直接操作state
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  getTodoItems() {
    return this.state.list.map((item, index) => {
      //父组件通过属性的形式向子组件传递参数
      //子组件通过props接收父组件传递来的数据
      return (
        <TodoItem
          delete={this.handleDelete}
          key={index}
          content={item}
          index={index}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
