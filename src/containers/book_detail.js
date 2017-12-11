import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return (
        <div>Select a Book to Get Started</div>
      );
    }
    return(
      <div>
        <h3> Book Details for: </h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  //whatever is here will show as props in book_list
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
