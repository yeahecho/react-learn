import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Greeter extends Component {
  render() {
    return <h1>{this.props.saluation}</h1>;
  }
}

Greeter.propTypes = {
  //如果不写isRequired，如果没有为saluation赋值，输出默认值“Hello react”
//   saluation: PropTypes.string
  //   saluation: PropTypes.string.isRequired
};

//提供默认值
Greeter.defaultProps = {
  saluation: 'Hello react'
};

// render(<Greeter />, document.getElementById('root'));
// render(<Greeter saluation="Hello World" />, document.getElementById('root'));
export default Greeter;
