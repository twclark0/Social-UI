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
      if(s === true) {
        ctrl = this.props.nuvi.filter(x => x.provider);
      }
      else {
        ctrl = this.props.nuvi.filter(x => x.provider === s);
      }
      this.setState({dataList : ctrl});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.refs.item.value);
  }
  render() {
    return (
      <div className="main">
        <div className='sidebar'>
          <h1 onClick={() => {this.handleClick(true)}}>Dashboard</h1>
          <ul className="sep">
            <li onClick={() => {this.handleClick('facebook')}}>Facebook</li>
            <li onClick={() => {this.handleClick('instagram')}}>Instagram</li>
            <li onClick={() => {this.handleClick('tumblr')}}>Tumbler</li>
            <li onClick={() => {this.handleClick('twitter')}}>Twitter</li>
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
