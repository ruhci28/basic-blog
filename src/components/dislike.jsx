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
      // It shows only those post which have dislike property to be true. It filters all the disliked post.
      // Note: Try to use filter instead of map to filter the elements.
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
