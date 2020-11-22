import React from 'react';
import Book from './Book';
import './BookList.css';

class BookList extends React.Component {
    render() {
        const { books, expanded, assignExpand } = this.props;

        let simpleList = books.map((book, idx) => {
            return <Book
                key={idx}
                details={book}
                expanded={expanded}
                assignExpand={assignExpand} />
        })

        return (
            <div className="book-list">
                <ul>
                    {simpleList}
                </ul>
            </div>
        )
    }
}

export default BookList;