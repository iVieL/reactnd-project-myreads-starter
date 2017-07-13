import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './BookShelves'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    changer: {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: 'Read'
    }
  }

  componentDidMount() {
    this.updateBooks()
  }

  updateBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState( {books} )
    })
  }

  filterBooKsByShelf(shelf) {
    return this.state.books.filter( (book) =>
      book.shelf === shelf
    )
  }

  changeBookShelf = (book, shelf) => {
    book && shelf && BooksAPI.update(book, shelf).then( () =>
      this.updateBooks()
    )
  }

  render() {
    const changer = this.state.changer
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"/>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {changer && Object.entries(changer).map( ([k, v]) => {
                  return(
                    <Shelf
                      shelfTitle={v}
                      shelf={k}
                      changer={changer}
                      key={k}
                      books={this.filterBooKsByShelf(k)}
                      onChangeShelf={this.changeBookShelf}
                    />
                  )
                })}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
