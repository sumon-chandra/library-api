"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
// import bookRoutes from './modules/books/book.route';
// import borrowRoutes from './modules/borrow/borrow.route';
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
// app.use('/api/books', bookRoutes);
// app.use('/api/borrow', borrowRoutes);
exports.default = app;
