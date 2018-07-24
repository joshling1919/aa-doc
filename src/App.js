import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { withRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateDoc from './components/CreateDoc';
import Header from './components/Header';

const SERVER = 'https://aachallengeone.now.sh';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('aa-doc-user'),
      docs: {}
    };
  }

  fetchDocs = () => {
    return axios.get(`${SERVER}/read`).then(res => {
      this.setState({
        docs: res.data
      });
    });
  };

  createDoc = doc => {
    const { user, docs } = this.state;
    const { history } = this.props;
    axios
      .post(`${SERVER}/update/${doc.name}`, {
        issuer: user,
        content: doc.content
      })
      .then(res => {
        this.fetchDocs().then(() => history.push('/'));
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
    );
  }
}

export default withRouter(App);
