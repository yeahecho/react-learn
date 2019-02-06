import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';

//KanbanBoard组件接收并传递taskCallbacks props
class KanbanBoard extends Comment {
  render() {
    return (
      <div className="app">
        <List
        id='todo'
          title="To Do"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === 'todo')}
        />
        <List
        id='in-progress'
          title="In Progress"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === 'in-progress')}
        />
        <List
        id='done'
          title="Done"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === 'done')}
        />
      </div>
    );
  }
}

KanbanBoard.propTypse = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object
};

export default KanbanBoard;
