

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)

    return (
        <div className='ms-2'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"> eShop</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav d-flex justify-content-center align-items-center">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/orders">Orders</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/admin">Admin </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/deals">Deals </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/login"> <button className="btn btn-primary"> Login </button>  </Link>
                            </li>
                            <span>{loggedInUser.name}</span>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;