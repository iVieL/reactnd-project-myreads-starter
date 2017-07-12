import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  state = {
    book: {},
    shelf: ''
  }
    //TODO: receive correct parameters and fill each div
    //TODO: track shelf for current book
    //TODO: handle and pass-through for change shelves

  componentDidMount() {
    if(this.props.book) {
      this.setState({book: this.props.book, shelf: this.props.shelf})
    }
  }

  render() {
    const book = this.state.book
    const url = book.imageLinks ? book.imageLinks.thumbnail: null
    //const isbn13 = book.industryIdentifiers ? book.industryIdentifiers[0].identifier: ''
    const width = 220
    const height = 220
    const title = book.title
    const authors = book.authors ? book.authors: []

    const changer = this.props.changer

      // image = book.imageLinks.thumbnail
      // width = ?
      // size = ?
      // title = book.title
      // subtitle = book.subtitle
      // shelf = book.shelf
      // authors = book.authors[]
    console.log(title+' => '+url)

    return (
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                  width: {width},
                  height: {height},
                  backgroundImage: `url(${url})`
                }}>
              </div>

                <BookShelfChanger changer={changer}/>
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
