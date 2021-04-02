

const center_item = {
    display:'flex',
    alignItems:'center'
}
const Order = ({ name, qty, weight, price, imageURL, date }) => {
    return (
        <div className='container'>
            <div className="row shadow my-3">
                <div className="col">
                    {
                        <img src={imageURL} alt="" style={{ width: '100px', height: '100px' }} />
                    }
                </div>
                <div className="col d-flex align-items-center" > <strong> {name} </strong> </div>
                <div className="col d-flex align-items-center"> Qty: {qty} </div>
                <div className="col d-flex align-items-center"> {weight} </div>
                <div className="col d-flex align-items-center"> ${price} </div>               
                <div className="col d-flex align-items-center"> {date} </div>
            </div>

               

        </div>
    );
};

export default Order;