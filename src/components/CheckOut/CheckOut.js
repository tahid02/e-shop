import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";



const CheckOut = () => {
    const { id } = useParams();
    const [productCheckOut, setProductCheckOut] = useState({})
    const { name, weight, price } = productCheckOut;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`https://limitless-escarpment-38206.herokuapp.com/checkOut/${id}`)
            .then(res => res.json())
            .then(data => setProductCheckOut(data))
            .catch(err => console.log(err))
    }, [])



    const handleOrder = () => {

        const order = {
            ...productCheckOut,
            qty: 1,
            email: loggedInUser.email,
            date: new Date().toLocaleDateString()

        }

        const url = `https://limitless-escarpment-38206.herokuapp.com/addOrder`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => console.log('server side response', res))
            .catch(err => console.log(err))
    }

    return (
        <div className='container mt-4'>
            {/* {
                hasChecked && <div> */}
            <h4 className='text-start'> Check Out</h4>
            <table className="table table-hover shadow-lg">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <th scope="row">1</th> */}
                        <td> {name}</td>
                        <td>{weight}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td > <strong> Total </strong> </td>
                        <td colSpan='2'></td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link to="/orders">
                    <button className="btn btn-success" onClick={handleOrder}>Checkout </button>
                </Link>
            </div>

        </div>
    );
};

export default CheckOut;