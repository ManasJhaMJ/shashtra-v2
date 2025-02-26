const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const cors = require("cors");

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
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
      amount: 100, // 1 INR (Razorpay expects paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send("Error creating payment");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
