import React from 'react';
import Photo from './Photo';

class Single extends React.Component  {
  render() {
    const i = this.props.nuvi.findIndex((post)=> post.id === this.props.params.postId);
    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.nuvi} {...this.props} />
        <div className='addComment'>
          <form onSubmit={(e) => {e.preventDefault();}} ref="commentForm" className="comment-form">
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="comment"/>
            <input type="submit" hidden/>
          </form>
        </div>
      </div>
    );
  }
}

export default Single;
