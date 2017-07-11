import React, {Component} from 'react'

class BookShelfChanger extends Component {
    //TODO: receive book and select the correct shelf
    //TODO: handle event and move element to destination shelf, validate for the same shelf
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger