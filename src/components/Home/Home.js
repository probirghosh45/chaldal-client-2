import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
     fetch('http://localhost:8500/events')
     .then(res => res.json())
     .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {/* This is Home */}
             <section className="home">
                 <div className="container">
                     <div className="products">
                                {
                                  products.map(product => <ProductsCard product={product} key={product.id}></ProductsCard>)
                                }               
                     </div>
                 </div>
             </section>
        </div>
    );
};

export default Home;