import express from 'express';
import { bookStoreController, orderController } from './bookStore.controllers';
const router = express.Router();

// will call controller function All Routes
router.post('/api/products', bookStoreController.createBookStore);

router.get('/api/products', bookStoreController.getAllBooks);

router.get('/api/products/:productId', bookStoreController.getSpecificBooks);

router.delete('/api/products/:productId', bookStoreController.deleteBooks);

router.put(
  '/api/products/:productId',
  bookStoreController.updatePriceAndQuantitye,
);

//Orderes Related Routes
router.post('/api/orders', orderController.createOrder);

router.get('/api/orders/revenue', orderController.calculatePrice);

export const bookRoutes = router;
