const express = require('express');
const connection = require('./db.js')
app = express();

app.listen(3000,()=>{
    
    console.log("Server Running at Port 3000");
    connection();
})