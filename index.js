require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database Connected"));

app.use(express.json());

// Routes
const listRouter = require("./routes/list");
app.use("/list", listRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
