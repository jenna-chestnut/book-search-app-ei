import React from 'react';

class SearchTerm extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <div className='search-term'>
                <label htmlFor='search-term'>Search for:</label>

                <input type='text' id='search-term'
                    value={this.props.search}
                    onChange={(e) => handleChange('search', e.target.value)} required>
                </input>

                <input type='submit' value='Search'></input>

            </div>
        )
    }
}

export default SearchTerm;