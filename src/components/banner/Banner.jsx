import React from 'react';
import heroImg from "../../assets/book.png"

const Banner = () => {
    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroImg}
                />
                <div>
                    <h1 className="text-5xl font-bold w-2/3 mb-10">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;