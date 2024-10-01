const express = require('express');
const connection = require('./config/Mongo');

const cors =require("cors");
const app = express();
const router = require('./Router/Router');

connection();
app.use(express.json());

app.use(cors());

app.use('/',router)
const PORT  = 4008

app.listen(PORT,console.log(`server is running on ${PORT}`));
