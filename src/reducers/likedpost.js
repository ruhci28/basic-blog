const likePostReducer = (state = [] , action ) => {
  switch(action.type){
    case 'LIKEPOST':
         return [...state,action.payload];
    case 'REMOVELIKEDPOST':{
          const newState = state.filter(post => JSON.stringify(post) !== JSON.stringify(action.payload));

          console.log(newState);
         return newState;
        }
    default :
         return state;
  }
};
export default likePostReducer;
