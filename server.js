const express = require("express");
const app = express();
const PORT = 8000;


app.get('/api/user',(req,res) => {
    res.send({name:"satyam",roll:26});
})

app.listen(PORT,() => {
    console.log(`listening to port ${PORT}`);
})