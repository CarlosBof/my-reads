import React, { Component} from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={this.props.books} onChangeShelf={this.props.onChangeShelf} />
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    name: PropTypes.string,
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
};


export default BookShelf