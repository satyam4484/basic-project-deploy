const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();
const app = express();


app.get('/api/user', (req, res) => {
    res.send({ name: "satyam", roll: 26 });
})

app.get('/api/getallname', (req, res) => {
    res.send({
        "error": false,
        "message": "",
        "data": [
            {
                "_id": "64e758fcb65070059db2ff90",
                "contact": {
                    "_id": "64e758fab65070059db2ff8b",
                    "name": "Employee 1"
                },
                "category": "64e7565d6abff914ab30d5ff",
                "employer": "64e75786b65070059db2ff74",
                "__v": 0
            },
            {
                "_id": "64e75913b65070059db2ff97",
                "contact": {
                    "_id": "64e75912b65070059db2ff92",
                    "name": "Employee 2"
                },
                "category": "64e7565d6abff914ab30d5ff",
                "employer": "64e75786b65070059db2ff74",
                "__v": 0
            }
        ]
    })
})
mongoose.connect("mongodb+srv://satyamdsingh123456:lTgKubEX1OOFQPzM@cluster0.szokskb.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to mongodbserver");
}).catch(error => {
    console.log("something went wrong with mongodb server", error);
});


app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT},By and name is ${process.env.NAME}`);
})

