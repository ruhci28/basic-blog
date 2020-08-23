import React from 'react';
import SinglePost from './singlepost.jsx';
import { useSelector } from 'react-redux';

function AllPost () {
  const searchmode = useSelector(state => state.searchmode.mode);
  const filterpost = useSelector(state => state.filteredpost);
  const allpost = useSelector(state => state.allpost);

  return (
    <div className='posts'>
    {
      // shows filterpost only when searchmode is on.
      // when searchmode is off show all posts.
      searchmode ? <span>
      <h3>Filter Post</h3>
      <div className="containpost">
       {
         filterpost.map((post,index)=>{
           return <SinglePost userId={post.userId} title={post.title} body={post.body} key={post.id} like={post.like || false} dislike={post.dislike||false}/>
         })
       }
      </div>
      </span>:<span>
        <h3>All Post</h3>
        <div className="containpost">
         {
           allpost.map((post,index)=>{
             return <SinglePost userId={post.userId} title={post.title} body={post.body} key={post.id} id={post.id} like={post.like || false} dislike={post.dislike||false}/>
           })
         }
        </div>
      </span>
    }
  </div>);
}
export default AllPost;
