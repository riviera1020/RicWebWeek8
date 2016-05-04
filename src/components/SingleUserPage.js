import React, {
  Component
} from 'react';

import './SingleUserPage.css';

class SingleUserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '@@',
      age: 'old'
    };
    this.getData = this.getData.bind(this);
  }

  getData(data) {
    this.setState({
      name: data.name,
      age: data.age
    });
  }

  componentDidMount() {
    let getData = this.getData;
    let username = this.props.params.username;
    console.log(username);
    let path = '/api/users/' + username;
    fetch(path)
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
        getData(data);
      });
  }

  render() {
    const {
      name,
      age
    } = this.state;
    return (
      <div className="container-fluid bg-1 text-center">
        <h1>{name}</h1>
        <p>{age}</p>
      </div>
    );
  }
}

export default SingleUserPage;