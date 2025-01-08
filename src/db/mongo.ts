import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

const client = new MongoClient(uri);
let dbInstance: MongoClient | null = null;

/**
 * Connects to the MongoDB database and returns the database instance.
 * Ensures a single instance of the MongoClient is reused.
 */
export async function connectToDatabase() {
    if (!dbInstance) {
        try {
            await client.connect();
            dbInstance = client;
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection failed:', error);
            throw new Error('Failed to connect to MongoDB');
        }
    }
    return client.db('my_database'); // Replace with your database name
}

/**
 * Gracefully closes the MongoDB connection.
 */
export async function closeDatabaseConnection() {
    if (dbInstance) {
        try {
            await client.close();
            dbInstance = null;
            console.log('MongoDB connection closed');
        } catch (error) {
            console.error('Error while closing MongoDB connection:', error);
        }
    }
}
