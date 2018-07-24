import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('aa-doc-user')
    };
  }
  componentDidMount() {
    axios
      .post('https://aachallengeone.now.sh/update/0', {
        issuer: 'josh',
        content: 'FIRST DOC LEZ GET IT'
      })
      .then(function(res) {
        console.log(res);
        axios
          .get('https://aachallengeone.now.sh/read')
          .then(function(response) {
            console.log(response);
          });
      });
  }

  login = e => {
    e.preventDefault();
    const user = e.target.elements[0].value;
    this.setState(
      {
        user
      },
      () => localStorage.setItem('aa-doc-user', this.state.user)
    );
  };

  logout = e => {
    localStorage.removeItem('aa-doc-user');
    this.setState({
      user: null
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header
            user={this.state.user}
            login={this.login}
            logout={this.logout}
          />
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
