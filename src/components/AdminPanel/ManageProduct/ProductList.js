

const ProductList = ({ _id, name, weight, price, imageURL }) => {

    const deleteProduct = (e, id) => {
        console.log(e.target.parentNode.parentNode, _id, name, weight, price, imageURL)

        fetch(`https://limitless-escarpment-38206.herokuapp.com/delete/${id}`, {
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data)
                e.target.parentNode.parentNode.style.display = 'none';
            }
        })
    }
    return (




        <tr className=''>
            {/* <th scope="row">1</th> */}
            <td> {name}</td>
            <td>{weight}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-success">edit</button>
                <button className="btn btn-danger" onClick={(e) =>deleteProduct( e, _id)}>delete</button>
            </td>
        </tr>



    );
};

export default ProductList;