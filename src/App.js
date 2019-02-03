import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard/KanbanBoard';

let cardList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContractList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "Continue my resume",
    description: "I should have my resume done",
    status: "in-progress",
    tasks: []
  },
  {
    id: 4,
    title: "Study Machine Learning ",
    description: "I should continue my machine learning study",
    status: "in-progress",
    tasks: []
  },

]


class App extends Component {
  render() {
    return (
      <KanbanBoard cards={cardList} />
    );
  }
}

export default App;
