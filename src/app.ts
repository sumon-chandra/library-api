import express from 'express';
// import cors from 'cors';
// import bookRoutes from './modules/books/book.route';
// import borrowRoutes from './modules/borrow/borrow.route';

const app = express();

// app.use(cors());
app.use(express.json());

// app.use('/api/books', bookRoutes);
// app.use('/api/borrow', borrowRoutes);

export default app;
