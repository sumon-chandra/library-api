import express from 'express';
import bookRoutes from './modules/books/book.route';
import borrowRoutes from './modules/borrow/borrow.route';

const app = express();
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

export default app;
