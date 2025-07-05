import express from 'express';
import cors from 'cors';
import bookRoutes from './modules/books/book.route';
import borrowRoutes from './modules/borrow/borrow.route';

const app = express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true, // Allow credentials if needed
    }
))
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Library Management System API. Go to /api/books for book operations and /api/borrow for borrowing operations.");
});
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

export default app;
