const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors(
  {
    origin: [process.env.FRONTEND_DEV, process.env.FRONTEND],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));


if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  // Serve static files from the React app build directory
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}



app.listen(port, () => {
  console.log(`MiniNote Backend listening at port ${port}`);
});
