import updateReducer from './posttoupdate';
import updatePost from './updatedPost';
// import likedpost from './likedpost';
// import dislikepost from './dislikedpost';
import allpost from './allpost';
import search from './search';
import searchmode from './searchmode';
import filterpost from './filterpost';
import {combineReducers} from 'redux';

 const rootReducer = combineReducers({
   posttoupdate:updateReducer,
   updatedpost:updatePost,
   allpost:allpost,
   searchterm:search,
   searchmode:searchmode,
   filteredpost:filterpost
 })
 export default rootReducer;
 // likedpost:likedpost,
 // dislikedpost:dislikepost,
