const filterPostReducer = (state = [] , action ) => {
  switch(action.type){
    case 'FILTERPOST':
         return action.payload;
    default :
         return state;
  }
};
export default filterPostReducer;
