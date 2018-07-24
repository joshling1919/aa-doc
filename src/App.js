import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Header from './components/Header';

const SERVER = 'https://aachallengeone.now.sh';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('aa-doc-user'),
      docs: []
    };
  }

  fetchDocs = () => {
    axios.get(`${SERVER}/read`).then(res => {
      const docs = [];
      Object.keys(res.data).forEach(docName => {
        docs.push(res.data[docName]);
      });
      this.setState({
        docs
      });
    });
  };

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
    const { user, docs } = this.state;
    return (
      <Router>
        <div>
          <Header user={user} login={this.login} logout={this.logout} />
          <Route
            exact
            path="/"
            render={() => <Home docs={docs} fetchDocs={this.fetchDocs} />}
          />
          <Route path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
