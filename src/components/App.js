import React, { Component } from 'react';
import NavLink from './NavLink';


export default class App extends Component {
  render() {
    return (
        <div>
          <h1>React Router Tutorial</h1>
          <ul role="nav">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/repos">Repos</NavLink></li>
              <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          </ul>
          {this.props.children}
      </div>
    );
  }
}
