import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import AllPost from './components/allpost';
import CreatePost from './components/createpost';
import EditPost from './components/updatepost';
import LikePost from './components/likepost';
import DislikePost from './components/dislike';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setallpost } from './actions';
import axios from 'axios';
function App() {
  const dispatch = useDispatch();
  const [posts,setpost] = useState([]);
  useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    setpost(res.data);
    // console.log(res.data);
    dispatch(setallpost(res.data));
  })
  .catch(err => {
    console.log(err);
  })},[]);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={AllPost} />
      <Route path='/create' exact component={CreatePost} />
      <Route path='/edit' exact component={EditPost} />
      <Route path='/likepost' exact component={LikePost} />
      <Route path='/dislikepost' exact component={DislikePost} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;
