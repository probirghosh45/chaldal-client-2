import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL]=useState(null)


    const onSubmit = data => {
        const eventData = {
          name: data.name,
          price:data.price,
          Quantity:data.Quantity,
          imageURL: imageURL
        };
       const url= `http://localhost:8500/addProduct`;
       console.log(eventData);
   
    fetch(url,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(eventData)
    })
   
    .then(res=>console.log('server activated',res));





    }


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','4441c3916186266ff77bdd932599ecfe'); 
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
         imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });


    }
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
            <div>
            <h2>Add Product</h2>   
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="Product" ref={register} />
           <br/>
           <input name="Quantity" defaultValue="Quantity" ref={register} />
           <br/>
           <input name="price" defaultValue="Price" ref={register} />
           <br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br/>
             <input type="submit" />
            </form>
            </div>

    );
};

export default AddProducts;