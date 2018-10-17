import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <Book item={book} onChangeShelf={this.props.onChangeShelf} />
                    </li>
                ))}
            </ol>
        )
    }
}

BooksGrid.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
};

export default BooksGrid