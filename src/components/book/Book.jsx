import React from 'react';

const Book = ({ singleBook }) => {
    const { bookName, image, publisher } = singleBook;
    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <figure className='bg-gray-200 py-6'>
                <img
                    className='h-32'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {publisher}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;