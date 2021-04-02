


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
        <div className='container'>
            {
                loading ? (

                    <div className=" text-center ">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (

                    <div className="row g-4 mt-3" >
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