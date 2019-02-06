import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

//Main component. Renders a SearchBar and a ContactList
//Renders a SearchBAr and a ContactList
//Passes down filterText state and handleUserInput callback as props
class ContactsAppContainer extends Component {
  // class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('./contacts.json')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ contacts: responseData });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return <ContactsApp contacts={this.props.contacts} />;
  }
}

class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
  }

  handleUserInput(searchTerm) {
    this.setState({ filterText: searchTerm });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

ContactsApp.propsTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
  handlerChange(event) {
    this.props.onUserInput(event.target.value);
  }

  render() {
    return (
      <input
        type="search"
        placeholder="search"
        value={this.props.filterText}
        onChange={this.handlerChange.bind(this)}
      />
    );
  }
}

// class SearchBar extends Component {
//   handleChange(event) {
//     //接收回调并在onChange事件中调用
//     this.props.onUserInput(event.target.value);
//   }
//   render() {
//     return (
//       <input
//         type="search"
//         placeholder="search"
//         value={this.props.filterText}
//         onChange={this.handleChange.bind(this)}
//       />
//     );
//   }
// }

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

//Pure component that receives both contacts and filterText as props
//The component is responsbile for actually filtering the
//contacts before displaying them.
//It's considered a pure component because given the same
//contacts and filterText props the output will always be the same.
class ContactList extends Component {
  render() {
    let filteredContacts = this.props.contacts.filter(
      contact =>
        contact.name.toLowerCase().indexOf(this.props.filterText) !== -1
    );

    return (
      <ul>
        {// this.props.contacts.map(
        filteredContacts.map(contact => (
          <ContactItem
            key={contact.email}
            name={contact.name}
            email={contact.email}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
};

class ContactItem extends Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.email}
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

//You now render ContactAppContainer, instead of ContactsApp
render(<ContactsAppContainer />, document.getElementById('root'));
