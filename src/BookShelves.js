import React, {Component} from 'react'

import Book from './Book'

class Shelf extends Component {

  render() {
    const {books, shelfTitle: title, shelf} = this.props
    const changer = this.props.changer
    const onChangeShelf = this.props.onChangeShelf

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.map((book) =>
              <li key={book.id}>
                <Book
                  book={book}
                  changer={changer}
                  shelf={shelf}
                  onShelfChange={onChangeShelf}
                />
              </li>
            )}

          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
