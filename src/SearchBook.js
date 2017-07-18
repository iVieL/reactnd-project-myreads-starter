import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import BookList from './BookList'

class SearchBook extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    if(query && query.length > 0) {
      BooksAPI.search(query, 20).then((books) => {
        this.props.onSearch(books)
        this.setState({ books: books})
      })
    } else {
      this.setState({ books: []})
    }
  }

  render() {
    const { query: myQuery, books } = this.state
    const changer = this.props.changer
    const onChangeShelf = this.props.onChangeShelf
    return (
      <div className='search-books'>
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              value={myQuery}
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList
              books={books}
              changer={changer}
              onShelfChange={onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook
