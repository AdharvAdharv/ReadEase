import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItems from './CartItems';

const CartGrid = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get('http://localhost:8000/items', { withCredentials: true });
        setCartItems(res.data);
      } catch (err) {
        console.error('Error fetching cart items', err);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      {cartItems.map(item => (
        <CartItems key={item._id} book={item.bookId} />
      ))}
    </div>
  );
};

export default CartGrid;
