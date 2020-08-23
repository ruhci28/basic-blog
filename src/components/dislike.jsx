import React from 'react';
import SinglePost from './singlepost.jsx';
import { useSelector } from 'react-redux';

function DisLikePost () {
  const allpost = useSelector(state => state.allpost);
  
  return (
    <div className='posts'>
      <h3>Disliked Post</h3>
    <div className="containpost">
    {
      allpost.map(post => {
      if(post.dislike){
        return   <SinglePost userId={post.userId} id={post.id} title={post.title} body={post.body} key={post.id} like={post.like || false} dislike={post.dislike||false} />
      } else {
        return '';
      }
     }
    )}
    </div>
  </div>);
}
export default DisLikePost;
