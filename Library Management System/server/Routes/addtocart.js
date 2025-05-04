import {Router} from 'express';
import { authenticate } from "../Middleware/auth.js";
import { Cart } from '../Model/Schema.js';
import { Books } from '../Model/Schema.js';
const cartRouter= Router();

cartRouter.post('/addtocart', authenticate, async (req, res) => {
  try {
    const { bookId } = req.body;

    const book = await Books.findById(bookId);
    if (!book) {
      return res.status(404).send('Book not found');
    }

    const newCartItem = new Cart({
      userName: req.user,
      bookId: book._id,
      bookName: book.bookName,
      price: book.price,
      quantity: 1,
    });

    await newCartItem.save();
    res.status(201).send('Book added to cart');
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error');
  }
});


cartRouter.get('/items', authenticate, async (req, res) => {
    try {
        console.log("get Cart");
        
      const userId = req.user;
      
      const cartItems = await Cart.find({ userId: req.user }).populate('bookId');
      console.log(cartItems);
  
      res.status(200).json(cartItems);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
export default cartRouter;
