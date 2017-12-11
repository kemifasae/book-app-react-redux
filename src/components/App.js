import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book_detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}

export default App;
