import React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import {updatedpost,setallpost } from '../actions';
function UpdatePost () {
  const history = useHistory();
  const dispatch = useDispatch();
  const allpost = useSelector(state => state.allpost);
  const posttoupdate = useSelector(state => state.posttoupdate);
  const [post,setpost] = React.useState(posttoupdate);
  function handleChange(event){
    event.persist()
    const {name,value} = event.target;
    setpost((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    });
  }
  // This function made a patch request to jsonplaceholder api to update the post.
  // It also update the allpost state to see the updated post in ui.
  function handleSubmit(event) {
    event.preventDefault();
    axios.patch('https://jsonplaceholder.typicode.com/posts/'+post.userId,post)
    .then(res=>{console.log(res);
      const value = allpost;
      const updatedarray = value.map(currpost=>{
        const temp = {userId:currpost.userId,
        title:currpost.title,
        body:currpost.body};
        const temp2 = {
          userId:posttoupdate.userId,
          title:posttoupdate.title,
          body:posttoupdate.body
        }
        if(JSON.stringify(temp2) !== JSON.stringify(temp)){
          return currpost;
        }else {
          currpost.userId = post.userId;
          currpost.title = post.title;
          currpost.body = post.body;
          return currpost;
        }
      });
      dispatch(setallpost(updatedarray));
    history.push('/');
    dispatch(updatedpost(post));
  })
    .catch(err => {console.log(err)});
  }
  return (
    <div className='container'>
    <form onSubmit={(event)=>{handleSubmit()}}>
         <label>UserId</label>
         <TextField name="userId" value={post.userId}  variant="outlined" fullWidth onChange={handleChange}/>
         <label>Title</label>
         <TextField name='title' value={post.title} variant="outlined" fullWidth onChange={event => handleChange(event)}/>
         <label>Post</label>
         <TextField name='body' value={post.body} variant="outlined" multiline rows={8} fullWidth onChange={(event) => handleChange(event)}/>
         <Button variant="contained" color="primary" type='submit' onClick={handleSubmit}>
          Update
          </Button>
         <Button variant="contained" color="primary" style={{marginLeft:'20px'}} onClick={ (event) => {event.preventDefault(); history.push('/')}}>
           Cancel
          </Button>
    </form>
    </div>);
}
export default UpdatePost;
