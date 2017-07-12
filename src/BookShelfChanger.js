import React, {Component} from 'react'

class BookShelfChanger extends Component {
    //TODO: receive book and select the correct shelf
    //TODO: handle event and move element to destination shelf, validate for the same shelf
    render() {
        const changer = this.props.changer
        if(changer.currentlyReading)
          console.log("Existe!")
        else
          console.log("No Existe!")
        console.log(changer.currentlyReading)
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled key='none'>Move to...</option>
                    {/*{Object.keys(changer).forEach(function (k) {*/}
                      {/*<option value={k} key={k}>{changer[k]}</option>*/}
                    {/*})}*/}
                    {/*<option value="currentlyReading">Currently Reading</option>*/}
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none" key='none_'>None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger