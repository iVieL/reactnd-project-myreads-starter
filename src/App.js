import React from 'react'
import {Route, Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './BookShelves'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
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
      this.setState({books})
    })
  }

  updateSearchedBooks(sBooks) {
    console.log(this.state)
    sBooks && sBooks.map((sbook) => {
      const foundArray = this.state.books.filter((book) =>
        book.id === sbook.id
      )
      if(foundArray && foundArray.length >= 1) {
        sbook.shelf = foundArray[0].shelf
      }
      return sbook
    })
  }

  filterBooKsByShelf(shelf) {
    return this.state.books.filter( (book) =>
      book.shelf === shelf
    )
  }

  changeBookShelf = (book, shelf) => {
    book && shelf && BooksAPI.update(book, shelf).then( () => {
        this.updateBooks()
    })
  }

  render() {
    const changer = this.state.changer
    return (
      <div className="app">

        <Route exact path="/search" render={({history}) => (
          <SearchBook changer={changer} onChangeShelf={(book, shelf) => {
            this.changeBookShelf(book, shelf)
            history.push('/')
          }} onSearch={this.updateSearchedBooks}/>
        )}/>

        <Route exact path="/" render={() => (
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
              <Link to='/search'>Add a Book</Link>
            </div>
          </div>
        )}/>

      </div>

    )
  }
}

export default BooksApp
