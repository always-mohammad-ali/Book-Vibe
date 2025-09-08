
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishReadList } from '../../Utilities/addToDB';

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const bookData = useLoaderData();
    console.log(bookData)

    const book = bookData.find(book => book.bookId === id)
    
    const {author, image, review, bookName, tags, publisher, yearOfPublishing, category, rating, totalPages} = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }

    const handleReadList = (id) =>{
        addToWishReadList(id)
    }

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }

    return (
        <div className='flex justify-around w-5/6 mx-auto gap-12 my-12 '>
            <div className=' w-1/2  bg-gray-100 p-10 rounded-xl'>
                 <img className='w-86 h-80 mx-auto' src={image} alt="" />
            </div>
            <div className='text-black w-1/2'>
                <h1 className='text-4xl font-semibold my-3'>{bookName}</h1>
                <p className='text-gray-500 font-bold my-3'>By: {author}</p>
                <p className='text-gray-500 font-bold mb-7'>{category}</p>
                <p className='text-gray-500 mb-5 text-xs'><span className='text-black text-lg font-bold'>Review:</span> {review}</p>
                <p className='mb-6'><span className='font-bold mr-7'>Tag </span>
                    {
                        tags.map(tag => <button className='border-2 border-green-200 mr-4 px-3 py-1'>{tag}</button>)
                    }
                </p>

                <div>
                    <div className='flex gap-5 justify-between w-3/4'>
                        <p className='text-gray-500'>Number of Pages:</p>
                        <p className='font-bold'>{totalPages}</p>
                    </div>
                    <div className='flex gap-5 justify-between w-3/4'>
                        <p className='text-gray-500'>Publisher:</p>
                        <p className='font-bold'>{publisher}</p>
                    </div>
                    <div className='flex gap-5 justify-between w-3/4'>
                        <p className='text-gray-500'>Year Of Publishing:</p>
                        <p className='font-bold'>{yearOfPublishing}</p>
                    </div>
                    <div className='flex gap-5 justify-between w-3/4'>
                        <p className='text-gray-500'>Rating:</p>
                        <p className='font-bold'>{rating}</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-success mr-5">Mark as Read</button>
                    <button onClick={() => handleReadList(bookId)} className="btn btn-outline btn-success">Add to Read List</button>
                    <button onClick={handleGoBack} className='btn btn-ghost ml-5 btn-outline'>Go back</button>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;