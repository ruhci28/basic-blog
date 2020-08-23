const allPostReducer = (state = [] , action ) => {
  switch(action.type){
    case 'ALLPOST':
         return action.payload;
    default :
         return state;
  }
};
export default allPostReducer;
