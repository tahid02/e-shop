
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";




const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        console.log(data)
        const productData = {

            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `https://limitless-escarpment-38206.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a574dcbb50717480e9f504d58b7b8a0a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='shadow-lg'>

            <h5 className='my-3'> Add Product  </h5>

            <form onSubmit={handleSubmit(onSubmit)} >
                {/* <div className="d-flex justify-content-evenly "> */}
                <div className="row px-4">


                    <div className='col col-md-6 text-start '>
                        <label htmlFor=""> Name:</label>
                        <input name="name" placeholder="Enter Name" ref={register} />
                    </div>
                    <div className='col col-md-6 text-end'>
                        <label htmlFor="">Weight: </label>
                        <input name="weight" placeholder="Enter weight" ref={register} />
                    </div>

                    {/* </div> */}
                    {/* <div className="d-flex justify-content-evenly my-3"> */}
                    <div className='col col-md-6 text-start my-3'>
                        <label htmlFor="">Price :  </label>
                        <input name="price" placeholder=" Enter price" ref={register} />

                    </div>
                    <div className='col col-md-6 text-end my-3'>
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    </div>
                    {/* </div> */}
                </div>


                <div className="d-flex justify-content-end me-4 ">
                    <input type="submit" value='save' className='btn btn-success'/>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;