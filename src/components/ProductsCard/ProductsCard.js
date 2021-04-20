import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.css';
const ProductsCard = (props) => {
    console.log(props); 
    
    const {name,imageURL,price,_id}=props.product
    return (
        <div>
            <div  className="product__card">
                <div className="product__img">
                 <img src={imageURL} alt={name} className="product__icon"/>
                </div>
                <h2 className="products__name">{name}</h2><br/>
                <h4 className="products__price">${price}</h4> 
                <Link to={`/checkout/${_id}`}>
                    <button className="products__price" className="btn__primary">Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsCard;