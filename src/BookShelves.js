import React, {Component} from 'react'

import BookList from './BookList'

class Shelf extends Component {

  render() {
    const {books, shelfTitle: title, shelf} = this.props
    const changer = this.props.changer
    const onChangeShelf = this.props.onChangeShelf

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList
            books={books}
            changer={changer}
            shelf={shelf}
            onShelfChange={onChangeShelf}
          />
        </div>
      </div>
    )
  }
}

export default Shelf
