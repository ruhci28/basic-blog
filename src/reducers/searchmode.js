// handle editmode state of the application initially editmode is false
const searchmodeReducer = (state = {mode:false}, action ) => {
  switch(action.type){
    case 'TURNONSEARCHMODE':
         const newState = { ...state, mode: true };
         return newState;
    case 'TURNOFFSEARCHMODE':
        const state1 = { ...state, mode: false};
        return state1;
    default :
    const state2 =  Object.assign({}, state);
    return state2;
  }
};
export default searchmodeReducer;
