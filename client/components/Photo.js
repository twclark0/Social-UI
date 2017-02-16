import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {

  render() {
    const { post, i } = this.props;
    return (
      <figure key={i} className="grid-figure">
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post[i].id}`} className='avator'>
            <img className='grid-photo' id='avator' src={post[i].actor_avator} alt={post[i].caption} />
          </Link>
          <div>
            <p className='name'>{post[i].actor_name}</p>
            <p className='description'>{post[i].actor_description}</p>
          </div>
        </div>
        <div className='info'>
            <p>{ /http/.test(post[i].activity_message) ? <img src={post[i].activity_message} /> : post[i].activity_message}</p>
        </div>
        <figcaption>
          <p>{post[i].caption}</p>

          <div className="control-buttons">
            <button className="likes">&hearts; {post[i].activity_likes}</button>

          <Link to={`/view/${post[i].id}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble"></span> {post[i].activity_comments}
              </span>
            </Link>
          </div>
          <div className={'date-provider'}>
              <p>{post[i].provider}</p>
              <p>{post[i].activity_date}</p>
          </div>
        </figcaption>

      </figure>
    )
  }
}

export default Photo;
