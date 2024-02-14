import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Contact, { IContact } from './model/contact';
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://ankitmatth:myPortfolio@cluster0.abovzon.mongodb.net/myPortfolio';

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
.then(() => { 
  console.log("Database connected.");
})
.catch((e) => {
  console.error("Error connecting to MongoDB:", e);
});

app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));

app.post('/submit', async (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;