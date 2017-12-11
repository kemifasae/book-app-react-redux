export default function(state=null, action){
  // state here is the state this reducer is responsible for
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
