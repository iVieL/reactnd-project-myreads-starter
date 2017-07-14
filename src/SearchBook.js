import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Book from './Book'

//TODO: usar Shelf para poner los libros de la busqueda

class SearchBook extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query && query.length > 0) {
      BooksAPI.search(query, 20).then((books) => {
        this.setState({ books: books})
      })
    }
  }

  render() {
    const { query: myQuery, books } = this.state
    const changer = this.props.changer
    const shelf = 'none'
    const onChangeShelf = this.props.onChangeShelf
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              value={myQuery}
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books && books.map && books.map((book) =>
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

export default SearchBook
