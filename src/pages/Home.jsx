import React from 'react';
import Banner from '../components/banner/Banner';
import { useLoaderData } from 'react-router';
import Book from '../components/book/Book';

const Home = () => {
    const allBooksData = useLoaderData();
    console.log(allBooksData)
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center font-bold text-4xl mb-7'>Books</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    allBooksData.map(singleBook => <Book 
                        key={singleBook.bookId} 
                        singleBook={singleBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;