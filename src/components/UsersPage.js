import React, {
  Component
} from 'react';

import './UsersPage.css';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: []
    };
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(data) {
    console.log(data.users);
    this.setState({
      users: data.users
    });
  }

  componentDidMount() {
    let getUsers = this.getUsers;
    fetch('/api/users')
      .then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('request succeeded with JSON response', data);
        getUsers(data);
      })
      .catch(function(err) {
        console.log('request fail', err);
      });
  }

  render() {
    const users = this.state.users;
    return (
      <div className="container-fluid bg-1 text-center">
        <h1>UsersPage</h1>
          <div className="row">
            <div className="col-sm-6">
              <h3>{users[0].name}</h3>
              <p>{users[0].age}</p>    
            </div>
            <div className="col-sm-6">
              <h3>{users[1].name}</h3>
              <p>{users[1].age}</p>    
            </div>
          </div>
      </div>
    );
  }
}

export default UsersPage;