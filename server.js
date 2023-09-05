const express = require("express");
require('dotenv').config();
const app = express();


app.get('/api/user',(req,res) => {
    res.send({name:"satyam",roll:26});
})

app.listen(process.env.PORT,() => {
    console.log(`listening to port ${process.env.PORT},By ${process.env.NAME}`);
})

