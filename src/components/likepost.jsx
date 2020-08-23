import React from 'react';
import { useSelector } from 'react-redux';
import SinglePost from './singlepost.jsx';

function LikePost () {
  const allpost = useSelector(state => state.allpost);

  return (
    <div className='posts'>
      <h3>Liked Post</h3>
    <div className="containpost">
    {
      allpost.map(post => {
      if(post.like){
        return <SinglePost userId={post.userId} id={post.id} title={post.title} body={post.body} key={post.id} like={post.like || false} dislike={post.dislike||false}/>;
      } else {
        return '';
      }
      }
    )}
    </div>
    </div>
  );
}
export default LikePost;
