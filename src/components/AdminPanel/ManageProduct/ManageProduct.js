


import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const ManageProduct = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('https://limitless-escarpment-38206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductList(data))
    }, [])


    return (
        <div className=''>
           

            <table className="table table-hover text-start">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productList.map(pd => <ProductList {...pd} />)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default ManageProduct;