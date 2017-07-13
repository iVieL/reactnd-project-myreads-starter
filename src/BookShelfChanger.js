import React, {Component} from 'react'

class BookShelfChanger extends Component {

  changeShelf = (event) =>{
    const value = event.target.value;
    this.setState({select: value})
    this.props.changeBook(this.props.book, value)
  }

  render() {
    const changer = this.props.changer
    const shelf = this.props.select

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.changeShelf}>
          <option value="none" disabled>Move to...</option>
          {changer && Object.entries(changer).map(([k, v]) => {
            return (
              <option value={k} key={k}>{v}</option>
            )
          })}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
