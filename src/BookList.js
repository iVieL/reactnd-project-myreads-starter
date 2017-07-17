import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const {books, changer, shelf, onShelfChange} = this.props

    return (
      <ol className="books-grid">
        {books && books.map((book, index) =>
          <li key={book.id+'-'+index}>
            <Book
              book={book}
              changer={changer}
              shelf={shelf ? shelf: book.shelf}
              onShelfChange={onShelfChange}
            />
          </li>
        )}
      </ol>
    )
  }
}

export default BookList
