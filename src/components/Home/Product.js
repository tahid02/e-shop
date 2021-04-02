

import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ _id, name, weight, price, imageURL }) => {

    // console.log('all info',_id,name,weight,price,imageURL)



    return (
        <div class="col col-lg-3 col-md-4">
            <div class="card h-100">
                <img src={imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"> {name}-{weight} </h5>
                    <p class="card-text">

                        <span>${price} </span>
                    </p>
                </div>
                <div class="card-footer">
                    <Link to={`/checkOut/${_id}`}>
                        <button className="btn btn-success">Buy Now </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;