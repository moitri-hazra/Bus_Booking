import app from './src/app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000; 

const DATABASE_URL = process.env.MongoKey;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err)); // Improved error handling
db.once('open', () => console.log('Connected to the database'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
