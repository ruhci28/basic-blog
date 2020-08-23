const dislikePostReducer = (state = [] , action ) => {
  switch(action.type){
    case 'DISLIKEPOST':
         return [...state,action.payload];
    case 'REMOVEDISLIKEDPOST':{
          const newState = state.filter(post => JSON.stringify(post) !== JSON.stringify(action.payload));
            console.log(newState);
         return newState;
        }
    default :
         return state;
  }
};
export default dislikePostReducer;
