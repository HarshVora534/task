import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

  );
}

export default Header;
