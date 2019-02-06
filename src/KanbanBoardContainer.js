import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
// import 'babel-polyfill';
import update from 'react-addons-update';

// If you're running the server locally, the URL will be, by default, localhost:3000
// Also, the local server doesn't need a authorization header.
//http://kanbanapi.pro-react.com/ 在线访问API服务器地址
//https://github/pro-react 下载看板API服务器，可在本地运行API服务器
const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'any-string-I-like' //The authorization is not deeded for local server
};
// extends Component时编译报错TypeError: Cannot call a class as a function
class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch(API_URL + '/cards', { headers: API_HEADERS })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ cards: responseData });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  addTask(cardId, taskName, taskIndex) {
    //   //Keep a reference to the original prior to the mutations
    //   // in case you need a revert the optimistic changes in the UI
    //   let prevState = this.state;
    //   //Find the index of the card
    //   let cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    //   // Create a new task with the given name and a temporary ID
    //   let newTask = { id: Date.now(), name: taskName, done: false };
    //   // Create a new object and push the new task to the array of tasks
    //   let nextState = update(this.state.cards, {
    //     [cardIndex]: {
    //       tasks: { $push: [newTask] }
    //     }
    //   });
    // // set the component state to the mutated object
    // this.setState({ cards: nextState });
    // Call the API to add the task on the server
    //   fetch(`${API_URL}/cards/${cardId}/tasks`, {
    //     method: 'post',
    //     headers: API_HEADERS,
    //     body: JSON.stringify(newTask)
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         //Throw an error if server response wasn't 'ok'
    //         // so you can revert back the optimistic changes
    //         // made to the UI
    //         throw new Error("Server response wasn't OK");
    //       }
    //     })
    //     .then(responseData => {
    //       // When the server reture the definitive ID
    //       // used for the nre Task on the server, update it on React
    //       newTask.id = responseData.id;
    //       this.setState({ cards: nextState });
    //     })
    //     .catch(error => {
    //       this.setState(prevState);
    //     });
  }

  deleteTask(cardId, taskId, taskIndex) {}

  toggleTask(cardId, taskId, taskIndex) {
    // Keep a reference to the original state prior to the mutations
    // in case you need to revert the optimistic changes in the UI
    // let prevState = this.state;
    // // Find the index of the card
    // let cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    // //save a reference to the task's 'done' value
    // let newDoneValue;
    // // Using the $apply command, you will change the done value to its opposite,
    // let nextState = update(this.state.cards, {
    //   [cardIndex]: {
    //     tasks: {
    //       [taskIndex]: {
    //         done: {
    //           $apply: done => {
    //             newDoneValue = !done;
    //             return newDoneValue;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // );
    // //set the component state to the mutated object
    // this.setState({ cards: nextState });
    // // Call the API to toggle the task on the server
    // fetch(`$(API_URL)/cards/${cardId}/tasls/${taskId}`, {
    //   method: 'put',
    //   headers: API_HEADERS,
    //   body: JSON.stringify({ done: newDoneValue })
    // });
  }

  render() {
    return (
      <KanbanBoard
        cards={this.state.cards}
        taskCallbacks={{
          toggle: this.toggleTask.bind(this),
          delete: this.deleteTask.bind(this),
          add: this.addTask.bind(this)
        }}
      />
    );
  }
}

export default KanbanBoardContainer;
