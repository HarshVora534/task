import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <h2 className='Product'>Products</h2>
      <ul className='products'>
        {products.map(product => (
          <li className='productList' key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
