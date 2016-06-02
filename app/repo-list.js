import React, {Component} from 'react';

import Repo from './repo';

export default class RepoList extends Component {
  renderRepos() {
    return this.props.repos.map((repo) => {
      return (
        <li key={repo.id}>
          <Repo raw={repo} />
        </li>
      );
    });
  }

  render() {
    return <ul>{ this.renderRepos() }</ul>;
  }
}
