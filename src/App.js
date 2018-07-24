import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
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
  render() {
    return <div className="App" />;
  }
}

export default App;
