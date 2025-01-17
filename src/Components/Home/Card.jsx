import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Card({ product }) {
    const { id, product_title, product_image, price, rating } = product;

    const navigate = useNavigate();

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<span key={i} className="text-yellow-500 text-xl">★</span>);
          } else {
            stars.push(<span key={i} className="text-gray-300 text-xl">★</span>);
          }
        }
        return stars;
      };
 
 
    return (
        <Link to={`/productdetails/${id}`} className="w-full max-w-xs md:max-w-sm lg:max-w-md bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-all transform hover:scale-105 duration-300 mb-4 mx-auto">
      <div className="relative h-40 md:h-52 w-full">
        <img
          className="w-full h-full object-contain"
          src={product_image}
          alt={`${product_title} image`}
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">{product_title}</h2>
        <p className="text-sm text-gray-500 mt-1">Price: ${price}</p>

        <div className="mt-1">
            {renderStars()}
            <span className="ml-2 bg-gray-100 text-black text-base rounded-full px-2 py-1">{rating}</span>
          </div>

        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();  // Prevents Link navigation when button is clicked
              navigate(`/productdetails/${id}`);
            }}
            className="btn w-full md:w-fit bg-transparent text-violet-500 border-2 border-violet-500 hover:text-white py-2 rounded-full hover:bg-violet-600 px-4 mt-4"
          >
            See in Details
          </button>
        </div>
      </div>
    </Link>
    );
}
