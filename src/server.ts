import mongoose from 'mongoose';
import app from './app';

const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://idevsumon:dLCbotD4MczqIuuT@cluster2025.dbuw7xd.mongodb.net/LibraryDB?retryWrites=true&w=majority&appName=Cluster2025';

async function main() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Database connected');

        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('❌ Failed to connect to DB', err);
    }
}

main();
