import React from 'react';

class PrintTypeSelect extends React.Component {
    render() {
        const { handleChange } = this.props;
        return (
            <>
                <label htmlFor='print-type'>Print Type:</label>
                <select id='print-type'
                    onChange={(e) => handleChange('printType', e.target.value)}>
                    <option value='NONE'>Select Print Type</option>
                    <option value='ALL'>All Types</option>
                    <option value='BOOKS'>Books</option>
                    <option value='MAGAZINES'>Magazines</option>
                </select>
            </>
        )
    }
}

export default PrintTypeSelect;