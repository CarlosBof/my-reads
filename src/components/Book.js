import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    handleChangeShelf = (e, item) => {
        item.shelf = e.target.value;
        this.props.onChangeShelf(item);
    }

    render() {

        let authors = (this.props.item.authors ? this.props.item.authors.join(', ') : []);
        let imageURL = (this.props.item.imageLinks ? this.props.item.imageLinks.thumbnail : "" )

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageURL}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.item.shelf} onChange={(e) => this.handleChangeShelf(e, this.props.item)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.item.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    item: PropTypes.object,
    onChangeShelf: PropTypes.func,
};

export default Book