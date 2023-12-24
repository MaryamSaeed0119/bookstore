const express = require('express');
const cors = require('cors'); // Add this line
const connection = require('./db.js')
const bodyParser = require('body-parser');
const bookRouter = require('../Backend/routes/bookRoute.js')


app = express();
connection();
app.use(cors({
  origin: "https://fluffy-guide-v6v7w9qj7579hxwwp-5173.app.github.dev",
  credentials: true,
  allowedHeaders: ['content-type']
}));

app.use(bodyParser.json());


app.use("/api", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})