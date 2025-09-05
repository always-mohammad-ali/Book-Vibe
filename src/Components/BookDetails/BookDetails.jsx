import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    console.log(bookId)

    return (
        <div>
            <h1 className='text-black'>hey{bookId}</h1>
        </div>
    );
};

export default BookDetails;