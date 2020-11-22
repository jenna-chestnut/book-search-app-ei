import React from 'react';


class Book extends React.Component {
    render() {
        const { assignExpand, details, expanded } = this.props;
        const { title, author, description, image,
            previewLink, price, rating } = this.props.details;

        const expandView =
            expanded === details ?
                <>
                    <span className='rating'>
                        <b>Rating:</b> {rating ? rating + '/5' 
                        : 'Rating unavailable'}
                    </span>
                    <p>{description}</p>
                    <a href={previewLink}
                        target='_blank'
                        rel="noopener noreferrer">Click to preview</a>
                </>
                : ''

        return (
            <li className='simple-book'>
                <div className='group'>

                <div className='item'>
                <img src={image} alt={title} />
                </div>

                <div className='item'>
                <h2 className='book-title'>{title}</h2>
                <span><b>Price:</b>  {price}</span>
                <span><b>Author:</b>  {author}</span>
                <button onClick={() => assignExpand(details)}>
                    Details
                </button>
                </div>

                </div>
                {expandView}
                <hr/>
            </li>
        )
    }
}

export default Book;