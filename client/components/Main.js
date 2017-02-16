import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav.js';

export default class Main extends React.Component {
  componentDidMount() {
    this.props.nuviData();
    document.cookie = "SESSION=NUVI-12345";
  }
  render() {
    return (
      <div>
        <Nav {...this.props} />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}
