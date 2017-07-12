import React, {Component} from 'react'

class BookShelfChanger extends Component {
    //TODO: receive book and select the correct shelf
    //TODO: handle event and move element to destination shelf, validate for the same shelf
    render() {
        const changer = this.props.changer
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    {changer && Object.entries(changer).map( ([k, v]) => {
                      return(
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
