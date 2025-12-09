const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
