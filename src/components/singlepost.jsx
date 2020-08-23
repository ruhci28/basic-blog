import React,{ useState } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import {posttoupdate,setallpost} from '../actions'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

function SinglePost (props) {
  const classes = useStyles();
  const allpost = useSelector(state => state.allpost);
  const [like,setlike] = useState(props.like || false );
  const [unlike,setUnlike] = useState(props.dislike||false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = {
    userId:props.userId,
    title:props.title,
    body:props.body
  }
// function to like the post. this function change like property of the post to true.
  function likepost () {
    setlike(true);
    const value = allpost;
    const updatedarray = value.filter(post => {
      const temp = {userId:post.userId,
      title:post.title,
      body:post.body}
      if(JSON.stringify(temp) !== JSON.stringify(user)){
      return post;
    }else {
      post.like=true;
      return post;
    }
  });
  dispatch(setallpost(updatedarray));
};
// function to remove like from  the post. this function change like property of the post to false. Thus the post is no longer liked.
 function removelikepost () {
   setlike(false);
   const value = allpost;
   const updatedarray = value.filter(post => {
     const temp = {userId:post.userId,
     title:post.title,
     body:post.body}
     if(JSON.stringify(temp) !== JSON.stringify(user)){
     return post;
   }else {
     post.like=false;
     return post;
   }
   });
   dispatch(setallpost(updatedarray));
 }
// function to dislike the post. this function change dislike property of the post to true.
 function dislikepost() {
   setUnlike(true);
   const value = allpost;
   const updatedarray2 = value.filter(post => {
     const temp = {userId:post.userId,
     title:post.title,
     body:post.body};
     if(JSON.stringify(temp) !== JSON.stringify(user)){
     return post;
   }else {
     post.dislike=true;
     return post;
   }
   });
   dispatch(setallpost(updatedarray2));
 }
 // function to remove dislike from  the post. this function change dislike property of the post to false.
 // Thus the post is no longer disliked.
 function removedislikepost() {
   setUnlike(false);
   const value = allpost;
   const updatedarray = value.filter(post => {
     const temp = {userId:post.userId,
     title:post.title,
     body:post.body}
     if(JSON.stringify(temp) !== JSON.stringify(user)){
     return post;
   }else {
     post.dislike=false;
     return post;
   }
 });
 dispatch(setallpost(updatedarray));
 }
 // this function makes a delete request to json placeholder api.
 // and also remove the particular post from allpost state. 
 function deletepost() {
   axios.delete('https://jsonplaceholder.typicode.com/posts/'+user.id)
        .then(res => {})
        .catch(err => {});
        const value = allpost;
        const tempUser = {userId:user.userId,title:user.title,body:user.body};
        const updatedarray = value.filter(post => {
          const tempPost = {userId:post.userId,title:post.title,body:post.body};
        return  JSON.stringify(tempPost) !== JSON.stringify(tempUser)});
        dispatch(setallpost(updatedarray));
 }
  return (
    <Card className={classes.root } style={{backgroundColor:'#d8d3cd', margin: '16px',float: 'left'}} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.userId}
          </Avatar>
        }
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

       <IconButton aria-label="add to favorites">
       {like ? <FavoriteIcon onClick={()=>{removelikepost()}}/> : <FavoriteBorderIcon onClick={()=>{likepost()}}/>}
       </IconButton>
       <IconButton aria-label="add to dislike">
       {unlike ? <ThumbDownIcon  onClick={() => {removedislikepost()}}/>:<ThumbsUpDownIcon onClick={()=>{dislikepost()}}/>}
       </IconButton>
        <IconButton aria-label="update">
          <UpdateIcon onClick={()=>{dispatch(posttoupdate(user));
          history.push('/edit')}}/>
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>{deletepost()}}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default SinglePost;
