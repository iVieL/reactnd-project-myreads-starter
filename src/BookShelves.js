import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {
  state = {
    books: [],
    shelfTitle: '',
    shelf: ''
  }

  componentDidMount() {
    this.setState({
      books: this.props.books,
      shelfTitle: this.props.shelfTitle,
      shelf: this.props.shelf
    })
  }

  addBook(book) {

  }

  removeBook(book) {

  }

  render() {
    const {books, shelfTitle: title, shelf} = this.state
    const changer = this.props.changer

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.map((book) =>
              <li key={book.id}>
                <Book book={book} changer={changer} shelf={shelf}/>
              </li>
            )}

          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
