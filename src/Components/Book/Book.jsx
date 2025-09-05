import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, tags } = book;
  return (
    <div>
      <div className="card border-2 border-gray-200 bg-base-100 w-96 shadow-xl bg-white p-5 ">
        <figure className="bg-gray-100 p-5">
          <img className="h-40" src={image}/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
