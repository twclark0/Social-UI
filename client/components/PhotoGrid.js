import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataList : this.props.nuvi
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
      this.setState({dataList: nextProps.nuvi});
  }
  handleClick(s)  {
      let ctrl = [];
      if (s === true) ctrl = this.props.nuvi.filter(x => x.provider);
      else ctrl = this.props.nuvi.filter(x => x.provider === s);
      this.setState({dataList : ctrl});
  }
  render() {
    return (
      <div className="main">
        <div className='sidebar'>
          <h1 onClick={() => {this.handleClick(true)}}>Dashboard</h1>
          <ul className="sep">
            {['facebook', 'instagram', 'tumblr', 'twitter'].map((li, i) => (
                <li onClick={() => this.handleClick(li)}>{li.toUpperCase()}</li>
            ))}
          </ul>
        </div>
        <div className="photo-grid">
          {this.state.dataList.map((post,i) => <Photo {...this.props} key={i} i={i} post={this.state.dataList} />)}
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
