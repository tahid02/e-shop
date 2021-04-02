
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
            price:data.price,
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
                console.log( response.data.data.display_url )
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className='bg-primary'>

            <h4>this is add Product part  </h4>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" placeholder="Enter Name" ref={register} />
                <br />
                <input name="weight" placeholder="Enter weight" ref={register} />
                <br />
                <input name="price" placeholder=" Enter price" ref={register} />
                <br />
               
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;