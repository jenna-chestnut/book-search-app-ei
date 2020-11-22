import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SearchInput from './SearchInputs/SearchInput';
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      expanded: null,
      error: null,
      loading: false
    };
  }

  sendBookSearch = (e, search, printType, bookType) => {

    e.preventDefault();

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}`

    printType !== 'NONE' ? url += `?printType=${printType}` : url += ``;
    bookType !== 'NONE' ? url += `?filter=${bookType}` : url += ``;

    this.setState({ loading: true });

    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error()
        } else return resp.json()
      })
      .then(data => {
        if (data.items === undefined) {
          throw new Error('Sorry!! Book not found.');
        } else {
        const books = data.items.map(item => {
          let book = item.volumeInfo;
          let newItem = {
            title: book.title,
            author: book.authors ?
              book.authors[0] : 'Not found',
            description: book.description,
            image: book.imageLinks ? 
            book.imageLinks.thumbnail : 'https://www.diyglass.com.au/components/com_virtuemart/assets/images/vmgeneral/noimage.jpg', 
            previewLink: book.previewLink,
            rating: book.averageRating,
            price: item.saleInfo.retailPrice ?
              `$${item.saleInfo.retailPrice.amount}` : 'Unavailable'
          }
          return newItem
        })
        this.setState({
          books,
          loading: false
        })}
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        })
      })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  assignExpand = (item) => {
    this.setState({
      expanded: item
    })
  }

  render() {
    const error = this.state.error ?
      <div className='error'>{this.state.error}
        <button onClick={this.clearError}>Clear</button>
      </div>
      : '';

    const loading = this.state.loading ?
      <div className='loading'><img src='https://gifimage.net/wp-content/uploads/2017/08/spinner-gif-16.gif' alt='loading' />
      </div>
      : '';

    return (
      <div className="App">
        {error}
        <Header />
        <SearchInput handleSubmit={this.sendBookSearch} />
        <hr/>
        {loading}
        <BookList books={this.state.books}
          expanded={this.state.expanded}
          assignExpand={this.assignExpand} />
      </div>
    );
  }
}

export default App;
