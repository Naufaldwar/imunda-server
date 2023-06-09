require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb://naufaldwiariananto:ym4pHpHCzlvMrGzQ@ac-2p2xh3l-shard-00-00.ngpiped.mongodb.net:27017,ac-2p2xh3l-shard-00-01.ngpiped.mongodb.net:27017,ac-2p2xh3l-shard-00-02.ngpiped.mongodb.net:27017/?ssl=true&replicaSet=atlas-hfazuy-shard-0&authSource=admin&retryWrites=true&w=majority",
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
