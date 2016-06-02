import 'fetch';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import flatten from 'lodash/flatten';

import RepoList from './repo-list';
import {reposForUser} from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  fetchRepos() {
    if (!this.refs.reponame.value) {
      return;
    }

    reposForUser(this.refs.reponame.value)
    .then(repos => {
      return Promise.all(repos);
    })
    .then(repos => {
      this.setState({ repos:  flatten(repos)});
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <h3>Open Source</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <input ref="reponame" defaultValue="weisk"/>
          <button onClick={() => this.fetchRepos()}>Search</button>
        </div>
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
