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
      this.setState({book: this.props.book})
    }
  }

  render() {
    const book = this.state.book
    const {url} = [book.imageLinks ? book.imageLinks.thumbnail: '']
    const width = 128
    const height = 193
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

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={ {
                    width: {width},
                    height: {height},
                    backgroundImage: `url(${url})`
                  } }>
                  </div>
                <BookShelfChanger changer={changer}/>
            </div>
            <div className="book-title">{title}</div>
            {authors.map((author) =>
              <div className="book-authors" key='{author}'>{author}</div>
            )}
        </div>
        /*
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={ {
                    width: 128,
                    height: 193,
                    backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
                  } }>
                  </div>
                <BookShelfChanger />
            </div>
            <div className="book-title">1776</div>
            <div className="book-authors">David McCullough</div>
        </div>
        */
    )
  }
}

export default Book
