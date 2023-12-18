const express = require('express');
const connection = require('./db.js')
const bodyParser = require('body-parser');
const bookRouter = require('../Backend/routes/bookRoute.js')

app = express();
app.use(bodyParser.json());

app.use("/api", bookRouter);



app.listen(3000,()=>{
    
    console.log("Server Running at Port 3000");
    connection();
})