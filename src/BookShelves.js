import {Component} from 'react'

class Shelf extends Component {
  state = {
    books: []
  }

  render() {
    const {books: this.state.books}

    return (
      <div>
        {books.map((book) =>
          <Book info={book} />
        )}
      </div>
    )
  }
}
