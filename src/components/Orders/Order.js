

import React from 'react';

const Order = ({name,qty,weight,price,imageURL,date}) => {
    return (
        <div>
            this is order page
            {
                <img src={imageURL} alt="" style={{ width:'200px',height:'200px'}}/>
            }
                {qty} {weight} {price} {name} {date}

        </div>
    );
};

export default Order;