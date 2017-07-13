import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  state = {
    book: {},
    shelf: ''
  }
    //TODO: handle and pass-through for change shelves
    //TODO: handle the correct image sizes

  componentDidMount() {
    if(this.props.book) {
      this.setState({book: this.props.book, shelf: this.props.shelf})
    }
  }

  render() {
    const shelf = this.state.shelf
    const book = this.state.book

    const myUrl = book.imageLinks ? book.imageLinks.thumbnail: null
    //const isbn13 = book.industryIdentifiers ? book.industryIdentifiers[0].identifier: ''
    const width = 220+'px'
    const height = 220+'px'
    const title = book.title
    const authors = book.authors ? book.authors: []

    const changer = this.props.changer

    return (
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                width: `${width}`,
                height: `${height}`,
                backgroundImage: `url(${myUrl})`
              }}/>

                <BookShelfChanger changer={changer} select={shelf}/>
            </div>
            <div className="book-title">{title}</div>
            {authors.map((author) =>
              <div className="book-authors" key={author}>{author}</div>
            )}
        </div>
    )
  }
}

export default Book
