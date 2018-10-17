import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {

        const currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')
        const wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
        const read = this.props.books.filter((book) => book.shelf === 'read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <BookShelf name={'Currently Reading'} books={currentlyReading} onChangeShelf={this.props.onChangeShelf} />
                    <BookShelf name={'Want to Read'} books={wantToRead} onChangeShelf={this.props.onChangeShelf} />
                    <BookShelf name={'Read'} books={read} onChangeShelf={this.props.onChangeShelf} />
                </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          </div>
        )
    }

}

export default ListBooks