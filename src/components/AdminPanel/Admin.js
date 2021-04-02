


import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ManageProduct from './ManageProduct/ManageProduct';

const Admin = () => {

    // const [addProduct, setAddProduct] = useState('addProduct')
    const [customizeProduct, setCustomizeProduct] = useState('addProduct')


    return (

        <div className="ms-2 me-3 mt-3" >
            <div className="row ">
                <div className="col col-md-3 " style={{ backgroundColor: 'darkGreen', height: '100vh' }} >
                    <h5 className='my-3 text-light'>eShop</h5>

                    <button className="btn text-light d-block ps-5" onClick={() => setCustomizeProduct('manageProduct')}>
                        Manage Product
                    </button>

                    <button className="btn text-light d-block ps-5" onClick={() => setCustomizeProduct('addProduct')}>
                        Add Product
                    </button>

                    <button className="btn text-light d-block ps-5" onClick={() => setCustomizeProduct('editProduct')}>
                        Edit Product
                    </button>

                </div>
                <div className="col col-md-9 ps-4">
{/* customize product as needed */}
                    {
                        customizeProduct === 'editProduct' && <EditProduct />
                    }
                    {
                        customizeProduct === 'addProduct' && <AddProduct />
                    }
                    {
                        customizeProduct === 'manageProduct' && <ManageProduct />
                    }
                </div>
            </div>
        </div>

    );
};

export default Admin;