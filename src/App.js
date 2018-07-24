import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateDoc from './components/CreateDoc';
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

  createDoc = doc => {
    axios
      .post(`${SERVER}/update/${doc.name}`, {
        issuer: this.state.user,
        content: doc.content
      })
      .then(res => {
        console.log('this was created respones', res);
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
          <Route
            path="/new"
            render={() => <CreateDoc createDoc={this.createDoc} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
