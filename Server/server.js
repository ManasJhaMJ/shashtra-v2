const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000; // Use Render's port

app.use(
  cors({
    origin: "https://shashtra.in/", // Change to your frontend URL
    methods: "POST",
    allowedHeaders: "Content-Type",
  })
);
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Payment Route
app.post("/api/payment", async (req, res) => {
  try {
    const options = {
      amount: 100, // Amount in paise (1 INR)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating payment");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});