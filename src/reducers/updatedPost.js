
const updatePostReducer = (state =  {userId:'',title:'',body:''}, action ) => {
  switch(action.type){
    case 'UPDATEDPOST':
         return action.payload
    default :
         return state;
  }
};
export default updatePostReducer;
