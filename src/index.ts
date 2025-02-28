import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import Contact from './model/contact';
import path from "path";

const app = express();
dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Function to connect to MongoDB with retry mechanism
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Retry connection after 1 seconds
    setTimeout(connectMongoDB, 1000);
  }
}

connectMongoDB();

// Middleware to check MongoDB connection before processing /submit
const checkMongoDBConnection = async (req: Request, res: Response, next: NextFunction) => {
  if (mongoose.connection.readyState !== 1) {
    await connectMongoDB();
  }
  next();
}

app.post('/submit', checkMongoDBConnection, async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
