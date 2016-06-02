import React, {Component} from 'react';

export default class Repo extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.raw.full_name }</h3>
        <p>{ this.props.raw.description }</p>
      </div>
    );
  }
}
