import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <div className='search'>
        <span>Search </span><input type="text" />
      </div>
    )
  }
}
