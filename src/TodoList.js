import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['learn react', 'learn english', 'learn vue'],
      inputValue: ''
    };
  }

  handleBtnClick() {
    this.setState({
      // list: [...this.state.list, 'hello world']
      list: [...this.state.list, this.state.inputValue],
      inputValue: '' //添加后输入框清空
    });
    alert('click');
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
