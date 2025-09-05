import React from "react";
import { FaStar } from "react-icons/fa6";


const Book = ({ book }) => {
  const { bookName, author, image, tags, category, rating } = book;
  return (
    <div>
      <div className="card border-2 border-gray-200 bg-base-100 w-96 shadow-xl bg-white p-5 ">
        <figure className="bg-gray-100 p-5 rounded-xl">
          <img className="h-40" src={image} />
        </figure>
        
        <div className="mt-5">
            {
                tags.map( tag => <button className="btn btn-outline btn-success ml-3">{tag}</button>)
            }
        </div>

        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            {bookName}
            <div className="badge badge-secondary font-semibold ">NEW</div>
          </h2>
          <p className="text-gray-500 font-semibold text-lg">By: {author}</p>


          
          <div className="card-actions justify-between mt-6">
            <div className="badge badge-outline border-0 font-semibold text-sm text-gray-500">{category}</div>
            <div className="badge badge-outline border-0 font-bold text-lg text-gray-500">{rating}<FaStar className="text-xl text-orange-500" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
