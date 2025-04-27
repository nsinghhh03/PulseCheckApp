import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is undefined");
}

const DB_NAME = "PulseCheck";

let client = null;
let db = null;

/**
 * Connect to MongoDB and return the database instance.
 */
async function connect() {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log("Connected to MongoDB");
    }
    return client.db(DB_NAME);
}

/**
 * Get a specific collection from the database.
 * @param {string} collectionName - The name of the collection to retrieve.
 */
export default async function getCollection(collectionName) {
    if (!db) {
        db = await connect();
    }
    return db.collection(collectionName);
}