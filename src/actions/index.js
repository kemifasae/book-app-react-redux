export function selectBook(book){
  //this is an action creator which needs to return an action
  //which is an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
