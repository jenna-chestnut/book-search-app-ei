import React from 'react';
import './SearchInput.css';
import SearchTerm from './SearchTerm';
import BookTypeSelect from './BookTypeSelect';
import PrintTypeSelect from './PrintTypeSelect';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            bookType: 'NONE',
            printType: 'NONE'
        };
    }

    setSearch = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    resetSearchState = () => {
        this.setState({
            search: '',
            bookType: 'NONE',
            printType: 'NONE'
        })
    }

    render() {
        const { search, bookType, printType } = this.state;
        const { handleSubmit } = this.props;
        return (
            <div className="search-input">

                <form onSubmit={(e) => {
                    handleSubmit(e, search, bookType, printType);
                    this.resetSearchState();
                }}>

                    <SearchTerm search={this.state.search}
                        handleChange={this.setSearch} />

                    <div className='selects'>
                    <PrintTypeSelect
                        handleChange={this.setSearch} />

                    <BookTypeSelect
                        handleChange={this.setSearch} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchInput;