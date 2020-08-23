import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {setallpost} from '../actions';

function CreatePost () {
  const history = useHistory();
  const dispatch = useDispatch();
  const allpost = useSelector(state=>state.allpost);
  const [post,setpost] = React.useState({
    userId:'',
    title:'',
    body:'',
    liked:false,
    dislike:false
  })
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
  function handlesubmit(event){
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',{userId:post.userId,title:post.title,body:post.body})
    .then(res=>{
      // console.log(res);
      allpost.push(post);
      dispatch(setallpost(allpost));
      history.push('/');
  })
    .catch(err => {console.log(err)});

  }
  return (
    <div className='container'>
    <form onSubmit={(event)=>{handlesubmit(event)}}>
         <label>UserId</label>
         <TextField name="userId" value={post.userId}  variant="outlined" fullWidth onChange={handleChange}/>
         <label>Title</label>
         <TextField name='title' value={post.title} variant="outlined" fullWidth onChange={handleChange}/>
         <label>Post</label>
         <TextField name='body' value={post.body} variant="outlined" multiline rows={8} fullWidth onChange={handleChange}/>
         <Button variant="contained" color="primary" type='submit'>
          Create
         </Button>
    </form>
    </div>);
}
export default CreatePost;
