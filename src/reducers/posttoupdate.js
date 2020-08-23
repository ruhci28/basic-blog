
const posttoupdateReducer = (state =  {userId:'',id:'',title:'',body:''}, action ) => {
  switch(action.type){
    case 'POSTTOUPDATE':
         return action.payload
    default :
         return state;
  }
};
export default posttoupdateReducer;
