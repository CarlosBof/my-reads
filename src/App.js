import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state ={
    query: "",
    books: [],
    searchBooks: [],
  }

  componentDidMount() {
      BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
              books
          }))  
      })
  }

  handleChangeShelf = (item) => {
    let books = this.state.books.filter((book) => book.id !== item.id)
    this.setState((currentState) => ({
      books: [...books, item]
    }))
    BooksAPI.update(item, item.shelf)
  }

  handleQuery = (value) => {
      this.setState(() => ({
        query: value
      }))  

      BooksAPI.search(value)
      .then((b) => {
          let searchBooks = [];
          if(b && !b.items) {
            searchBooks = b.map((book) => {
              let bookSelected = this.state.books.find((bookShelf) => bookShelf.id === book.id)
              book.shelf = (bookSelected ? bookSelected.shelf : "none")
              return book
            })
          }
          console.log(searchBooks);

          this.setState(() => ({
            searchBooks
          }))  
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onChangeShelf={this.handleChangeShelf} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks query={this.state.query} books={this.state.searchBooks} onChangeQuery={this.handleQuery} onChangeShelf={this.handleChangeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
