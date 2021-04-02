


import { useEffect, useState } from 'react';
import Product from './Product';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://limitless-escarpment-38206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            this is home
            {
                loading ? (

                    <div class=" text-center ">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (

                    <div className="row g-4">
                        {
                            products.map(product => <Product {...product} key={product._id} />)
                        }
                    </div>
                )
            }




        </div>
    );
};

export default Home;