require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb://naufaldwiariananto:suqc15NzJaCG9Lu2@ac-wxu6n3x-shard-00-00.ydcdonf.mongodb.net:27017,ac-wxu6n3x-shard-00-01.ydcdonf.mongodb.net:27017,ac-wxu6n3x-shard-00-02.ydcdonf.mongodb.net:27017/?ssl=true&replicaSet=atlas-7qlv4q-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database Connected"));

app.use(express.json());

// Routes
const listRouter = require("./routes/list");
app.use("/list", listRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
