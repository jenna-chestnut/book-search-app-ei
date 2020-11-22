import React from 'react';

class BookTypeSelect extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <>
                <label htmlFor='book-type'>Book Type:</label>
                <select id='book-type'
                    onChange={(e) => handleChange('bookType', e.target.value)}>
                    <option value='NONE'>Select Book Type</option>
                    <option value='ebooks'>E-Books</option>
                    <option value='free-ebooks'>Free E-Books</option>
                    <option value='paid-ebooks'>Paid E-Books</option>
                    <option value='full'>Full</option>
                    <option value='partial'>Partial</option>
                </select>
            </>
        )
    }
}

export default BookTypeSelect;