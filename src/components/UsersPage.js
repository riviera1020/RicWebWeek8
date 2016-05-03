import React, {
  Component
} from 'react';

import './UsersPage.css';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    fetch('/users')
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
        console.log('request succeeded with JSON response', data)
      })
      .catch(function(error) {
        console.log('request failed', error)
      });
    /*fetch('/users', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log(data);
          })
          .catch(function(err) {
            console.log("Json Error : -S", err);
          });
      })
      .catch(function(err) {
        console.log("Fetch Error : -S ", err);
      });*/

    /*fetch('/users.json')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });*/
  }

  render() {
    return (
      <div>
        <h1>UsersPage</h1>
      </div>
    );
  }
}

export default UsersPage;