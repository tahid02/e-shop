


import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Order from './Order';

const AllOrder = () => {

    const [allOrder,setAllOrder] = useState([])
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)


    useEffect(  () => {
        fetch(`https://limitless-escarpment-38206.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])
    return (
        <div className='mt-3'>
                        <h4>Orders </h4>

            {
                allOrder.map( order => <Order {...order} /> )
            }
        </div>
    );
};

export default AllOrder;