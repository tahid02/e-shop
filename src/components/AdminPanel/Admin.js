


import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';

const Admin = () => {

    const [addProduct, setAddProduct] = useState(true)
    // const [customizeProduct,setCustomizeProduct] = useState('addProduct') work on it later

    
    return (

        <div className="container">
            <div className="row mt-3">
                <div className="col col-md-3">
                   <button className="btn"  onClick={() => setAddProduct(false)}>Manage Product </button>
                    <button className="btn" onClick={() => setAddProduct(true)}> Add Product </button> 
                    {/* <button className="btn" onClick={() => setCustomizeProduct('editProduct)}> Edit Product </button>  */}
                </div>
                <div className="col col-md-9">
                    {
                        addProduct ? <AddProduct /> : <ManageProduct />
                    }
                   {/* {
                       customizeProduct === 'editProduct' && <EditProduct >
                   } */}
                </div>
            </div>
        </div>

    );
};

export default Admin;