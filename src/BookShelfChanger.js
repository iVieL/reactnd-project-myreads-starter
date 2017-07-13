import React, {Component} from 'react'

class BookShelfChanger extends Component {
    //TODO: handle event and move element to destination shelf, validate for the same shelf
    render() {
        const changer = this.props.changer
        const shelf = this.props.select
        return (
            <div className="book-shelf-changer">
                <select value={shelf}>
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
