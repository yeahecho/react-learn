import React, { Component } from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';
import Search from './Search';
import TodoList from './TodoList';
import KanbanBoardContainer from './KanbanBoardContainer';
import Greeter from './Greeter';
import ContactsApp from './ContactAppContainer';

let cardList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the samples in the book',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'ContractList Example',
        done: true
      },
      {
        id: 2,
        name: 'Kanban Example',
        done: false
      },
      {
        id: 3,
        name: 'My own experiments',
        done: false
      }
    ]
  },
  {
    id: 3,
    title: 'Continue my resume',
    description: 'I should have my resume done',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 4,
    title: 'Study Machine Learning ',
    description: 'I should continue my machine learning study',
    status: 'in-progress',
    tasks: []
  }
];

//定义一个React组件
class App extends Component {
  render() {
    //return的就是要显示的内容
    return (
      <div className="app">
        {/*<KanbanBoard cards={cardList} />*/}
        {/*<Search /> */}
        {/*<Greeter salutation="Hello, world" /> */}
        {/*<ContactsApp contacts={contacts} />*/}
        {/*<ContactsAppContainer />*/}
        {/*<KanbanBoardContainer />*/}
        {<TodoList />}
      </div>
    );
  }
}

export default App;
