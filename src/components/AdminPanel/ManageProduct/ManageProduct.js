


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
           
        <h5 className='my-3'>Manage Product </h5>
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