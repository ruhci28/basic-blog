export const posttoupdate = (posttoupdate) => {
  return {
    type:'POSTTOUPDATE',
    payload:posttoupdate
  }
}
export const updatedpost = (post) => {
  return {
    type:'UPDATEDPOST',
    payload:post
  }
}
 // export const likedpost = (post) => {
 //   return {
 //     type:'LIKEPOST',
 //     payload:post
 //   }
 // }
 // export const unlikelikedpost = (post) => {
 //   return {
 //     type:'REMOVELIKEDPOST',
 //     payload:post
 //   }
 // }
 // export const dislikedpost = (post) => {
 //   return {
 //     type:'DISLIKEPOST',
 //     payload:post
 //   }
 // }
 // export const removedislikedpost = (post) => {
 //   return {
 //     type:'REMOVEDISLIKEDPOST',
 //     payload:post
 //   }
 // }
export const setallpost = (posts) => {
  return {
    type:'ALLPOST',
    payload:posts
  }
}
export const filteredpost = (posts) => {
  return {
    type:'FILTERPOST',
    payload:posts
  }
}
export const searchterm = (hint) => {
  return {
    type:'SEARCH',
    payload:hint
  }
}
// action to turn on the editmode
export const turnonsearchmode = (mode) => {
  return {
    type:'TURNONSEARCHMODE',
    payload:mode
  }
}
// action to turn off  the edit mode
export const turnoffsearchmode = (mode) => {
  return {
    type:'TURNOFFSEARCHMODE',
    payload:mode
  }
}
