import React from 'react';
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-blue-300'>
            <img className='h-64' src={errorImg} alt="" />
            <Link className='btn mt-10' to={'/'}>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;