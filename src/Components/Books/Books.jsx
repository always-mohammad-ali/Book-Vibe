import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('../../../public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='text-black my-10 '>
            <h1 className='text-center text-5xl font-semibold my-10 text-[red to green] '>Books</h1>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-8 '>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;