import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 3001; // Your backend server will run here
const MONGODB_URI = process.env.MONGODB_URI; // from your .env file
const DB_NAME = "PulseCheck"; // your database name

// Middleware
app.use(cors());
app.use(express.json());

let client;
let db;

// Connect to MongoDB
async function connectToDatabase() {
  client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log("✅ Connected to MongoDB");
}

// API Route: POST /api/submitEntry
app.post("/api/submitEntry", async (req, res) => {
  try {
    const body = req.body;
    const collection = db.collection("users"); // your collection name

    const result = await collection.insertOne({
      ...body,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("❌ Error inserting entry:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start server
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Backend server running at http://localhost:${PORT}`);
  });
});