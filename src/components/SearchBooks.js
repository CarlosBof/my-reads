import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.props.query} placeholder="Search by title or author" onChange={(e) => this.props.onChangeQuery(e.target.value.trim())}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.props.books} onChangeShelf={this.props.onChangeShelf} />
                </div>
          </div>
        )
    }
}

SearchBooks.propTypes = {
    query: PropTypes.string,
    books: PropTypes.array,
    onChangeQuery: PropTypes.func,
    onChangeShelf: PropTypes.func,
}

export default SearchBooks