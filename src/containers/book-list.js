import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key ={book.title}
          onClick = {() => this.props.selectBook(book)}
          className= "list-group-item"> {book.title} </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}


/**
 *
 *
 * @param {any} state
 * @returns
 */
function mapStateToProps(state){
  //whatever is here will show as props in book_list
  return{
    books: state.books
  };
}


//things returned from this function will be passed in the
//  props of book_list container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);

